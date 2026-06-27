<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { isWebGLAvailable } from '~/utils/webgl'

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
  color1: '#6B4FA3',
  color2: '#8FC176',
  color3: '#3D2D5E',
  className: '',
  style: ''
})

const containerRef = ref(null)
const isWebGLAvailable = ref(true)
const webglFailed = ref(false)

const generateNoise = (width, height) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  
  if (!ctx) return null
  
  const imageData = ctx.createImageData(width, height)
  const data = imageData.data
  
  for (let i = 0; i < data.length; i += 4) {
    const time = Date.now() * 0.001 * props.timeSpeed
    const x = (i / 4) % width
    const y = Math.floor((i / 4) / width)
    
    let noise = 0
    const frequency = props.noiseScale
    const amplitude = 1.0
    
    for (let f = 0; f < 3; f++) {
      const freq = Math.pow(2, f) * frequency
      const amp = amplitude / Math.pow(2, f)
      const nx = Math.cos((x * freq + time) * 0.1) * Math.sin((y * freq + time) * 0.1)
      noise += nx * amp
    }
    
    noise = (noise + 1) / 2
    const value = Math.floor(noise * 255)
    
    data[i] = value
    data[i + 1] = value
    data[i + 2] = value
    data[i + 3] = 255
  }
  
  ctx.putImageData(imageData, 0, 0)
  return canvas
}

const generateWarp = (width, height) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  
  if (!ctx) return null
  
  const imageData = ctx.createImageData(width, height)
  const data = imageData.data
  
  const time = Date.now() * 0.001 * props.warpSpeed
  const frequency = props.warpFrequency
  const amplitude = props.warpAmplitude / props.warpStrength
  
  for (let i = 0; i < data.length; i += 4) {
    const x = (i / 4) % width
    const y = Math.floor((i / 4) / width)
    
    const dx = Math.sin(y * frequency + time) / amplitude
    const dy = Math.sin(x * frequency * 1.5 + time) / (amplitude * 0.5)
    
    const nx = (x + dx) % width
    const ny = (y + dy) % height
    
    const srcX = Math.floor(nx)
    const srcY = Math.floor(ny)
    const srcIndex = (srcY * width + srcX) * 4
    
    if (srcIndex < data.length) {
      data[i] = data[srcIndex]
      data[i + 1] = data[srcIndex + 1]
      data[i + 2] = data[srcIndex + 2]
      data[i + 3] = data[srcIndex + 3]
    }
  }
  
  ctx.putImageData(imageData, 0, 0)
  return canvas
}

const applyColorBalance = (imageData, color1, color2, color3) => {
  const data = imageData.data
  const color1Rgb = hexToRgb(color1)
  const color2Rgb = hexToRgb(color2)
  const color3Rgb = hexToRgb(color3)
  
  for (let i = 0; i < data.length; i += 4) {
    const y = Math.floor((i / 4) / imageData.width)
    const normalizedY = y / imageData.height
    
    let col
    if (normalizedY < 0.3 - props.colorBalance) {
      col = color3Rgb
    } else if (normalizedY < 0.7 + props.colorBalance) {
      col = color2Rgb
    } else {
      col = color1Rgb
    }
    
    data[i] = col[0] * 255
    data[i + 1] = col[1] * 255
    data[i + 2] = col[2] * 255
  }
}

const applyGrain = (imageData) => {
  const data = imageData.data
  const time = Date.now() * 0.001
  
  for (let i = 0; i < data.length; i += 4) {
    const x = (i / 4) % imageData.width
    const y = Math.floor((i / 4) / imageData.width)
    
    const grain = Math.sin(x * props.grainScale + time * (props.grainAnimated ? 0.05 : 0)) * 43758.5453
    const grainValue = (Math.sin(grain) - 0.5) * props.grainAmount * 255
    
    data[i] = Math.max(0, Math.min(255, data[i] + grainValue))
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + grainValue))
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + grainValue))
  }
}

const applyContrast = (imageData) => {
  const data = imageData.data
  const factor = props.contrast
  
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.max(0, Math.min(255, (data[i] - 128) * factor + 128))
    data[i + 1] = Math.max(0, Math.min(255, (data[i + 1] - 128) * factor + 128))
    data[i + 2] = Math.max(0, Math.min(255, (data[i + 2] - 128) * factor + 128))
  }
}

const applyGamma = (imageData) => {
  const data = imageData.data
  const gamma = props.gamma
  
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.pow(data[i] / 255, gamma) * 255
    data[i + 1] = Math.pow(data[i + 1] / 255, gamma) * 255
    data[i + 2] = Math.pow(data[i + 2] / 255, gamma) * 255
  }
}

const applySaturation = (imageData) => {
  const data = imageData.data
  const saturation = props.saturation
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const gray = r * 0.2126 + g * 0.7152 + b * 0.0722
    
    data[i] = gray + (r - gray) * saturation
    data[i + 1] = gray + (g - gray) * saturation
    data[i + 2] = gray + (b - gray) * saturation
  }
}

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [1, 1, 1]
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255
  ]
}

const setup = () => {
  if (!containerRef.value) return

  if (!isWebGLAvailableCheck()) {
    isWebGLAvailable.value = false
    webglFailed.value = true
    return
  }

  const container = containerRef.value
  const canvas = document.createElement('canvas')
  canvas.className = 'grain-canvas'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.position = 'absolute'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.zIndex = '0'
  canvas.style.pointerEvents = 'none'
  
  container.appendChild(canvas)

  let animationId = 0
  let lastTime = 0
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let isVisible = true

  const visibilityObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting
  }, { threshold: 0 })
  visibilityObserver.observe(container)

  const animate = (t) => {
    if (prefersReducedMotion) {
      animationId = requestAnimationFrame(animate)
      return
    }

    if (document.hidden || !isVisible) {
      animationId = requestAnimationFrame(animate)
      return
    }

    const deltaTime = (t - lastTime) / 1000
    lastTime = t

    if (deltaTime > 0.1) return

    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const width = Math.max(1, Math.floor(rect.width * dpr))
    const height = Math.max(1, Math.floor(rect.height * dpr))
    
    canvas.width = width
    canvas.height = height
    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, width, height)

    const noiseCanvas = generateNoise(width, height)
    if (!noiseCanvas) return

    const warpCanvas = generateWarp(width, height)
    if (!warpCanvas) return

    const tempCtx = document.createElement('canvas').getContext('2d')
    if (!tempCtx) return
    
    tempCtx.canvas.width = width
    tempCtx.canvas.height = height
    tempCtx.drawImage(warpCanvas, 0, 0)
    
    const imageData = tempCtx.getImageData(0, 0, width, height)
    
    applyColorBalance(imageData, props.color1, props.color2, props.color3)
    applyGrain(imageData)
    applyContrast(imageData)
    applyGamma(imageData)
    applySaturation(imageData)
    
    tempCtx.putImageData(imageData, 0, 0)
    ctx.drawImage(tempCtx.canvas, 0, 0)

    animationId = requestAnimationFrame(animate)
  }

  const resize = () => {
    const rect = container.getBoundingClientRect()
    canvas.width = Math.max(1, Math.floor(rect.width))
    canvas.height = Math.max(1, Math.floor(rect.height))
  }

  const ro = new ResizeObserver(resize)
  ro.observe(container)

  animationId = requestAnimationFrame(animate)

  cleanup = () => {
    cancelAnimationFrame(animationId)
    ro.disconnect()
    visibilityObserver.disconnect()
    try { container.removeChild(canvas) } catch { /* ignore */ }
  }
}

let cleanup = null

onMounted(() => {
  setup()
})

onBeforeUnmount(() => {
  if (cleanup) cleanup()
})
</script>

<template>
  <div ref="containerRef" :class="['relative h-full w-full overflow-hidden', className]" :style="style">
    <div v-if="webglFailed" class="grain-fallback" aria-hidden="true" />
  </div>
</template>

<style scoped>
.grain-canvas {
  image-rendering: optimizeSpeed;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  image-rendering: optimize-contrast;
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform;
}

.grain-fallback {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(107, 79, 163, 0.18), rgba(61, 45, 94, 0.12));
  pointer-events: none;
  z-index: 0;
}

@media (prefers-reduced-motion: reduce) {
  .grain-canvas {
    animation: none !important;
    transition: none !important;
  }
}
</style>