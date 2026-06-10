<script setup>
import { ref, computed, onMounted, nextTick, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'

const props = defineProps({
  text: { type: String, required: true },
  speed: { type: Number, default: 0.035 },
  delay: { type: Number, default: 0 },
  cursor: { type: Boolean, default: true }
})

const emit = defineEmits(['start', 'complete'])

const el = ref(null)
const chars = computed(() => [...props.text])
const revealed = ref(0)
const started = ref(false)
const done = ref(false)
let tl = null

onMounted(async () => {
  await nextTick()
  if (!el.value) return

  tl = gsap.timeline({
    delay: props.delay,
    onStart: () => { started.value = true; emit('start') },
    onComplete: () => { done.value = true; emit('complete') }
  })

  tl.to({ v: 0 }, {
    v: chars.value.length,
    duration: chars.value.length * props.speed,
    ease: 'none',
    onUpdate() { revealed.value = Math.round(this.targets()[0].v) }
  })
})

onBeforeUnmount(() => { tl?.kill() })

defineExpose({ el, done })
</script>

<template>
  <span ref="el" class="hero-typewriter" aria-live="polite">
    <span
      v-for="(ch, i) in chars"
      :key="i"
      class="tw-char"
      :class="{ 'tw-visible': i < revealed }"
    >{{ ch === ' ' ? '\u00A0' : ch }}</span>
    <span v-if="cursor && started && !done" class="tw-cursor" aria-hidden="true"></span>
  </span>
</template>

<style scoped>
.hero-typewriter {
  display: inline;
}

.tw-char {
  display: inline;
  opacity: 0;
  transition: opacity 0.08s ease;
}

.tw-char.tw-visible {
  opacity: 1;
}

.tw-cursor {
  display: inline-block;
  width: 1px;
  height: 1.1em;
  background: currentColor;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: tw-blink 0.6s steps(1) infinite;
}

@keyframes tw-blink {
  50% { opacity: 0; }
}
</style>
