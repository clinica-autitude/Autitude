import { ref, computed } from 'vue'

type TexturePreset = 'velvet' | 'paper' | 'linen'

export interface TextureOptions {
  preset?: TexturePreset
  baseFrequency?: number
  numOctaves?: number
  opacity?: number
  type?: 'fractalNoise' | 'turbulence'
  size?: number
  blendMode?: string
}

const defaultOptions: TextureOptions = {
  baseFrequency: 2.5,
  numOctaves: 3,
  opacity: 0.035,
  type: 'fractalNoise',
  size: 256,
  blendMode: 'multiply'
}

const presets: Record<TexturePreset, TextureOptions> = {
  velvet: {
    type: 'turbulence',
    baseFrequency: 0.82,
    numOctaves: 5,
    opacity: 0.045,
    size: 320,
    blendMode: 'soft-light'
  },
  paper: {
    type: 'fractalNoise',
    baseFrequency: 3.0,
    numOctaves: 4,
    opacity: 0.04,
    size: 256
  },
  linen: {
    type: 'fractalNoise',
    baseFrequency: 4.0,
    numOctaves: 2,
    opacity: 0.03,
    size: 200
  }
}

/**
 * Generates an inline SVG feTurbulence noise pattern and returns it
 * as a data URI suitable for use in CSS background-image.
 *
 * Pure function — SSR-safe, no browser dependencies.
 */
function generateSvgDataUri(options: TextureOptions): string {
  const { baseFrequency, numOctaves, opacity, type, size } = options
  const svg = [
    `<svg viewBox='0 0 ${size} ${size}' xmlns='http://www.w3.org/2000/svg'>`,
    `<filter id='n'>`,
    `<feTurbulence type='${type}' baseFrequency='${baseFrequency}' numOctaves='${numOctaves}' stitchTiles='stitch'/>`,
    `</filter>`,
    `<rect width='100%' height='100%' filter='url(#n)' opacity='${opacity}'/>`,
    `</svg>`
  ].join('')
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/**
 * Composable for high-density SVG noise textures.
 *
 * Generates feTurbulence-based noise patterns as inline SVG data URIs
 * with high baseFrequency (2.0-4.0) for fine, organic texture overlays.
 *
 * SSR-safe — no window/document references.
 */
export function useTexture(options?: TextureOptions) {
  const initialPreset = options?.preset ? presets[options.preset] : {}
  const opts = ref<TextureOptions>({ ...defaultOptions, ...initialPreset, ...options })

  const svgDataUri = computed(() => generateSvgDataUri(opts.value))

  const bgStyle = computed(() => ({
    backgroundImage: `url("${svgDataUri.value}")`,
    backgroundSize: `${opts.value.size}px ${opts.value.size}px`,
    backgroundBlendMode: opts.value.blendMode || 'multiply',
    backgroundRepeat: 'repeat'
  }))

  function setPreset(name: TexturePreset): void {
    if (presets[name]) {
      opts.value = { ...opts.value, ...presets[name], preset: name }
    }
  }

  function updateOptions(partial: Partial<TextureOptions>): void {
    opts.value = { ...opts.value, ...partial }
  }

  return {
    bgStyle,
    svgDataUri,
    setPreset,
    updateOptions
  }
}
