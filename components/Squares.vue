<template>
  <canvas ref="canvasRef" class="w-full h-full border-none block" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, useTemplateRef } from 'vue';

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;

interface GridOffset {
  x: number;
  y: number;
}

interface Props {
  direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
  speed?: number;
  borderColor?: CanvasStrokeStyle;
  squareSize?: number;
  hoverFillColor?: CanvasStrokeStyle;
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'right',
  speed: 1,
  borderColor: '#6B4FA3',
  squareSize: 40,
  hoverFillColor: '#3D2D5E'
});

const canvasRef = useTemplateRef<HTMLCanvasElement>('canvasRef');
const requestRef = ref<number | null>(null);
const numSquaresX = ref<number>(0);
const numSquaresY = ref<number>(0);
const gridOffset = ref<GridOffset>({ x: 0, y: 0 });
const hoveredSquareRef = ref<GridOffset | null>(null);

let ctx: CanvasRenderingContext2D | null = null;

const resizeCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  if (ctx) ctx.scale(dpr, dpr);
  numSquaresX.value = Math.ceil(rect.width / props.squareSize) + 1;
  numSquaresY.value = Math.ceil(rect.height / props.squareSize) + 1;
};

const drawGrid = () => {
  const canvas = canvasRef.value;
  if (!ctx || !canvas) return;

  const rect = canvas.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;

  ctx.clearRect(0, 0, w, h);

  const startX = Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize;
  const startY = Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize;

  for (let x = startX; x < w + props.squareSize; x += props.squareSize) {
    for (let y = startY; y < h + props.squareSize; y += props.squareSize) {
      const squareX = x - (gridOffset.value.x % props.squareSize);
      const squareY = y - (gridOffset.value.y % props.squareSize);

      if (
        hoveredSquareRef.value &&
        Math.floor((x - startX) / props.squareSize) === hoveredSquareRef.value.x &&
        Math.floor((y - startY) / props.squareSize) === hoveredSquareRef.value.y
      ) {
        ctx.fillStyle = props.hoverFillColor;
        ctx.fillRect(squareX, squareY, props.squareSize, props.squareSize);
      }

      ctx.strokeStyle = props.borderColor;
      ctx.strokeRect(squareX, squareY, props.squareSize, props.squareSize);
    }
  }

  const gradient = ctx.createRadialGradient(
    w / 2,
    h / 2,
    0,
    w / 2,
    h / 2,
    Math.sqrt(w ** 2 + h ** 2) / 2
  );
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
  gradient.addColorStop(1, '#1a1035');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, w, h);
};

const prefersReducedMotion = ref(false);

const updateAnimation = () => {
  const effectiveSpeed = Math.max(props.speed, 0.1);

  switch (props.direction) {
    case 'right':
      gridOffset.value.x = (gridOffset.value.x - effectiveSpeed + props.squareSize) % props.squareSize;
      break;
    case 'left':
      gridOffset.value.x = (gridOffset.value.x + effectiveSpeed + props.squareSize) % props.squareSize;
      break;
    case 'up':
      gridOffset.value.y = (gridOffset.value.y + effectiveSpeed + props.squareSize) % props.squareSize;
      break;
    case 'down':
      gridOffset.value.y = (gridOffset.value.y - effectiveSpeed + props.squareSize) % props.squareSize;
      break;
    case 'diagonal':
      gridOffset.value.x = (gridOffset.value.x - effectiveSpeed + props.squareSize) % props.squareSize;
      gridOffset.value.y = (gridOffset.value.y - effectiveSpeed + props.squareSize) % props.squareSize;
      break;
    default:
      break;
  }

  if (!document.hidden && !prefersReducedMotion.value) drawGrid();
  requestRef.value = requestAnimationFrame(updateAnimation);
};

const handleMouseMove = (event: MouseEvent) => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const startX = Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize;
  const startY = Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize;

  const hoveredSquareX = Math.floor((mouseX + gridOffset.value.x - startX) / props.squareSize);
  const hoveredSquareY = Math.floor((mouseY + gridOffset.value.y - startY) / props.squareSize);

  if (
    !hoveredSquareRef.value ||
    hoveredSquareRef.value.x !== hoveredSquareX ||
    hoveredSquareRef.value.y !== hoveredSquareY
  ) {
    hoveredSquareRef.value = { x: hoveredSquareX, y: hoveredSquareY };
  }
};

const handleMouseLeave = () => {
  hoveredSquareRef.value = null;
};

const initializeCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  ctx = canvas.getContext('2d');
  resizeCanvas();

  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('resize', resizeCanvas);

  requestRef.value = requestAnimationFrame(updateAnimation);
};

const cleanup = () => {
  const canvas = canvasRef.value;

  if (requestRef.value) {
    cancelAnimationFrame(requestRef.value);
    requestRef.value = null;
  }

  if (canvas) {
    canvas.removeEventListener('mousemove', handleMouseMove);
    canvas.removeEventListener('mouseleave', handleMouseLeave);
  }

  window.removeEventListener('resize', resizeCanvas);
};

onMounted(() => {
  initializeCanvas();
});

onUnmounted(() => {
  cleanup();
});

watch(
  [
    () => props.direction,
    () => props.speed,
    () => props.borderColor,
    () => props.hoverFillColor,
    () => props.squareSize
  ],
  () => {
    cleanup();
    initializeCanvas();
  }
);
</script>

