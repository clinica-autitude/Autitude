import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderComponent } from 'file:///home/ubuntu/Autitude/node_modules/vue/server-renderer/index.mjs';
import { Award, Heart, Users, Star } from 'file:///home/ubuntu/Autitude/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
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
