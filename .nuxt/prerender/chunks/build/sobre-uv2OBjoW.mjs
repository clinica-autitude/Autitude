import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderComponent } from 'file:///home/ubuntu/Autitude/node_modules/vue/server-renderer/index.mjs';
import { Award, Heart, Users, Star, Target, Lightbulb } from 'file:///home/ubuntu/Autitude/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import 'file:///home/ubuntu/Autitude/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/h3/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/destr/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/hookable/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/ohash/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/klona/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/defu/dist/defu.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/scule/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unctx/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/ubuntu/Autitude/node_modules/pathe/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unhead/dist/server.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/devalue/index.js';
import 'file:///home/ubuntu/Autitude/node_modules/unhead/dist/utils.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "sobre",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-8e3570d6><section class="hero-section" data-v-8e3570d6><div class="container" data-v-8e3570d6><div class="about-header" data-v-8e3570d6><span class="section-tag" data-v-8e3570d6>Sobre a Autitude</span><h1 data-v-8e3570d6>Cuidando do futuro do seu filho</h1><p class="lead" data-v-8e3570d6> Uma cl\xEDnica dedicada \xE0 promo\xE7\xE3o do desenvolvimento integral de crian\xE7as, com excel\xEAncia t\xE9cnica e cuidado humanizado. </p></div><div class="about-showcase" data-v-8e3570d6><div class="about-content" data-v-8e3570d6><h2 data-v-8e3570d6>Nossa Hist\xF3ria</h2><p data-v-8e3570d6> A <strong data-v-8e3570d6>Autitude</strong> nasceu do desejo de oferecer um atendimento diferenciado e de alta qualidade para crian\xE7as com necessidades neurodivergentes. Fundada por profissionais especializadas em Terapia Ocupacional e Integra\xE7\xE3o Sensorial, nossa cl\xEDnica se dedica a proporcionar um ambiente acolhedor e especializado. </p><p data-v-8e3570d6> Localizada na <strong data-v-8e3570d6>Rua Major Jos\xE9 dos Santos Moreira, 328, Pindamonhangaba-SP</strong>, atendemos crian\xE7as e fam\xEDlias com carinho, profissionalismo e embasamento cient\xEDfico. </p></div><div class="about-stats" data-v-8e3570d6><div class="stat-card" data-v-8e3570d6><span class="stat-number" data-v-8e3570d6>15+</span><span class="stat-text" data-v-8e3570d6>Anos de Experi\xEAncia</span></div><div class="stat-card" data-v-8e3570d6><span class="stat-number" data-v-8e3570d6>Certificada</span><span class="stat-text" data-v-8e3570d6>NC University USA</span></div><div class="stat-card" data-v-8e3570d6><span class="stat-number" data-v-8e3570d6>Local</span><span class="stat-text" data-v-8e3570d6>Pindamonhangaba</span></div></div></div></div></section><section class="values-section section" data-v-8e3570d6><div class="container" data-v-8e3570d6><div class="section-header" data-v-8e3570d6><div class="header-content" data-v-8e3570d6><span class="section-tag" data-v-8e3570d6>Nossos Valores</span><h2 data-v-8e3570d6>O que nos move</h2></div></div><div class="values-grid" data-v-8e3570d6><!--[-->`);
      ssrRenderList(values, (value) => {
        _push(`<div class="value-card" data-v-8e3570d6><div class="value-icon" data-v-8e3570d6>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(value.icon), {
          size: 24,
          class: "icon-primary icon-shape"
        }, null), _parent);
        _push(`</div><h3 data-v-8e3570d6>${ssrInterpolate(value.title)}</h3><p data-v-8e3570d6>${ssrInterpolate(value.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="mission-section section" data-v-8e3570d6><div class="container" data-v-8e3570d6><div class="mission-grid" data-v-8e3570d6><div class="mission-card" data-v-8e3570d6><div class="mission-icon" data-v-8e3570d6>`);
      _push(ssrRenderComponent(unref(Target), {
        size: 20,
        class: "icon-primary icon-circle"
      }, null, _parent));
      _push(`</div><h3 data-v-8e3570d6>Miss\xE3o</h3><p data-v-8e3570d6>Promover o desenvolvimento integral de crian\xE7as atrav\xE9s de interven\xE7\xF5es especializadas e baseadas em evid\xEAncias cient\xEDficas.</p></div><div class="mission-card" data-v-8e3570d6><div class="mission-icon" data-v-8e3570d6>`);
      _push(ssrRenderComponent(unref(Lightbulb), {
        size: 20,
        class: "icon-primary icon-circle"
      }, null, _parent));
      _push(`</div><h3 data-v-8e3570d6>Vis\xE3o</h3><p data-v-8e3570d6>Ser refer\xEAncia em terapia ocupacional e integra\xE7\xE3o sensorial na regi\xE3o.</p></div><div class="mission-card" data-v-8e3570d6><div class="mission-icon" data-v-8e3570d6>`);
      _push(ssrRenderComponent(unref(Heart), {
        size: 20,
        class: "icon-primary icon-circle"
      }, null, _parent));
      _push(`</div><h3 data-v-8e3570d6>Valores</h3><p data-v-8e3570d6>Humaniza\xE7\xE3o, \xE9tica, excel\xEAncia t\xE9cnica e compromisso com as fam\xEDlias.</p></div></div></div></section><section class="cta-section section" data-v-8e3570d6><div class="container" data-v-8e3570d6><div class="cta-card" data-v-8e3570d6><div class="cta-content" data-v-8e3570d6><h2 data-v-8e3570d6>Gostaria de nos conhecer?</h2><p data-v-8e3570d6>Agende uma visita e descubra como podemos ajudar no desenvolvimento do seu filho.</p>`);
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
const sobre = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8e3570d6"]]);

export { sobre as default };
//# sourceMappingURL=sobre-uv2OBjoW.mjs.map
