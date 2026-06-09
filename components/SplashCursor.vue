<template>
  <div class="fixed top-0 left-0 z-50 pointer-events-none w-screen h-screen">
    <canvas ref="canvasRef" id="fluid" class="w-screen h-screen block"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasRef = ref(null)
let cleanup = null
let rafId = null

onMounted(() => {
  try {
    const canvas = canvasRef.value
    if (!canvas) return

    const pointers = [{
      id: -1,
      texcoordX: 0,
      texcoordY: 0,
      prevTexcoordX: 0,
      prevTexcoordY: 0,
      deltaX: 0,
      deltaY: 0,
      down: false,
      moved: false,
      color: { r: 0, g: 0, b: 0 }
    }]

    const config = {
      SIM_RESOLUTION: 64,
      DYE_RESOLUTION: 256,
      DENSITY_DISSIPATION: 4,
      VELOCITY_DISSIPATION: 3,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 8,
      CURL: 15,
      SPLAT_RADIUS: 0.3,
      SPLAT_FORCE: 200,
      SHADING: false,
      COLOR_UPDATE_SPEED: 8,
      PAUSED: false,
      BACK_COLOR: { r: 0.5, g: 0, b: 0 },
      TRANSPARENT: true
    }

    const { gl, ext } = getWebGLContext(canvas)
    if (!gl || !ext) return
    if (!ext.supportLinearFiltering) {
      config.DYE_RESOLUTION = 256
      config.SHADING = false
    }

    function getWebGLContext(canvasEl) {
      const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false }
      let gl = canvasEl.getContext('webgl2', params) || canvasEl.getContext('webgl', params) || canvasEl.getContext('experimental-webgl', params)
      if (!gl) throw new Error('Unable to initialize WebGL.')

      const isWebGL2 = 'drawBuffers' in gl
      let supportLinearFiltering = false
      let halfFloat = null

      if (isWebGL2) {
        gl.getExtension('EXT_color_buffer_float')
        supportLinearFiltering = !!gl.getExtension('OES_texture_float_linear')
      } else {
        halfFloat = gl.getExtension('OES_texture_half_float')
        supportLinearFiltering = !!gl.getExtension('OES_texture_half_float_linear')
      }

      gl.clearColor(0, 0, 0, 1)
      const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : (halfFloat?.HALF_FLOAT_OES || 0)

      const formatRGBA = getSupportedFormat(gl, isWebGL2 ? gl.RGBA16F : gl.RGBA, gl.RGBA, halfFloatTexType)
      const formatRG = getSupportedFormat(gl, isWebGL2 ? gl.RG16F : gl.RGBA, gl.RGBA, halfFloatTexType)
      const formatR = getSupportedFormat(gl, isWebGL2 ? gl.R16F : gl.RGBA, gl.RGBA, halfFloatTexType)

      return { gl, ext: { formatRGBA, formatRG, formatR, halfFloatTexType, supportLinearFiltering } }
    }

    function getSupportedFormat(gl, internalFormat, format, type) {
      if (!supportRenderTextureFormat(gl, internalFormat, format, type)) return null
      return { internalFormat, format }
    }

    function supportRenderTextureFormat(gl, internalFormat, format, type) {
      const texture = gl.createTexture()
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null)
      const fbo = gl.createFramebuffer()
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
      return status === gl.FRAMEBUFFER_COMPLETE
    }

    function hashCode(s) {
      let hash = 0
      for (let i = 0; i < s.length; i++) { hash = (hash << 5) - hash + s.charCodeAt(i); hash |= 0 }
      return hash
    }

    function compileShader(type, source, keywords = null) {
      let keywordsString = keywords ? keywords.map(k => `#define ${k}`).join('\n') + '\n' : ''
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, keywordsString + source)
      gl.compileShader(shader)
      return shader
    }

    function createProgram(vs, fs) {
      const program = gl.createProgram()
      if (!program) return null
      gl.attachShader(program, vs)
      gl.attachShader(program, fs)
      gl.linkProgram(program)
      return program
    }

    function getUniforms(program) {
      const uniforms = {}
      const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)
      for (let i = 0; i < count; i++) {
        const info = gl.getActiveUniform(program, i)
        if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name)
      }
      return uniforms
    }

    class Program {
      constructor(vs, fs) {
        this.program = createProgram(vs, fs)
        this.uniforms = this.program ? getUniforms(this.program) : {}
      }
      bind() { if (this.program) gl.useProgram(this.program) }
    }

    const baseVertexShader = compileShader(gl.VERTEX_SHADER, `precision highp float; attribute vec2 aPosition; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform vec2 texelSize; void main () { vUv = aPosition * 0.5 + 0.5; vL = vUv - vec2(texelSize.x, 0.0); vR = vUv + vec2(texelSize.x, 0.0); vT = vUv + vec2(0.0, texelSize.y); vB = vUv - vec2(0.0, texelSize.y); gl_Position = vec4(aPosition, 0.0, 1.0); }`)

    const copyShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; varying highp vec2 vUv; uniform sampler2D uTexture; void main () { gl_FragColor = texture2D(uTexture, vUv); }`)
    const clearShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; varying highp vec2 vUv; uniform sampler2D uTexture; uniform float value; void main () { gl_FragColor = value * texture2D(uTexture, vUv); }`)
    const displayShader = compileShader(gl.FRAGMENT_SHADER, `precision highp float; varying vec2 vUv; uniform sampler2D uTexture; void main () { vec3 c = texture2D(uTexture, vUv).rgb; float a = max(c.r, max(c.g, c.b)); gl_FragColor = vec4(c, a); }`)
    const splatShader = compileShader(gl.FRAGMENT_SHADER, `precision highp float; varying vec2 vUv; uniform sampler2D uTarget; uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius; void main () { vec2 p = vUv - point.xy; p.x *= aspectRatio; vec3 splat = exp(-dot(p, p) / radius) * color; vec3 base = texture2D(uTarget, vUv).xyz; gl_FragColor = vec4(base + splat, 1.0); }`)
    const advectionShader = compileShader(gl.FRAGMENT_SHADER, `precision highp float; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uSource; uniform vec2 texelSize; uniform vec2 dyeTexelSize; uniform float dt; uniform float dissipation; void main () { vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize; vec4 result = texture2D(uSource, coord); float decay = 1.0 + dissipation * dt; gl_FragColor = result / decay; }`, ext.supportLinearFiltering ? null : ['MANUAL_FILTERING'])
    const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; varying highp vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uVelocity; void main () { float L = texture2D(uVelocity, vL).x; float R = texture2D(uVelocity, vR).x; float T = texture2D(uVelocity, vT).y; float B = texture2D(uVelocity, vB).y; vec2 C = texture2D(uVelocity, vUv).xy; if (vL.x < 0.0) L = -C.x; if (vR.x > 1.0) R = -C.x; if (vT.y > 1.0) T = -C.y; if (vB.y < 0.0) B = -C.y; float div = 0.5 * (R - L + T - B); gl_FragColor = vec4(div, 0.0, 0.0, 1.0); }`)
    const curlShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; varying vec2 vUv; uniform sampler2D uVelocity; void main () { float L = texture2D(uVelocity, vUv - vec2(texelSize.x,0)).y; float R = texture2D(uVelocity, vUv + vec2(texelSize.x,0)).y; float T = texture2D(uVelocity, vUv + vec2(0,texelSize.y)).x; float B = texture2D(uVelocity, vUv - vec2(0,texelSize.y)).x; float vorticity = R - L - T + B; gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0); }`)
    const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `precision highp float; varying vec2 vUv; uniform sampler2D uVelocity; uniform sampler2D uCurl; uniform float curl; uniform float dt; void main () { vec2 texelSize = vec2(1.0/canvas.width,1.0/canvas.height); float L = texture2D(uCurl, vUv - vec2(texelSize.x,0)).x; float R = texture2D(uCurl, vUv + vec2(texelSize.x,0)).x; float T = texture2D(uCurl, vUv + vec2(0,texelSize.y)).x; float B = texture2D(uCurl, vUv - vec2(0,texelSize.y)).x; float C = texture2D(uCurl, vUv).x; vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L)); force /= length(force) + 0.0001; force *= curl * C; force.y *= -1.0; vec2 velocity = texture2D(uVelocity, vUv).xy; velocity += force * dt; velocity = min(max(velocity, -1000.0), 1000.0); gl_FragColor = vec4(velocity, 0.0, 1.0); }`)
    const pressureShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uDivergence; void main () { float L = texture2D(uPressure, vL).x; float R = texture2D(uPressure, vR).x; float T = texture2D(uPressure, vT).x; float B = texture2D(uPressure, vB).x; float C = texture2D(uPressure, vUv).x; float divergence = texture2D(uDivergence, vUv).x; float pressure = (L + R + B + T - divergence) * 0.25; gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0); }`)
    const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `precision mediump float; varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB; uniform sampler2D uPressure; uniform sampler2D uVelocity; void main () { float L = texture2D(uPressure, vL).x; float R = texture2D(uPressure, vR).x; float T = texture2D(uPressure, vT).x; float B = texture2D(uPressure, vB).x; vec2 velocity = texture2D(uVelocity, vUv).xy; velocity.xy -= vec2(R - L, T - B); gl_FragColor = vec4(velocity, 0.0, 1.0); }`)

    const copyProgram = new Program(baseVertexShader, copyShader)
    const clearProgram = new Program(baseVertexShader, clearShader)
    const splatProgram = new Program(baseVertexShader, splatShader)
    const advectionProgram = new Program(baseVertexShader, advectionShader)
    const divergenceProgram = new Program(baseVertexShader, divergenceShader)
    const curlProgram = new Program(baseVertexShader, curlShader)
    const vorticityProgram = new Program(baseVertexShader, vorticityShader)
    const pressureProgram = new Program(baseVertexShader, pressureShader)
    const gradienSubtractProgram = new Program(baseVertexShader, gradientSubtractShader)
    const displayProgram = new Program(baseVertexShader, displayShader)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,-1,1,1,1,1,-1]), gl.STATIC_DRAW)
    const elemBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elemBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0,1,2,0,2,3]), gl.STATIC_DRAW)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(0)

    const blit = (target, doClear = false) => {
      if (!target) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
      } else {
        gl.viewport(0, 0, target.width, target.height)
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo)
      }
      if (doClear) { gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT) }
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
    }

    let dye, velocity, divergence, curl, pressure

    function createFBO(w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0)
      const texture = gl.createTexture()
      gl.bindTexture(gl.TEXTURE_2D, texture)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null)
      const fbo = gl.createFramebuffer()
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
      gl.viewport(0, 0, w, h)
      gl.clear(gl.COLOR_BUFFER_BIT)
      return { texture, fbo, width: w, height: h, texelSizeX: 1/w, texelSizeY: 1/h, attach(id) { gl.activeTexture(gl.TEXTURE0 + id); gl.bindTexture(gl.TEXTURE_2D, texture); return id } }
    }

    function createDoubleFBO(w, h, internalFormat, format, type, param) {
      const fbo1 = createFBO(w, h, internalFormat, format, type, param)
      const fbo2 = createFBO(w, h, internalFormat, format, type, param)
      return { width: w, height: h, texelSizeX: fbo1.texelSizeX, texelSizeY: fbo1.texelSizeY, read: fbo1, write: fbo2, swap() { const tmp = this.read; this.read = this.write; this.write = tmp } }
    }

    function initFramebuffers() {
      const simRes = getResolution(config.SIM_RESOLUTION)
      const dyeRes = getResolution(config.DYE_RESOLUTION)
      const texType = ext.halfFloatTexType
      const rgba = ext.formatRGBA
      const rg = ext.formatRG
      const r = ext.formatR
      const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST
      gl.disable(gl.BLEND)
      if (rgba) dye = createDoubleFBO(dyeRes.width, dyeRes.height, rgba.internalFormat, rgba.format, texType, filtering)
      if (rg) velocity = createDoubleFBO(simRes.width, simRes.height, rg.internalFormat, rg.format, texType, filtering)
      if (r) { divergence = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST); curl = createFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST); pressure = createDoubleFBO(simRes.width, simRes.height, r.internalFormat, r.format, texType, gl.NEAREST) }
    }

    function getResolution(resolution) {
      const w = gl.drawingBufferWidth, h = gl.drawingBufferHeight
      const aspectRatio = w / h, aspect = aspectRatio < 1 ? 1 / aspectRatio : aspectRatio
      const min = Math.round(resolution), max = Math.round(resolution * aspect)
      return w > h ? { width: max, height: min } : { width: min, height: max }
    }

    initFramebuffers()

    let lastUpdateTime = Date.now()
    let colorUpdateTimer = 0.0
    let isIdle = false

    const colorPalette = [{ r: 0.15, g: 0.12, b: 0.22 }, { r: 0.22, g: 0.08, b: 0.18 }, { r: 0.12, g: 0.18, b: 0.22 }, { r: 0.18, g: 0.15, b: 0.20 }, { r: 0.20, g: 0.10, b: 0.15 }, { r: 0.10, g: 0.20, b: 0.18 }, { r: 0.15, g: 0.08, b: 0.12 }, { r: 0.08, g: 0.15, b: 0.20 }]
    let colorIndex = 0

    function generateColor() { const c = colorPalette[colorIndex % colorPalette.length]; colorIndex++; return { r: c.r, g: c.g, b: c.b } }

    function updateFrame() {
      const dt = Math.min((Date.now() - lastUpdateTime) / 1000, 0.016666)
      lastUpdateTime = Date.now()
      if (resizeCanvas()) initFramebuffers()
      
      colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED
      if (colorUpdateTimer >= 1) { colorUpdateTimer = (colorUpdateTimer % 1); pointers.forEach(p => { p.color = generateColor() }) }
      
      if (!isIdle || pointers.some(p => p.moved || p.down)) {
        applyInputs()
        step(dt)
        render()
        isIdle = !pointers.some(p => p.moved || p.down)
      }
      
      rafId = requestAnimationFrame(updateFrame)
    }

    function resizeCanvas() {
      const width = canvas.clientWidth, height = canvas.clientHeight
      if (canvas.width !== width || canvas.height !== height) { 
        canvas.width = width; canvas.height = height
        if (dye && velocity) initFramebuffers()
        return true 
      }
      return false
    }

    function applyInputs() { pointers.forEach(p => { if (p.moved) { p.moved = false; splatPointer(p) } }) }

    function step(dt) {
      gl.disable(gl.BLEND)
      curlProgram.bind(); if (curlProgram.uniforms.texelSize) gl.uniform2f(curlProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY); if (curlProgram.uniforms.uVelocity) gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0)); blit(curl)
      vorticityProgram.bind(); if (vorticityProgram.uniforms.texelSize) gl.uniform2f(vorticityProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY); if (vorticityProgram.uniforms.uVelocity) gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0)); if (vorticityProgram.uniforms.uCurl) gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1)); if (vorticityProgram.uniforms.curl) gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL); if (vorticityProgram.uniforms.dt) gl.uniform1f(vorticityProgram.uniforms.dt, dt); blit(velocity.write); velocity.swap()
      divergenceProgram.bind(); if (divergenceProgram.uniforms.texelSize) gl.uniform2f(divergenceProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY); if (divergenceProgram.uniforms.uVelocity) gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0)); blit(divergence)
      clearProgram.bind(); if (clearProgram.uniforms.uTexture) gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0)); if (clearProgram.uniforms.value) gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE); blit(pressure.write); pressure.swap()
      pressureProgram.bind(); if (pressureProgram.uniforms.texelSize) gl.uniform2f(pressureProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY); if (pressureProgram.uniforms.uDivergence) gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0)); for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) { if (pressureProgram.uniforms.uPressure) gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1)); blit(pressure.write); pressure.swap() }
      gradienSubtractProgram.bind(); if (gradienSubtractProgram.uniforms.texelSize) gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY); if (gradienSubtractProgram.uniforms.uPressure) gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read.attach(0)); if (gradienSubtractProgram.uniforms.uVelocity) gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read.attach(1)); blit(velocity.write); velocity.swap()
      advectionProgram.bind(); if (advectionProgram.uniforms.texelSize) gl.uniform2f(advectionProgram.uniforms.texelSize, velocity.texelSizeX, velocity.texelSizeY); const velocityId = velocity.read.attach(0); if (advectionProgram.uniforms.uVelocity) gl.uniform1i(advectionProgram.uniforms.uVelocity, velocityId); if (advectionProgram.uniforms.uSource) gl.uniform1i(advectionProgram.uniforms.uSource, velocityId); if (advectionProgram.uniforms.dt) gl.uniform1f(advectionProgram.uniforms.dt, dt); if (advectionProgram.uniforms.dissipation) gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION); blit(velocity.write); velocity.swap()
      if (advectionProgram.uniforms.uVelocity) gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0)); if (advectionProgram.uniforms.uSource) gl.uniform1i(advectionProgram.uniforms.uSource, dye.read.attach(1)); if (advectionProgram.uniforms.dissipation) gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION); blit(dye.write); dye.swap()
    }

    function render() { gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA); gl.enable(gl.BLEND); displayProgram.bind(); if (displayProgram.uniforms.uTexture) gl.uniform1i(displayProgram.uniforms.uTexture, dye.read.attach(0)); blit(null, false) }

    function splatPointer(pointer) { const dx = pointer.deltaX * config.SPLAT_FORCE, dy = pointer.deltaY * config.SPLAT_FORCE; splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color) }

    function splat(x, y, dx, dy, color) {
      splatProgram.bind(); if (splatProgram.uniforms.uTarget) gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0)); if (splatProgram.uniforms.aspectRatio) gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height); if (splatProgram.uniforms.point) gl.uniform2f(splatProgram.uniforms.point, x, y); if (splatProgram.uniforms.color) gl.uniform3f(splatProgram.uniforms.color, dx, dy, 0); if (splatProgram.uniforms.radius) gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS / 100); blit(velocity.write); velocity.swap()
      if (splatProgram.uniforms.uTarget) gl.uniform1i(splatProgram.uniforms.uTarget, dye.read.attach(0)); if (splatProgram.uniforms.color) gl.uniform3f(splatProgram.uniforms.color, color.r, color.g, color.b); blit(dye.write); dye.swap()
    }

    function updatePointerDownData(pointer, id, posX, posY) { pointer.id = id; pointer.down = true; pointer.moved = false; pointer.texcoordX = posX / canvas.width; pointer.texcoordY = 1 - posY / canvas.height; pointer.prevTexcoordX = pointer.texcoordX; pointer.prevTexcoordY = pointer.texcoordY; pointer.deltaX = 0; pointer.deltaY = 0; pointer.color = generateColor() }

    function updatePointerMoveData(pointer, posX, posY, color) { pointer.prevTexcoordX = pointer.texcoordX; pointer.prevTexcoordY = pointer.texcoordY; pointer.texcoordX = posX / canvas.width; pointer.texcoordY = 1 - posY / canvas.height; pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX); pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY); pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0; pointer.color = color }

    function correctDeltaX(delta) { const aspectRatio = canvas.width / canvas.height; if (aspectRatio < 1) delta *= aspectRatio; return delta }
    function correctDeltaY(delta) { const aspectRatio = canvas.width / canvas.height; if (aspectRatio > 1) delta /= aspectRatio; return delta }

    const onMouseDown = (e) => { isIdle = false; const pointer = pointers[0]; updatePointerDownData(pointer, -1, e.clientX, e.clientY); clickSplat(pointer) }
    const onMouseMove = (e) => { isIdle = false; const pointer = pointers[0]; updatePointerMoveData(pointer, e.clientX, e.clientY, pointer.color) }
    const onTouchStart = (e) => { isIdle = false; const pointer = pointers[0]; for (let i = 0; i < e.touches.length; i++) { updatePointerDownData(pointer, e.touches[i].identifier, e.touches[i].clientX, e.touches[i].clientY) } }
    const onTouchMove = (e) => { isIdle = false; const pointer = pointers[0]; for (let i = 0; i < e.touches.length; i++) { updatePointerMoveData(pointer, e.touches[i].clientX, e.touches[i].clientY, pointer.color) } }
    const onTouchEnd = () => { isIdle = false; pointers[0].down = false }

    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchstart', onTouchStart, false)
    window.addEventListener('touchmove', onTouchMove, false)
    window.addEventListener('touchend', onTouchEnd)

    function clickSplat(pointer) { const color = generateColor(); color.r *= 10; color.g *= 10; color.b *= 10; const dx = 10 * (Math.random() - 0.5), dy = 30 * (Math.random() - 0.5); splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color) }

    rafId = requestAnimationFrame(updateFrame)

    cleanup = () => {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null }
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  } catch (err) { if (import.meta.dev) console.warn('SplashCursor: WebGL init failed:', err) }
})

onBeforeUnmount(() => { if (cleanup) { cleanup(); cleanup = null } })
</script>