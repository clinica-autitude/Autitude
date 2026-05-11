import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { Award, Heart, Users, Star, Target, Lightbulb } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './ColorBends-DzA-kp_2.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
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
      title: "Sobre N\xF3s | Autitude - Cl\xEDnica de Terapia Ocupacional",
      meta: [
        { name: "description", content: "Conhe\xE7a a hist\xF3ria da Autitude - cl\xEDnica especializada em Terapia Ocupacional e Integra\xE7\xE3o Sensorial em Pindamonhangaba-SP." }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Sobre a Autitude",
            description: "Conhe\xE7a a hist\xF3ria da Autitude - cl\xEDnica especializada em Terapia Ocupacional e Integra\xE7\xE3o Sensorial em Pindamonhangaba-SP.",
            url: "https://hautlys.github.io/Autitude/sobre",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Autitude - Cl\xEDnica de Terapia Ocupacional",
              description: "Cl\xEDnica especializada em Terapia Ocupacional e Integra\xE7\xE3o Sensorial"
            }
          })
        }
      ]
    });
    const values = [
      {
        title: "Excel\xEAncia",
        description: "Profissionais em constante atualiza\xE7\xE3o cient\xEDfica e t\xE9cnica.",
        icon: Award
      },
      {
        title: "Humaniza\xE7\xE3o",
        description: "Cada crian\xE7a \xE9 \xFAnica. Tratamos com respeito e sensibilidade.",
        icon: Heart
      },
      {
        title: "Parceria",
        description: "Fam\xEDlia \xE9 parte essencial do processo de desenvolvimento.",
        icon: Users
      },
      {
        title: "Crescimento",
        description: "Acompanhamos cada passo com aten\xE7\xE3o e dedica\xE7\xE3o.",
        icon: Star
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-5304accf><section class="hero-section" data-v-5304accf><div class="container" data-v-5304accf><div class="about-header" data-v-5304accf><span class="section-tag" data-v-5304accf>Sobre a Autitude</span><h1 data-v-5304accf>Cuidando do futuro do seu filho</h1><p class="lead" data-v-5304accf> Uma cl\xEDnica dedicada \xE0 promo\xE7\xE3o do desenvolvimento integral de crian\xE7as, com excel\xEAncia t\xE9cnica e cuidado humanizado. </p></div><div class="about-showcase" data-v-5304accf><div class="about-content" data-v-5304accf><h2 data-v-5304accf>Nossa Hist\xF3ria</h2><p data-v-5304accf> A <strong data-v-5304accf>Autitude</strong> nasceu do desejo de oferecer um atendimento diferenciado e de alta qualidade para crian\xE7as com necessidades neurodivergentes. Fundada por profissionais especializadas em Terapia Ocupacional e Integra\xE7\xE3o Sensorial, nossa cl\xEDnica se dedica a proporcionar um ambiente acolhedor e especializado. </p><p data-v-5304accf> Localizada na <strong data-v-5304accf>Rua Major Jos\xE9 dos Santos Moreira, 328, Pindamonhangaba-SP</strong>, atendemos crian\xE7as e fam\xEDlias com carinho, profissionalismo e embasamento cient\xEDfico. </p></div><div class="about-stats" data-v-5304accf><div class="stat-card" data-v-5304accf><span class="stat-number" data-v-5304accf>15+</span><span class="stat-text" data-v-5304accf>Anos de Experi\xEAncia</span></div><div class="stat-card" data-v-5304accf><span class="stat-number" data-v-5304accf>Certificada</span><span class="stat-text" data-v-5304accf>NC University USA</span></div><div class="stat-card" data-v-5304accf><span class="stat-number" data-v-5304accf>Local</span><span class="stat-text" data-v-5304accf>Pindamonhangaba</span></div></div></div></div></section><section class="values-section section" data-v-5304accf><div class="container" data-v-5304accf><div class="section-header" data-v-5304accf><div class="header-content" data-v-5304accf><span class="section-tag" data-v-5304accf>Nossos Valores</span><h2 data-v-5304accf>O que nos move</h2></div></div><div class="values-grid" data-v-5304accf><!--[-->`);
      ssrRenderList(values, (value) => {
        _push(`<div class="value-card" data-v-5304accf><div class="value-icon" data-v-5304accf>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(value.icon), {
          size: 24,
          class: "icon-primary icon-shape"
        }, null), _parent);
        _push(`</div><h3 data-v-5304accf>${ssrInterpolate(value.title)}</h3><p data-v-5304accf>${ssrInterpolate(value.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="mission-section section" data-v-5304accf><div class="container" data-v-5304accf><div class="mission-grid" data-v-5304accf><div class="mission-card" data-v-5304accf><div class="mission-icon" data-v-5304accf>`);
      _push(ssrRenderComponent(unref(Target), {
        size: 20,
        class: "icon-primary icon-circle"
      }, null, _parent));
      _push(`</div><h3 data-v-5304accf>Miss\xE3o</h3><p data-v-5304accf>Promover o desenvolvimento integral de crian\xE7as atrav\xE9s de interven\xE7\xF5es especializadas e baseadas em evid\xEAncias cient\xEDficas.</p></div><div class="mission-card" data-v-5304accf><div class="mission-icon" data-v-5304accf>`);
      _push(ssrRenderComponent(unref(Lightbulb), {
        size: 20,
        class: "icon-primary icon-circle"
      }, null, _parent));
      _push(`</div><h3 data-v-5304accf>Vis\xE3o</h3><p data-v-5304accf>Ser refer\xEAncia em terapia ocupacional e integra\xE7\xE3o sensorial na regi\xE3o.</p></div><div class="mission-card" data-v-5304accf><div class="mission-icon" data-v-5304accf>`);
      _push(ssrRenderComponent(unref(Heart), {
        size: 20,
        class: "icon-primary icon-circle"
      }, null, _parent));
      _push(`</div><h3 data-v-5304accf>Valores</h3><p data-v-5304accf>Humaniza\xE7\xE3o, \xE9tica, excel\xEAncia t\xE9cnica e compromisso com as fam\xEDlias.</p></div></div></div></section><section class="cta-section section" data-v-5304accf><div class="container" data-v-5304accf><div class="cta-card" data-v-5304accf>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "cta-bg-effect",
        colors: ["#E8E0F5", "#C4EAD8", "#FFD4C4", "#CDBFF0"],
        rotation: 35,
        speed: 0.14,
        scale: 1.35,
        frequency: 1.3,
        warpStrength: 0.9,
        mouseInfluence: 0.35,
        parallax: 0.25,
        noise: 0.05,
        transparent: ""
      }, null, _parent));
      _push(`<div class="cta-content" data-v-5304accf><h2 data-v-5304accf>Gostaria de nos conhecer?</h2><p data-v-5304accf>Agende uma visita e descubra como podemos ajudar no desenvolvimento do seu filho.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agendar Visita `);
          } else {
            return [
              createTextVNode(" Agendar Visita ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sobre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sobre = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5304accf"]]);

export { sobre as default };
//# sourceMappingURL=sobre-YBfn0rRo.mjs.map
