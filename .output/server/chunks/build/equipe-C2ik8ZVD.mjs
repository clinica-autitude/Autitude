import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderComponent } from 'vue/server-renderer';
import { Award, Heart, Users, Star } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './ColorBends-DzA-kp_2.mjs';
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
  __name: "equipe",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Equipe | Autitude - Desenvolvimento e A\xE7\xE3o Humana",
      meta: [
        { name: "description", content: "Conhe\xE7a a equipe da Autitude \u2014 profissionais dedicados ao cuidado de crian\xE7as, adolescentes e fam\xEDlias, com foco no p\xFAblico neurodivergente." }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Equipe - Autitude",
            description: "Conhe\xE7a a equipe da Autitude \u2014 profissionais dedicados ao cuidado de crian\xE7as, adolescentes e fam\xEDlias.",
            url: "https://hautlys.github.io/Autitude/equipe",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Autitude - Desenvolvimento e A\xE7\xE3o Humana",
              employee: [
                {
                  "@type": "Person",
                  name: "Dra. Juliana Mariani",
                  jobTitle: "Terapeuta Ocupacional",
                  description: "Especialista em Integra\xE7\xE3o Sensorial com certifica\xE7\xE3o internacional pela University of Southern California (USC, USA).",
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
        bio: "Especialista em Integra\xE7\xE3o Sensorial com certifica\xE7\xE3o internacional pela University of Southern California (USC, USA). Atua h\xE1 mais de 15 anos com terapia ocupacional pedi\xE1trica, desenvolvimento infantil e cuidado de pessoas neurodivergentes e suas fam\xEDlias.",
        tags: ["CREFITO 20083-TO", "Integra\xE7\xE3o Sensorial", "Certifica\xE7\xE3o USC", "Terapia Pedi\xE1trica"]
      }
    ];
    const culture = [
      { title: "Excel\xEAncia", description: "Pr\xE1tica baseada em evid\xEAncias e em constante atualiza\xE7\xE3o.", icon: Award },
      { title: "Humaniza\xE7\xE3o", description: "Cada pessoa \xE9 \xFAnica. Cuidamos com respeito e sensibilidade.", icon: Heart },
      { title: "Parceria", description: "A fam\xEDlia \xE9 parte essencial do processo de desenvolvimento.", icon: Users },
      { title: "Crescimento", description: "Acompanhamos cada conquista com aten\xE7\xE3o e dedica\xE7\xE3o.", icon: Star }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "team" }, _attrs))} data-v-7e4ca0eb><section class="hero-section" data-v-7e4ca0eb><div class="container" data-v-7e4ca0eb><div class="section-header" data-v-7e4ca0eb><span class="section-tag" data-v-7e4ca0eb>Nossa profissional</span><h1 data-v-7e4ca0eb>Cuidado conduzido por m\xE3os especializadas</h1><p data-v-7e4ca0eb>Profissionais dedicados ao desenvolvimento integral de cada pessoa e de sua fam\xEDlia.</p></div><div class="team-showcase" data-v-7e4ca0eb><!--[-->`);
      ssrRenderList(team, (member) => {
        _push(`<div class="team-main-card" data-v-7e4ca0eb><div class="member-visual" data-v-7e4ca0eb><div class="visual-shape" data-v-7e4ca0eb></div><div class="visual-accent" data-v-7e4ca0eb></div></div><div class="member-details" data-v-7e4ca0eb><h2 data-v-7e4ca0eb>${ssrInterpolate(member.name)}</h2><p class="member-role" data-v-7e4ca0eb>${ssrInterpolate(member.role)}</p><p class="member-bio" data-v-7e4ca0eb>${ssrInterpolate(member.bio)}</p><div class="member-tags" data-v-7e4ca0eb><!--[-->`);
        ssrRenderList(member.tags, (tag) => {
          _push(`<span class="tag" data-v-7e4ca0eb>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="values-section section" data-v-7e4ca0eb><div class="container" data-v-7e4ca0eb><div class="section-header" data-v-7e4ca0eb><div class="header-content" data-v-7e4ca0eb><span class="section-tag" data-v-7e4ca0eb>Nossos Valores</span><h2 data-v-7e4ca0eb>O que nos move</h2></div></div><div class="values-grid" data-v-7e4ca0eb><!--[-->`);
      ssrRenderList(culture, (value) => {
        _push(`<div class="value-card" data-v-7e4ca0eb><div class="value-icon-wrapper" data-v-7e4ca0eb>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(value.icon), {
          size: 24,
          class: "icon-primary value-icon-inner"
        }, null), _parent);
        _push(`</div><h3 data-v-7e4ca0eb>${ssrInterpolate(value.title)}</h3><p data-v-7e4ca0eb>${ssrInterpolate(value.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="cta-section section" data-v-7e4ca0eb><div class="container" data-v-7e4ca0eb><div class="cta-card" data-v-7e4ca0eb>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "cta-bg-effect",
        colors: ["#6B4FA3", "#8FB1F0", "#8FC176", "#3D2D5E"],
        rotation: 15,
        speed: 0.12,
        scale: 1.4,
        frequency: 1,
        warpStrength: 0.8,
        mouseInfluence: 0.3,
        parallax: 0.2,
        noise: 0.04,
        transparent: ""
      }, null, _parent));
      _push(`<div class="cta-content" data-v-7e4ca0eb><span class="cta-tag" data-v-7e4ca0eb>Autitude \u2014 Desenvolvimento e A\xE7\xE3o Humana</span><h2 data-v-7e4ca0eb>Gostaria de nos conhecer?</h2><p data-v-7e4ca0eb>\u{1F49C} Cuidamos de pessoas. Potencializamos possibilidades.</p><div class="cta-actions" data-v-7e4ca0eb>`);
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
const equipe = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e4ca0eb"]]);

export { equipe as default };
//# sourceMappingURL=equipe-C2ik8ZVD.mjs.map
