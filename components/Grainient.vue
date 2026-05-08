<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Mesh, Program, Renderer, Triangle } from 'ogl'

const props = withDefaults(defineProps(), {
  timeSpeed: 0.25,
  colorBalance: 0.0,
  warpStrength: 1.0,
  warpFrequency: 5.0,
  warpSpeed: 2.0,
  warpAmplitude: 50.0,
  blendAngle: 0.0,
  blendSoftness: 0.05,
  rotationAmount: 500.0,
  noiseScale: 2.0,
  grainAmount: 0.1,
  grainScale: 2.0,
  grainAnimated: false,
  contrast: 1.5,
  gamma: 1.0,
  saturation: 1.0,
  centerX: 0.0,
  centerY: 0.0,
  zoom: 0.9,
  color1: '#FF9FFC',
  color2: '#5227FF',
  color3: '#B19EEF',
  className: ''
})

const containerRef = ref(null)
let cleanup = null

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [1, 1, 1]
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
}

const vertex = `precision highp float; in vec2 position; void main() { gl_Position = vec4(position, 0.0, 1.0); }`

const fragment = `precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
void main() {
  float t=iTime*uTimeSpeed;
  vec2 uv=gl_FragCoord.xy/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);
  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  float angle=radians((degree-0.5)*uRotationAmount+180.0);
  float s=sin(angle),c=cos(angle);
  tuv=(vec2(tuv.x*c-tuv.y*s,tuv.x*s+tuv.y*c));
  tuv.y*=ratio;
  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);
  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float sft=max(uBlendSoftness,0.0);
  float blendX=tuv.x*c-tuv.y*s;
  float edge0=-0.3-b-sft;
  float edge1=0.2-b+sft;
  float v0=0.3-b+sft;
  float v1=-0.3-b-sft;
  vec3 layer1=mix(colDark,colOrg,smoothstep(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,smoothstep(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,smoothstep(v0,v1,tuv.y));
  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05,0.0);} 
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;
  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);
  gl_FragColor=vec4(col,1.0);
}
float hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);} 
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}`

const setup = () => {
  if (!containerRef.value) return

  try {
    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    })

    const gl = renderer.gl
    const canvas = gl.canvas
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'

    const container = containerRef.value
    container.appendChild(canvas)

    const geometry = new Triangle(gl)
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uTimeSpeed: { value: props.timeSpeed },
        uColorBalance: { value: props.colorBalance },
        uWarpStrength: { value: props.warpStrength },
        uWarpFrequency: { value: props.warpFrequency },
        uWarpSpeed: { value: props.warpSpeed },
        uWarpAmplitude: { value: props.warpAmplitude },
        uBlendAngle: { value: props.blendAngle },
        uBlendSoftness: { value: props.blendSoftness },
        uRotationAmount: { value: props.rotationAmount },
        uNoiseScale: { value: props.noiseScale },
        uGrainAmount: { value: props.grainAmount },
        uGrainScale: { value: props.grainScale },
        uGrainAnimated: { value: props.grainAnimated ? 1.0 : 0.0 },
        uContrast: { value: props.contrast },
        uGamma: { value: props.gamma },
        uSaturation: { value: props.saturation },
        uCenterOffset: { value: new Float32Array([props.centerX, props.centerY]) },
        uZoom: { value: props.zoom },
        uColor1: { value: new Float32Array(hexToRgb(props.color1)) },
        uColor2: { value: new Float32Array(hexToRgb(props.color2)) },
        uColor3: { value: new Float32Array(hexToRgb(props.color3)) }
      }
    })

    const mesh = new Mesh(gl, { geometry, program })

    const setSize = () => {
      const rect = container.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))
      renderer.setSize(width, height)
      const res = program.uniforms.iResolution.value
      res[0] = gl.drawingBufferWidth
      res[1] = gl.drawingBufferHeight
    }

    const ro = new ResizeObserver(setSize)
    ro.observe(container)
    setSize()

    let raf = 0
    const t0 = performance.now()
    const loop = (t) => {
      program.uniforms.iTime.value = (t - t0) * 0.001
      renderer.render({ scene: mesh })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    cleanup = () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      try { container.removeChild(canvas) } catch { /* ignore */ }
    }
  } catch (e) {
    console.warn('Grainient: WebGL init failed:', e)
  }
}

onMounted(setup)

onBeforeUnmount(() => { if (cleanup) cleanup() })
</script>

<template>
  <div ref="containerRef" :class="['relative h-full w-full overflow-hidden', className]" />
</template>