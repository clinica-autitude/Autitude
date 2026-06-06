import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, withCtx, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { HandHeart, Brain, Sparkles, Users, ArrowUpRight, ArrowDown, Quote, BookOpen, Mic, Activity, Puzzle, ShieldCheck, MapPin, Clock } from 'lucide-vue-next';
import { C as ColorBends } from './ColorBends-BUrl_YrQ.mjs';
import 'node:http';
import 'node:https';
import '../nitro/nitro.mjs';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import 'three';

const _sfc_main = {
  __name: "sobre",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Quem somos | Autitude - Desenvolvimento e A\xE7\xE3o Humana",
      meta: [
        { name: "description", content: "A Autitude \xE9 um espa\xE7o especializado no atendimento de crian\xE7as, adolescentes e fam\xEDlias, com foco no p\xFAblico neurodivergente. Abordagem humanizada, integrativa e baseada em evid\xEAncias cient\xEDficas." }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Quem somos - Autitude",
            description: "A Autitude \xE9 um espa\xE7o especializado em crian\xE7as, adolescentes e fam\xEDlias, com foco no p\xFAblico neurodivergente.",
            url: "https://hautlys.github.io/Autitude/sobre",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Autitude - Desenvolvimento e A\xE7\xE3o Humana",
              description: "Espa\xE7o especializado em crian\xE7as, adolescentes e fam\xEDlias, com foco no p\xFAblico neurodivergente."
            }
          })
        }
      ]
    });
    const pillars = [
      { title: "Acolher", icon: HandHeart, tone: "pink" },
      { title: "Compreender", icon: Brain, tone: "lavender" },
      { title: "Desenvolver", icon: Sparkles, tone: "mint" },
      { title: "Incluir", icon: Users, tone: "yellow" }
    ];
    const specialties = [
      {
        name: "Neuropsicologia",
        blurb: "Avalia\xE7\xE3o neuropsicol\xF3gica, rastreamento de neurodiverg\xEAncias e desenvolvimento cognitivo, emocional e comportamental.",
        icon: Brain,
        tone: "lavender"
      },
      {
        name: "Neuropsicopedagogia",
        blurb: "Avalia\xE7\xE3o e plano pedag\xF3gico individualizado, com identifica\xE7\xE3o de desafios e apoio ao desenvolvimento escolar.",
        icon: BookOpen,
        tone: "pink"
      },
      {
        name: "Fonoaudiologia",
        blurb: "Linguagem, comunica\xE7\xE3o social, fala e motricidade orofacial \u2014 com olhar especializado em neurodiverg\xEAncia.",
        icon: Mic,
        tone: "mint"
      },
      {
        name: "Terapia Ocupacional",
        blurb: "Avalia\xE7\xE3o cl\xEDnica, integra\xE7\xE3o sensorial e promo\xE7\xE3o da autonomia pessoal e social, com certifica\xE7\xE3o internacional (USC, USA).",
        icon: Activity,
        tone: "yellow"
      },
      {
        name: "Terapia ABA Humanizada",
        blurb: "Aplica\xE7\xE3o humanizada da ABA para o desenvolvimento de habilidades comunicativas, sociais, funcionais e de aprendizagem.",
        icon: Puzzle,
        tone: "lavender",
        span: "full"
      }
    ];
    const differentiators = [
      {
        label: "Multidisciplinar",
        title: "Quatro especialidades, uma jornada",
        text: "Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia e Terapia Ocupacional integradas em rede, com a fam\xEDlia e a escola.",
        icon: Users,
        tone: "lavender",
        span: "wide"
      },
      {
        label: "Foco",
        title: "Cuidado neurodivergente",
        text: "Especializados em crian\xE7as, adolescentes e fam\xEDlias neurodivergentes.",
        icon: Sparkles,
        tone: "pink",
        span: "half"
      },
      {
        label: "Evid\xEAncias",
        title: "Ci\xEAncia que sustenta",
        text: "Pr\xE1tica baseada em evid\xEAncias, com certifica\xE7\xE3o internacional (USC, USA).",
        icon: ShieldCheck,
        tone: "mint",
        span: "half"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-a7c625ed><section class="hero" data-v-a7c625ed><div class="hero__decor" data-v-a7c625ed><span class="orb orb--1" data-v-a7c625ed></span><span class="orb orb--2" data-v-a7c625ed></span><span class="grid-mask" data-v-a7c625ed></span></div><div class="container hero__inner" data-v-a7c625ed><span class="tag tag--glass" data-v-a7c625ed><span class="tag-dot" data-v-a7c625ed></span> Quem somos </span><h1 class="hero__title" data-v-a7c625ed> Acolhemos pessoas.<br data-v-a7c625ed><span class="grad-text" data-v-a7c625ed>Potencializamos possibilidades.</span></h1><p class="hero__lead" data-v-a7c625ed> A <strong data-v-a7c625ed>Autitude</strong> \xE9 um espa\xE7o especializado no cuidado integrado de <em data-v-a7c625ed>crian\xE7as, adolescentes e fam\xEDlias</em>, com foco no p\xFAblico neurodivergente. Atuamos com uma abordagem humanizada, integrativa e baseada em evid\xEAncias. </p><ul class="hero__pillars" aria-label="Nossos pilares" data-v-a7c625ed><!--[-->`);
      ssrRenderList(pillars, (p) => {
        _push(`<li${ssrRenderAttr("data-tone", p.tone)} data-v-a7c625ed><span class="pillar-icon" data-v-a7c625ed>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(p.icon), {
          size: 16,
          "stroke-width": 2.4
        }, null), _parent);
        _push(`</span><span class="pillar-label" data-v-a7c625ed>${ssrInterpolate(p.title)}</span></li>`);
      });
      _push(`<!--]--></ul><div class="hero__actions" data-v-a7c625ed>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn--primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conversar com a gente `);
            _push2(ssrRenderComponent(unref(ArrowUpRight), {
              size: 18,
              "stroke-width": 2.5
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Conversar com a gente "),
              createVNode(unref(ArrowUpRight), {
                size: 18,
                "stroke-width": 2.5
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/servicos",
        class: "btn btn--ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver especialidades `);
          } else {
            return [
              createTextVNode(" Ver especialidades ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><a href="#abordagem" class="hero__scroll" aria-label="Rolar para a abordagem" data-v-a7c625ed>`);
      _push(ssrRenderComponent(unref(ArrowDown), {
        size: 18,
        "stroke-width": 2.4
      }, null, _parent));
      _push(`</a></section><section id="abordagem" class="bento-section" data-v-a7c625ed><div class="container" data-v-a7c625ed><header class="section-header section-header--center" data-v-a7c625ed><span class="tag tag--glass" data-v-a7c625ed><span class="tag-dot" data-v-a7c625ed></span> Nossa abordagem </span><h2 class="section-title" data-v-a7c625ed> Cuidado integrado, com <span class="grad-text" data-v-a7c625ed>pessoas no centro</span></h2></header><div class="bento" data-v-a7c625ed><article class="bento__card bento__card--statement" data-v-a7c625ed><div class="statement__bg" data-v-a7c625ed></div>`);
      _push(ssrRenderComponent(unref(Quote), {
        size: 32,
        "stroke-width": 2,
        class: "statement__icon"
      }, null, _parent));
      _push(`<p class="statement__text" data-v-a7c625ed> Cada indiv\xEDduo \xE9 \xFAnico \u2014 <em data-v-a7c625ed>nosso cuidado tamb\xE9m.</em> Combinamos diferentes olhares profissionais para compreender cada pessoa em sua totalidade. </p><div class="statement__chips" data-v-a7c625ed><span class="chip" data-v-a7c625ed><span class="chip-dot" data-v-a7c625ed></span>Humanizada</span><span class="chip" data-v-a7c625ed><span class="chip-dot" data-v-a7c625ed></span>Integrativa</span><span class="chip" data-v-a7c625ed><span class="chip-dot" data-v-a7c625ed></span>Evid\xEAncias</span></div></article><!--[-->`);
      ssrRenderList(specialties, (s, i) => {
        _push(`<article class="${ssrRenderClass([{ "bento__card--specialty-full": s.span === "full" }, "bento__card bento__card--specialty"])}"${ssrRenderAttr("data-tone", s.tone)} data-v-a7c625ed><span class="card__index" data-v-a7c625ed>0${ssrInterpolate(i + 1)}</span><div class="card__icon"${ssrRenderAttr("data-tone", s.tone)} data-v-a7c625ed>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(s.icon), {
          size: 22,
          "stroke-width": 2.2
        }, null), _parent);
        _push(`</div><h3 class="card__title" data-v-a7c625ed>${ssrInterpolate(s.name)}</h3><p class="card__text" data-v-a7c625ed>${ssrInterpolate(s.blurb)}</p></article>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(differentiators, (d) => {
        _push(`<article class="${ssrRenderClass([`bento__card--${d.span}`, "bento__card bento__card--feature"])}"${ssrRenderAttr("data-tone", d.tone)} data-v-a7c625ed><div class="card__icon"${ssrRenderAttr("data-tone", d.tone)} data-v-a7c625ed>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(d.icon), {
          size: 22,
          "stroke-width": 2.2
        }, null), _parent);
        _push(`</div><span class="card__label" data-v-a7c625ed>${ssrInterpolate(d.label)}</span><h3 class="card__title" data-v-a7c625ed>${ssrInterpolate(d.title)}</h3><p class="card__text" data-v-a7c625ed>${ssrInterpolate(d.text)}</p></article>`);
      });
      _push(`<!--]--><article class="bento__card bento__card--location" data-tone="lavender" data-v-a7c625ed><div class="location__bg" data-v-a7c625ed></div><div class="location__head" data-v-a7c625ed><div class="card__icon" data-tone="lavender" data-v-a7c625ed>`);
      _push(ssrRenderComponent(unref(MapPin), {
        size: 22,
        "stroke-width": 2.2
      }, null, _parent));
      _push(`</div><div data-v-a7c625ed><span class="card__label" data-v-a7c625ed>Onde estamos</span><h3 class="card__title card__title--md" data-v-a7c625ed>Pindamonhangaba, SP</h3></div></div><p class="card__text" data-v-a7c625ed> Rua Major Jos\xE9 dos Santos Moreira, 328<br data-v-a7c625ed> Vila Rica \u2014 Pindamonhangaba / SP </p><div class="location__meta" data-v-a7c625ed><span class="chip chip--sm" data-v-a7c625ed>`);
      _push(ssrRenderComponent(unref(Clock), {
        size: 12,
        "stroke-width": 2.4
      }, null, _parent));
      _push(` Seg\u2013Sex \xB7 8h \xE0s 18h </span><span class="chip chip--sm" data-v-a7c625ed>Presencial &amp; online</span></div><a href="https://www.google.com/maps/search/?api=1&amp;query=Rua+Major+Jos%C3%A9+dos+Santos+Moreira%2C+328+-+Vila+Rica%2C+Pindamonhangaba+-+SP" target="_blank" rel="noopener" class="location__link" data-v-a7c625ed> Ver no Google Maps `);
      _push(ssrRenderComponent(unref(ArrowUpRight), {
        size: 15,
        "stroke-width": 2.5
      }, null, _parent));
      _push(`</a></article></div></div></section><section class="cta" data-v-a7c625ed>`);
      _push(ssrRenderComponent(ColorBends, {
        class: "cta__bg",
        colors: ["#c8a8e9", "#f4a5b9", "#a8d8b9", "#FDE68A"],
        speed: 0.18,
        "bend-width": 2.4,
        noise: 0.08
      }, null, _parent));
      _push(`<div class="container cta__inner" data-v-a7c625ed><span class="tag tag--glass" data-v-a7c625ed><span class="tag-dot" data-v-a7c625ed></span> Vamos conversar </span><h2 class="cta__title" data-v-a7c625ed> Cada fam\xEDlia traz uma hist\xF3ria.<br data-v-a7c625ed> Estamos aqui para <span class="grad-text" data-v-a7c625ed>escutar a sua</span>. </h2><div class="cta__actions" data-v-a7c625ed><a href="https://wa.me/5512991968683?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20conversa%20inicial%20na%20Autitude." target="_blank" rel="noopener" class="btn btn--primary" data-v-a7c625ed> Agendar conversa `);
      _push(ssrRenderComponent(unref(ArrowUpRight), {
        size: 18,
        "stroke-width": 2.5
      }, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/equipe",
        class: "btn btn--ghost"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Conhecer a equipe `);
          } else {
            return [
              createTextVNode(" Conhecer a equipe ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sobre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sobre = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7c625ed"]]);

export { sobre as default };
//# sourceMappingURL=sobre-NiJJeFtk.mjs.map
