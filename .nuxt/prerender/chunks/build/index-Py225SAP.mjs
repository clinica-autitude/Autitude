import { _ as _export_sfc, u as useHead, a as __nuxt_component_0, b as useRuntimeConfig } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, resolveDynamicComponent, openBlock, createBlock, toDisplayString, defineComponent, useTemplateRef, ref, watch, computed, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrInterpolate } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/server-renderer/index.mjs';
import { Heart, Brain, Sparkles, HandHeart, BookOpen, Mic, Activity, Puzzle } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/lucide-vue-next@1.0.0_vue@3.5.35/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Silk",
  __ssrInlineRender: true,
  props: {
    speed: { default: 5 },
    scale: { default: 1 },
    color: { default: "#6B4FA3" },
    noiseIntensity: { default: 1.5 },
    rotation: { default: 0 },
    className: { default: "" },
    style: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const containerRef = useTemplateRef("containerRef");
    const webglFailed = ref(false);
    watch(
      () => [props.speed, props.scale, props.color, props.noiseIntensity, props.rotation],
      () => {
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerRef",
        ref: containerRef,
        class: [__props.className, "w-full h-full"],
        style: __props.style
      }, _attrs))} data-v-2f862fae>`);
      if (webglFailed.value) {
        _push(`<div class="silk-fallback" aria-hidden="true" data-v-2f862fae></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Silk.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Silk = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2f862fae"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MagicRings",
  __ssrInlineRender: true,
  props: {
    color: { default: "#7cff67" },
    colorTwo: { default: "#42fcff" },
    speed: { default: 1 },
    ringCount: { default: 6 },
    attenuation: { default: 10 },
    lineThickness: { default: 2 },
    baseRadius: { default: 0.35 },
    radiusStep: { default: 0.1 },
    scaleRate: { default: 0.1 },
    opacity: { default: 1 },
    blur: { default: 0 },
    noiseAmount: { default: 0.1 },
    rotation: { default: 0 },
    ringGap: { default: 1.5 },
    fadeIn: { default: 0.7 },
    fadeOut: { default: 0.5 },
    followMouse: { type: Boolean, default: false },
    mouseInfluence: { default: 0.2 },
    hoverScale: { default: 1.2 },
    parallax: { default: 0.05 },
    clickBurst: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const mountRef = useTemplateRef("mountRef");
    ref([0, 0]);
    ref([0, 0]);
    ref(0);
    ref(false);
    ref(0);
    const webglFailed = ref(false);
    computed(() => ({
      color: props.color,
      colorTwo: props.colorTwo,
      speed: props.speed,
      ringCount: props.ringCount,
      attenuation: props.attenuation,
      lineThickness: props.lineThickness,
      baseRadius: props.baseRadius,
      radiusStep: props.radiusStep,
      scaleRate: props.scaleRate,
      opacity: props.opacity,
      blur: props.blur,
      noiseAmount: props.noiseAmount,
      rotation: props.rotation,
      ringGap: props.ringGap,
      fadeIn: props.fadeIn,
      fadeOut: props.fadeOut,
      followMouse: props.followMouse,
      mouseInfluence: props.mouseInfluence,
      hoverScale: props.hoverScale,
      parallax: props.parallax,
      clickBurst: props.clickBurst
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "mountRef",
        ref: mountRef,
        class: "w-full h-full relative",
        style: props.blur > 0 ? { filter: `blur(${props.blur}px)` } : void 0
      }, _attrs))} data-v-2d744628>`);
      if (webglFailed.value) {
        _push(`<div class="magicrings-fallback" aria-hidden="true" data-v-2d744628></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MagicRings.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MagicRings = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2d744628"]]);
const heroLogoUrl = "/full-logo-no-bg.png";
const whatsappUrl = "https://wa.me/5512991968683";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    config.public.siteBase || "https://hautlys.github.io/Autitude";
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Autitude - Desenvolvimento e A\xE7\xE3o Humana",
            description: "Espa\xE7o especializado em crian\xE7as, adolescentes e fam\xEDlias, com foco no p\xFAblico neurodivergente. Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia e Terapia Ocupacional em Pindamonhangaba-SP.",
            url: "https://hautlys.github.io/Autitude",
            logo: "https://hautlys.github.io/Autitude/full-logo.png",
            image: "https://hautlys.github.io/Autitude/full-logo.png",
            telephone: "+5512991968683",
            email: "contato@autitude.com.br",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Major Jos\xE9 dos Santos Moreira, 328",
              addressLocality: "Pindamonhangaba",
              addressRegion: "SP",
              addressCountry: "BR",
              postalCode: "12400-010"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-22.9309",
              longitude: "-45.4607"
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00"
              }
            ],
            priceRange: "$$",
            areaServed: {
              "@type": "State",
              name: "S\xE3o Paulo"
            },
            serviceType: ["Neuropsicologia", "Neuropsicopedagogia", "Fonoaudiologia", "Terapia Ocupacional"],
            medicalSpecialty: "Neurodevelopmental care",
            knowsAbout: ["Neurodiverg\xEAncia", "Neuropsicologia", "Neuropsicopedagogia", "Fonoaudiologia", "Terapia Ocupacional", "Integra\xE7\xE3o Sensorial", "Desenvolvimento Infantil"]
          })
        }
      ]
    });
    const pillars = [
      {
        title: "Acolher",
        description: "Receber cada fam\xEDlia com escuta, respeito e presen\xE7a.",
        color: "linear-gradient(135deg, #FFF1F4 0%, #FFE4EA 100%)",
        solidColor: "#FFF1F4",
        icon: Heart
      },
      {
        title: "Compreender",
        description: "Investigar o perfil \xFAnico de cada pessoa com base em evid\xEAncias.",
        color: "linear-gradient(135deg, #F0F6FE 0%, #DCEBFC 100%)",
        solidColor: "#F0F6FE",
        icon: Brain
      },
      {
        title: "Desenvolver",
        description: "Potencializar habilidades com cuidado integral e individualizado.",
        color: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
        solidColor: "#F0FDF4",
        icon: Sparkles
      },
      {
        title: "Incluir",
        description: "Construir caminhos de participa\xE7\xE3o e pertencimento em cada contexto.",
        color: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
        solidColor: "#FFFBEB",
        icon: HandHeart
      }
    ];
    const services = [
      {
        name: "Neuropsicologia",
        shortDesc: "Avalia\xE7\xE3o e desenvolvimento cognitivo",
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)",
        icon: Brain
      },
      {
        name: "Neuropsicopedagogia",
        shortDesc: "Avalia\xE7\xE3o e plano pedag\xF3gico individualizado",
        color: "linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)",
        icon: BookOpen
      },
      {
        name: "Fonoaudiologia",
        shortDesc: "Linguagem e comunica\xE7\xE3o",
        color: "linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)",
        icon: Mic
      },
      {
        name: "Terapia Ocupacional",
        shortDesc: "Avalia\xE7\xE3o Cl\xEDnica, Integra\xE7\xE3o Sensorial e Autonomia Pessoal e Social",
        color: "linear-gradient(135deg, #FFF8D6 0%, #FEF3C7 100%)",
        icon: Activity
      },
      {
        name: "Terapia ABA Humanizada",
        shortDesc: "Desenvolvimento de habilidades e Aprendizado",
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-mint) 100%)",
        icon: Puzzle
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-01178c94><section class="hero" data-v-01178c94><div class="hero-bg" data-v-01178c94>`);
      _push(ssrRenderComponent(Silk, {
        class: "silk-bg",
        speed: 5,
        scale: 1,
        color: "#6B4FA3",
        "noise-intensity": 1.5,
        rotation: 0
      }, null, _parent));
      _push(`<div class="hero-rings" aria-hidden="true" data-v-01178c94>`);
      _push(ssrRenderComponent(MagicRings, {
        color: "#EE00FF",
        colorTwo: "#EE00FF",
        ringCount: 6,
        speed: 1,
        attenuation: 10,
        lineThickness: 2,
        baseRadius: 0.35,
        radiusStep: 0.1,
        scaleRate: 0.1,
        opacity: 1,
        blur: 0.5,
        noiseAmount: 0.1,
        rotation: 0,
        ringGap: 1.5,
        fadeIn: 0.7,
        fadeOut: 0.5,
        followMouse: true,
        mouseInfluence: 0.1,
        hoverScale: 0.5,
        parallax: 0.5,
        clickBurst: true
      }, null, _parent));
      _push(`</div><img${ssrRenderAttr("src", heroLogoUrl)} alt="" class="hero-rings-logo" data-v-01178c94><div class="gradient-blob blob-1" data-v-01178c94></div><div class="gradient-blob blob-2" data-v-01178c94></div><div class="gradient-blob blob-3" data-v-01178c94></div></div><div class="container" data-v-01178c94><div class="hero-wrapper" data-v-01178c94><div class="hero-content" data-v-01178c94><h1 class="hero-title" data-v-01178c94> Desenvolvimento com <span class="title-highlight" data-v-01178c94>acolhimento,</span> ci\xEAncia e humanidade. </h1><p class="hero-subtitle" data-v-01178c94> A Autitude \xE9 um espa\xE7o especializado no atendimento de crian\xE7as, adolescentes e suas fam\xEDlias, com foco no p\xFAblico neurodivergente. Atuamos com uma abordagem humanizada, integrativa e baseada em evid\xEAncias cient\xEDficas. </p><p class="hero-tagline" data-v-01178c94> \u{1F49C} Cuidamos de pessoas. Potencializamos possibilidades. </p><div class="hero-actions" data-v-01178c94>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agendar Consulta `);
          } else {
            return [
              createTextVNode(" Agendar Consulta ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conhecer Servi\xE7os `);
          } else {
            return [
              createTextVNode(" Conhecer Servi\xE7os ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><span class="hero-badge" aria-label="Cuidado humanizado e baseado em evid\xEAncias" data-v-01178c94><span class="badge-line" data-v-01178c94></span> Cuidado humanizado e baseado em evid\xEAncias </span></section><section id="quem-somos" class="about-preview section" data-v-01178c94><div class="container" data-v-01178c94><div class="section-header" data-v-01178c94><div class="header-content" data-v-01178c94><span class="section-tag" data-v-01178c94>Quem somos</span><h2 data-v-01178c94>Cada indiv\xEDduo \xE9 \xFAnico.<br data-v-01178c94>Nosso cuidado tamb\xE9m.</h2></div></div><div class="history-block" data-v-01178c94><div class="history-content" data-v-01178c94><span class="history-eyebrow" data-v-01178c94>Nossa hist\xF3ria</span><p class="history-lead" data-v-01178c94> H\xE1 mais de 20 anos, acreditamos que cada pessoa tem um caminho pr\xF3prio de desenvolvimento e que o nosso trabalho \xE9 caminhar junto, n\xE3o na frente. </p><p data-v-01178c94> Nossa cl\xEDnica nasceu da pr\xE1tica de profissionais que ouvem antes de concluir, que adaptam antes de padronizar, e que medem sucesso pelo que cada pessoa conquista para a pr\xF3pria vida. </p><p data-v-01178c94> Trabalhamos com foco em desenvolvimento real e independ\xEAncia progressiva, constru\xEDdos no ritmo e nas pot\xEAncias de quem atendemos. </p></div><figure class="history-quote" data-v-01178c94><span class="quote-mark" aria-hidden="true" data-v-01178c94>\u201C</span><blockquote data-v-01178c94> Neurodiverg\xEAncia n\xE3o \xE9 um problema a corrigir, \xE9 uma forma de ser que merece suporte qualificado, respeitoso e eficaz. </blockquote></figure></div><div class="pillars-grid" data-v-01178c94><!--[-->`);
      ssrRenderList(pillars, (pillar, index2) => {
        _push(`<div class="pillar-card" style="${ssrRenderStyle({ "--delay": index2 * 0.1 + "s" })}" data-v-01178c94><div class="pillar-icon-wrapper" style="${ssrRenderStyle({ background: pillar.color })}" data-v-01178c94>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(pillar.icon), {
          size: 32,
          class: "icon-primary pillar-icon-inner"
        }, null), _parent);
        _push(`</div><div class="pillar-content" data-v-01178c94><h3 data-v-01178c94>${ssrInterpolate(pillar.title)}</h3><p data-v-01178c94>${ssrInterpolate(pillar.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="services-preview section" data-v-01178c94><div class="container" data-v-01178c94><div class="section-header" data-v-01178c94><div class="header-content" data-v-01178c94><span class="section-tag" data-v-01178c94>Nossas especialidades</span><h2 data-v-01178c94>Um cuidado integrado e transdisciplinar</h2><p data-v-01178c94>Profissionais alinhados \xE0s necessidades e trabalhando em conjunto pelo desenvolvimento de cada pessoa.</p></div></div><div class="services-showcase" data-v-01178c94><div class="service-cards-grid" data-v-01178c94><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: service.name,
          to: "/servicos",
          class: "service-card-mini"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card-mini-icon" style="${ssrRenderStyle({ background: service.color })}" data-v-01178c94${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(service.icon), {
                size: 24,
                class: "icon-primary mini-icon-shape"
              }, null), _parent2, _scopeId);
              _push2(`</div><div class="card-mini-content" data-v-01178c94${_scopeId}><h4 data-v-01178c94${_scopeId}>${ssrInterpolate(service.name)}</h4><p data-v-01178c94${_scopeId}>${ssrInterpolate(service.shortDesc)}</p></div><div class="card-arrow" data-v-01178c94${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "card-mini-icon",
                  style: { background: service.color }
                }, [
                  (openBlock(), createBlock(resolveDynamicComponent(service.icon), {
                    size: 24,
                    class: "icon-primary mini-icon-shape"
                  }))
                ], 4),
                createVNode("div", { class: "card-mini-content" }, [
                  createVNode("h4", null, toDisplayString(service.name), 1),
                  createVNode("p", null, toDisplayString(service.shortDesc), 1)
                ]),
                createVNode("div", { class: "card-arrow" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="section-cta" data-v-01178c94>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "btn btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver Todas as Especialidades `);
          } else {
            return [
              createTextVNode(" Ver Todas as Especialidades ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="cta-section section" data-v-01178c94><div class="container" data-v-01178c94><div class="cta-wrapper" data-v-01178c94>`);
      _push(ssrRenderComponent(ColorBends, {
        class: "cta-bg-effect",
        colors: ["#6B4FA3", "#8FC176", "#8FB1F0", "#F0C850", "#3D2D5E"],
        rotation: 25,
        speed: 0.15,
        scale: 1.3,
        frequency: 1.2,
        warpStrength: 1,
        mouseInfluence: 0.4,
        parallax: 0.3,
        noise: 0.05,
        transparent: ""
      }, null, _parent));
      _push(`<div class="cta-content" data-v-01178c94><span class="cta-tag" data-v-01178c94>Autitude \u2014 Desenvolvimento e A\xE7\xE3o Humana</span><h2 data-v-01178c94>Pronto para nos conhecer?</h2><p data-v-01178c94>\u{1F49C} Cuidamos de pessoas. Potencializamos possibilidades.</p><div class="cta-contact" data-v-01178c94><a href="tel:+5512991968683" class="cta-contact-item" data-v-01178c94> \u{1F4F1} (12) 99196-8683 </a><a href="https://www.instagram.com/clinicaautitude" target="_blank" rel="noopener" class="cta-contact-item" data-v-01178c94> \u{1F4F7} @clinicaautitude </a><a href="https://wa.me/5512991968683" target="_blank" rel="noopener" class="cta-contact-item" data-v-01178c94> \u{1F4AC} WhatsApp </a></div><div class="cta-actions" data-v-01178c94>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agendar Avalia\xE7\xE3o `);
          } else {
            return [
              createTextVNode(" Agendar Avalia\xE7\xE3o ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttr("href", whatsappUrl)} class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" data-v-01178c94> Falar no WhatsApp </a></div><p class="cta-address" data-v-01178c94> \u{1F4CD} Rua Major Jos\xE9 dos Santos Moreira, 328 \u2014 Vila Rica \u2014 Pindamonhangaba/SP </p></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-01178c94"]]);

export { index as default };
//# sourceMappingURL=index-Py225SAP.mjs.map
