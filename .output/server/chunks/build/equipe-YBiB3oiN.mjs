import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderComponent } from 'vue/server-renderer';
import { Award, Heart, Users, Star } from 'lucide-vue-next';
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

const _sfc_main = {
  __name: "equipe",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Equipe - Autitude",
            description: "Conhe\xE7a a equipe da Autitude. Dra. Juliana Mariani - Terapeuta Ocupacional CREFITO 20083-TO.",
            url: "https://hautlys.github.io/Autitude/equipe",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Autitude - Nossa Equipe",
              employee: [
                {
                  "@type": "Person",
                  name: "Dra. Juliana Mariani",
                  jobTitle: "Terapeuta Ocupacional",
                  description: "Especialista em Integra\xE7\xE3o Sensorial com certifica\xE7\xE3o pela North Carolina University (USA)",
                  identifier: "CREFITO 20083-TO"
                }
              ]
            }
          })
        }
      ]
    });
    const team = [
      {
        name: "Dra. Juliana Mariani",
        role: "Terapeuta Ocupacional | CREFITO 20083-TO",
        bio: "Especialista em Integra\xE7\xE3o Sensorial com certifica\xE7\xE3o pela North Carolina University (USA). Mais de 15 anos de experi\xEAncia em terapia ocupacional pedi\xE1trica e desenvolvimento infantil.",
        tags: ["CREFITO 20083-TO", "Integra\xE7\xE3o Sensorial", "Certifica\xE7\xE3o NC University", "Terapia Pedi\xE1trica"]
      }
    ];
    const culture = [
      { title: "Excel\xEAncia", description: "Profissionais em constante atualiza\xE7\xE3o cient\xEDfica e t\xE9cnica.", icon: Award },
      { title: "Humaniza\xE7\xE3o", description: "Cada crian\xE7a \xE9 \xFAnica. Tratamos com respeito e sensibilidade.", icon: Heart },
      { title: "Parceria", description: "Fam\xEDlia \xE9 parte essencial do processo de desenvolvimento.", icon: Users },
      { title: "Crescimento", description: "Acompanhamos cada passo com aten\xE7\xE3o e dedica\xE7\xE3o.", icon: Star }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "team" }, _attrs))} data-v-4e5bb613><section class="hero-section" data-v-4e5bb613><div class="container" data-v-4e5bb613><div class="section-header" data-v-4e5bb613><span class="section-tag" data-v-4e5bb613>Nossa Profissional</span><h1 data-v-4e5bb613>Especialista dedicada</h1><p data-v-4e5bb613>Comprometida com o desenvolvimento das crian\xE7as.</p></div><div class="team-showcase" data-v-4e5bb613><!--[-->`);
      ssrRenderList(team, (member) => {
        _push(`<div class="team-main-card" data-v-4e5bb613><div class="member-visual" data-v-4e5bb613><div class="visual-shape" data-v-4e5bb613></div><div class="visual-accent" data-v-4e5bb613></div></div><div class="member-details" data-v-4e5bb613><h2 data-v-4e5bb613>${ssrInterpolate(member.name)}</h2><p class="member-role" data-v-4e5bb613>${ssrInterpolate(member.role)}</p><p class="member-bio" data-v-4e5bb613>${ssrInterpolate(member.bio)}</p><div class="member-tags" data-v-4e5bb613><!--[-->`);
        ssrRenderList(member.tags, (tag) => {
          _push(`<span class="tag" data-v-4e5bb613>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="values-section section" data-v-4e5bb613><div class="container" data-v-4e5bb613><div class="section-header" data-v-4e5bb613><div class="header-content" data-v-4e5bb613><span class="section-tag" data-v-4e5bb613>Nossos Valores</span><h2 data-v-4e5bb613>O que nos move</h2></div></div><div class="values-grid" data-v-4e5bb613><!--[-->`);
      ssrRenderList(culture, (value) => {
        _push(`<div class="value-card" data-v-4e5bb613><div class="value-icon-wrapper" data-v-4e5bb613>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(value.icon), {
          size: 24,
          class: "icon-primary value-icon-inner"
        }, null), _parent);
        _push(`</div><h3 data-v-4e5bb613>${ssrInterpolate(value.title)}</h3><p data-v-4e5bb613>${ssrInterpolate(value.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="cta-section section" data-v-4e5bb613><div class="container" data-v-4e5bb613><div class="cta-card" data-v-4e5bb613><div class="cta-content" data-v-4e5bb613><h2 data-v-4e5bb613>Gostaria de nos conhecer?</h2><p data-v-4e5bb613>Agende uma visita e descubra como podemos ajudar no desenvolvimento do seu filho.</p><div class="cta-actions" data-v-4e5bb613>`);
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contato",
        class: "btn btn-secondary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Falar Conosco `);
          } else {
            return [
              createTextVNode(" Falar Conosco ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/equipe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const equipe = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e5bb613"]]);

export { equipe as default };
//# sourceMappingURL=equipe-YBiB3oiN.mjs.map
