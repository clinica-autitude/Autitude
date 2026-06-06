import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, defineComponent, useTemplateRef, ref, watch, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode, ssrRenderAttr } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/server-renderer/index.mjs';
import { Brain, BookOpen, Mic, Activity, Puzzle } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/lucide-vue-next@1.0.0_vue@3.5.35/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { C as ColorBends } from './ColorBends-BUrl_YrQ.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue-bundle-renderer@2.2.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/node-mock-http@1.0.4/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/defu/dist/defu.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/ubuntu/Autitude/node_modules/pathe/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/h3/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unhead@2.1.15/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/devalue@5.8.1/node_modules/devalue/index.js';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unhead@2.1.15/node_modules/unhead/dist/utils.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue-router@5.1.0_@vue+compiler-sfc@3.5.35_vite@7.3.5_@types+node@25.9.1_jiti@2.7.0_terser@5.48.0_yaml@2.9.0__vue@3.5.35/node_modules/vue-router/vue-router.node.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/three@0.184.0/node_modules/three/build/three.module.js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Squares",
  __ssrInlineRender: true,
  props: {
    direction: { default: "right" },
    speed: { default: 1 },
    borderColor: { default: "#6B4FA3" },
    squareSize: { default: 40 },
    hoverFillColor: { default: "#3D2D5E" }
  },
  setup(__props) {
    const props = __props;
    const canvasRef = useTemplateRef("canvasRef");
    const requestRef = ref(null);
    const numSquaresX = ref(0);
    const numSquaresY = ref(0);
    const gridOffset = ref({ x: 0, y: 0 });
    const hoveredSquareRef = ref(null);
    let ctx = null;
    const resizeCanvas = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.value = Math.ceil(canvas.width / props.squareSize) + 1;
      numSquaresY.value = Math.ceil(canvas.height / props.squareSize) + 1;
    };
    const drawGrid = () => {
      const canvas = canvasRef.value;
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const startX = Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize;
      const startY = Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize;
      for (let x = startX; x < canvas.width + props.squareSize; x += props.squareSize) {
        for (let y = startY; y < canvas.height + props.squareSize; y += props.squareSize) {
          const squareX = x - gridOffset.value.x % props.squareSize;
          const squareY = y - gridOffset.value.y % props.squareSize;
          if (hoveredSquareRef.value && Math.floor((x - startX) / props.squareSize) === hoveredSquareRef.value.x && Math.floor((y - startY) / props.squareSize) === hoveredSquareRef.value.y) {
            ctx.fillStyle = props.hoverFillColor;
            ctx.fillRect(squareX, squareY, props.squareSize, props.squareSize);
          }
          ctx.strokeStyle = props.borderColor;
          ctx.strokeRect(squareX, squareY, props.squareSize, props.squareSize);
        }
      }
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "#0b0b0b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    const updateAnimation = () => {
      const effectiveSpeed = Math.max(props.speed, 0.1);
      switch (props.direction) {
        case "right":
          gridOffset.value.x = (gridOffset.value.x - effectiveSpeed + props.squareSize) % props.squareSize;
          break;
        case "left":
          gridOffset.value.x = (gridOffset.value.x + effectiveSpeed + props.squareSize) % props.squareSize;
          break;
        case "up":
          gridOffset.value.y = (gridOffset.value.y + effectiveSpeed + props.squareSize) % props.squareSize;
          break;
        case "down":
          gridOffset.value.y = (gridOffset.value.y - effectiveSpeed + props.squareSize) % props.squareSize;
          break;
        case "diagonal":
          gridOffset.value.x = (gridOffset.value.x - effectiveSpeed + props.squareSize) % props.squareSize;
          gridOffset.value.y = (gridOffset.value.y - effectiveSpeed + props.squareSize) % props.squareSize;
          break;
      }
      drawGrid();
      requestRef.value = requestAnimationFrame(updateAnimation);
    };
    const handleMouseMove = (event) => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const startX = Math.floor(gridOffset.value.x / props.squareSize) * props.squareSize;
      const startY = Math.floor(gridOffset.value.y / props.squareSize) * props.squareSize;
      const hoveredSquareX = Math.floor((mouseX + gridOffset.value.x - startX) / props.squareSize);
      const hoveredSquareY = Math.floor((mouseY + gridOffset.value.y - startY) / props.squareSize);
      if (!hoveredSquareRef.value || hoveredSquareRef.value.x !== hoveredSquareX || hoveredSquareRef.value.y !== hoveredSquareY) {
        hoveredSquareRef.value = { x: hoveredSquareX, y: hoveredSquareY };
      }
    };
    const handleMouseLeave = () => {
      hoveredSquareRef.value = null;
    };
    const initializeCanvas = () => {
      const canvas = canvasRef.value;
      if (!canvas) return;
      ctx = canvas.getContext("2d");
      resizeCanvas();
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
      (void 0).addEventListener("resize", resizeCanvas);
      requestRef.value = requestAnimationFrame(updateAnimation);
    };
    const cleanup = () => {
      const canvas = canvasRef.value;
      if (requestRef.value) {
        cancelAnimationFrame(requestRef.value);
        requestRef.value = null;
      }
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      (void 0).removeEventListener("resize", resizeCanvas);
    };
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({
        ref_key: "canvasRef",
        ref: canvasRef,
        class: "w-full h-full border-none block"
      }, _attrs))}></canvas>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Squares.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const whatsappUrl = "https://wa.me/5512991968683";
const _sfc_main = {
  __name: "servicos",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Especialidades | Autitude - Desenvolvimento e A\xE7\xE3o Humana",
      meta: [
        { name: "description", content: "Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada em Pindamonhangaba-SP. Atendimento especializado para crian\xE7as, adolescentes e fam\xEDlias, com foco no p\xFAblico neurodivergente." }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Especialidades - Autitude",
            description: "Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Terapia Ocupacional e Terapia ABA Humanizada em Pindamonhangaba-SP.",
            url: "https://hautlys.github.io/Autitude/servicos",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Autitude - Desenvolvimento e A\xE7\xE3o Humana",
              provides: [
                "Neuropsicologia",
                "Neuropsicopedagogia",
                "Fonoaudiologia",
                "Terapia Ocupacional",
                "Terapia ABA Humanizada"
              ]
            }
          })
        }
      ]
    });
    const services = [
      {
        title: "Neuropsicologia",
        description: "Investiga\xE7\xE3o detalhada do funcionamento cognitivo, emocional e comportamental para compreender o perfil \xFAnico de cada pessoa.",
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)",
        icon: Brain,
        items: [
          "Avalia\xE7\xE3o neuropsicol\xF3gica",
          "Rastreamento de neurodiverg\xEAncias",
          "Desenvolvimento cognitivo, emocional e comportamental",
          "Orienta\xE7\xE3o e apoio \xE0s fam\xEDlias"
        ]
      },
      {
        title: "Neuropsicopedagogia",
        description: "Cuidado especializado das dificuldades de aprendizagem, articulando neuroci\xEAncia e pedagogia para potencializar o percurso escolar.",
        color: "linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)",
        icon: BookOpen,
        items: [
          "Avalia\xE7\xE3o das dificuldades de aprendizagem",
          "Identifica\xE7\xE3o de desafios pedag\xF3gicos",
          "Planejamento e aplica\xE7\xE3o de plano pedag\xF3gico individualizado",
          "Apoio ao desenvolvimento escolar"
        ]
      },
      {
        title: "Fonoaudiologia",
        description: "Acompanhamento da linguagem, fala, comunica\xE7\xE3o social e motricidade orofacial, com olhar atento \xE0 neurodiverg\xEAncia.",
        color: "linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)",
        icon: Mic,
        items: [
          "Desenvolvimento da linguagem",
          "Comunica\xE7\xE3o social",
          "Fala e motricidade orofacial",
          "Atendimento especializado em neurodiverg\xEAncia"
        ]
      },
      {
        title: "Terapia Ocupacional",
        description: "Avalia\xE7\xE3o cl\xEDnica, integra\xE7\xE3o sensorial e promo\xE7\xE3o da autonomia pessoal e social, com certifica\xE7\xE3o internacional em Integra\xE7\xE3o Sensorial pela University of Southern California (USC, USA).",
        color: "linear-gradient(135deg, var(--pastel-peach) 0%, var(--secondary-light) 100%)",
        icon: Activity,
        items: [
          "Certifica\xE7\xE3o internacional em Integra\xE7\xE3o Sensorial (USC, USA)",
          "Avalia\xE7\xE3o cl\xEDnica e funcional",
          "Desenvolvimento da autonomia",
          "Socializa\xE7\xE3o e independ\xEAncia funcional"
        ]
      },
      {
        title: "Terapia ABA Humanizada",
        description: "Aplica\xE7\xE3o da An\xE1lise do Comportamento Aplicada (ABA) de forma humanizada e centrada na pessoa, desenvolvendo habilidades e aprendizagens significativas no ritmo de cada paciente.",
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-mint) 100%)",
        icon: Puzzle,
        items: [
          "Plano terap\xEAutico individualizado",
          "Desenvolvimento de habilidades comunicativas, sociais e funcionais",
          "Aprendizagem acad\xEAmica e cotidiana",
          "Envolvimento e orienta\xE7\xE3o familiar"
        ]
      }
    ];
    const processSteps = [
      { title: "Acolhimento", description: "Voc\xEA entra em contato pelo WhatsApp ou formul\xE1rio de agendamento." },
      { title: "Avalia\xE7\xE3o", description: "Realizamos uma escuta cuidadosa e avalia\xE7\xE3o especializada." },
      { title: "Plano", description: "Constru\xEDmos juntos um plano individualizado e baseado em evid\xEAncias." },
      { title: "Acompanhamento", description: "Conduzimos o cuidado com a fam\xEDlia e a rede de apoio." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services" }, _attrs))} data-v-06d6af01><section class="hero-section" data-v-06d6af01><div class="hero-bg-grid" data-v-06d6af01>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        direction: "diagonal",
        speed: 1,
        "square-size": 40,
        "border-color": "#6B4FA3",
        "hover-fill-color": "#3D2D5E"
      }, null, _parent));
      _push(`</div><div class="container" data-v-06d6af01><div class="section-header" data-v-06d6af01><span class="section-tag" data-v-06d6af01>Nossas especialidades</span><h1 data-v-06d6af01>Cuidado integrado e transdisciplinar</h1><p data-v-06d6af01>Profissionais alinhados \xE0s necessidades e trabalhando em conjunto pelo desenvolvimento de cada pessoa.</p></div><div class="services-showcase" data-v-06d6af01><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<div class="service-card-main" data-v-06d6af01><div class="card-number" data-v-06d6af01>${ssrInterpolate(index + 1)}</div><div class="card-content" data-v-06d6af01><div class="service-icon-large" style="${ssrRenderStyle({ background: service.color })}" data-v-06d6af01>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), {
          size: 28,
          class: "icon-primary icon-inner"
        }, null), _parent);
        _push(`</div><div class="service-text" data-v-06d6af01><h3 data-v-06d6af01>${ssrInterpolate(service.title)}</h3><p data-v-06d6af01>${ssrInterpolate(service.description)}</p><ul class="service-list" data-v-06d6af01><!--[-->`);
        ssrRenderList(service.items, (item) => {
          _push(`<li data-v-06d6af01>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="process-section section" data-v-06d6af01><div class="container" data-v-06d6af01><div class="section-header" data-v-06d6af01><div class="header-content" data-v-06d6af01><span class="section-tag" data-v-06d6af01>Como funciona</span><h2 data-v-06d6af01>Nosso Processo</h2></div></div><div class="process-timeline" data-v-06d6af01><!--[-->`);
      ssrRenderList(processSteps, (step, index) => {
        _push(`<div class="process-step" data-v-06d6af01><div class="step-marker" data-v-06d6af01>${ssrInterpolate(index + 1)}</div><div class="step-content" data-v-06d6af01><h4 data-v-06d6af01>${ssrInterpolate(step.title)}</h4><p data-v-06d6af01>${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="cta-section section" data-v-06d6af01><div class="container" data-v-06d6af01><div class="cta-card" data-v-06d6af01>`);
      _push(ssrRenderComponent(ColorBends, {
        class: "cta-bg-effect",
        colors: ["#6B4FA3", "#8FC176", "#8FB1F0", "#3D2D5E", "#5C9F45"],
        rotation: 28,
        speed: 0.16,
        scale: 1.3,
        frequency: 1.35,
        warpStrength: 1.05,
        mouseInfluence: 0.45,
        parallax: 0.35,
        noise: 0.055,
        transparent: ""
      }, null, _parent));
      _push(`<div class="cta-content" data-v-06d6af01><span class="cta-tag" data-v-06d6af01>Autitude \u2014 Desenvolvimento e A\xE7\xE3o Humana</span><h2 data-v-06d6af01>Agende uma avalia\xE7\xE3o</h2><p data-v-06d6af01>\u{1F49C} Cuidamos de pessoas. Potencializamos possibilidades.</p><div class="cta-actions" data-v-06d6af01>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agendar Agora `);
          } else {
            return [
              createTextVNode(" Agendar Agora ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttr("href", whatsappUrl)} class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" data-v-06d6af01> Falar no WhatsApp </a></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/servicos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const servicos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06d6af01"]]);

export { servicos as default };
//# sourceMappingURL=servicos-BBivlpNj.mjs.map
