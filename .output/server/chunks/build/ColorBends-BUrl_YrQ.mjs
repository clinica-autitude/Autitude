import { defineComponent, useTemplateRef, ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import * as THREE from 'three';
import { _ as _export_sfc } from './server.mjs';

const MAX_COLORS = 8;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ColorBends",
  __ssrInlineRender: true,
  props: {
    className: {},
    style: {},
    rotation: { default: 45 },
    speed: { default: 0.2 },
    colors: { default: () => [] },
    transparent: { type: Boolean, default: true },
    autoRotate: { default: 0 },
    scale: { default: 1 },
    frequency: { default: 1 },
    warpStrength: { default: 1 },
    mouseInfluence: { default: 1 },
    parallax: { default: 0.5 },
    noise: { default: 0.1 }
  },
  setup(__props) {
    const props = __props;
    const containerRef = useTemplateRef("containerRef");
    const rendererRef = ref(null);
    ref(null);
    const materialRef = ref(null);
    ref(null);
    const rotationRef = ref(props.rotation);
    const autoRotateRef = ref(props.autoRotate);
    ref(new THREE.Vector2(0, 0));
    ref(new THREE.Vector2(0, 0));
    ref(8);
    const webglFailed = ref(false);
    watch(
      () => ({ ...props }),
      () => {
        const material = materialRef.value;
        const renderer = rendererRef.value;
        if (!material) return;
        rotationRef.value = props.rotation;
        autoRotateRef.value = props.autoRotate;
        material.uniforms.uSpeed.value = props.speed;
        material.uniforms.uScale.value = props.scale;
        material.uniforms.uFrequency.value = props.frequency;
        material.uniforms.uWarpStrength.value = props.warpStrength;
        material.uniforms.uMouseInfluence.value = props.mouseInfluence;
        material.uniforms.uParallax.value = props.parallax;
        material.uniforms.uNoise.value = props.noise;
        const toVec3 = (hex) => {
          const h = hex.replace("#", "").trim();
          const v = h.length === 3 ? [parseInt(h[0] + h[0], 16), parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16)] : [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
          return new THREE.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
        };
        const arr = (props.colors || []).filter(Boolean).slice(0, MAX_COLORS).map(toVec3);
        for (let i = 0; i < MAX_COLORS; i++) {
          const vec = material.uniforms.uColors.value[i];
          if (i < arr.length) vec.copy(arr[i]);
          else vec.set(0, 0, 0);
        }
        material.uniforms.uColorCount.value = arr.length;
        material.uniforms.uTransparent.value = props.transparent ? 1 : 0;
        if (renderer) renderer.setClearColor(0, props.transparent ? 0 : 1);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: ["w-full h-full relative overflow-hidden", props.className],
        style: props.style
      }, _attrs))} data-v-a11e0d23>`);
      if (webglFailed.value) {
        _push(`<div class="colorbends-fallback" aria-hidden="true" data-v-a11e0d23></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ColorBends.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ColorBends = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a11e0d23"]]);

export { ColorBends as C };
//# sourceMappingURL=ColorBends-BUrl_YrQ.mjs.map
