import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { Stethoscope, Brain, Target, Baby, ClipboardCheck } from 'lucide-vue-next';
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

const whatsappUrl = "https://wa.me/5512991968683";
const _sfc_main = {
  __name: "servicos",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Servi\xE7os - Autitude",
            description: "Servi\xE7os especializados: Terapia Ocupacional, Integra\xE7\xE3o Sensorial, ABA, Estimula\xE7\xE3o Precoce em Pindamonhangaba-SP.",
            url: "https://hautlys.github.io/Autitude/servicos",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Autitude - Servi\xE7os",
              provides: [
                "Terapia Ocupacional",
                "Integra\xE7\xE3o Sensorial",
                "ABA - An\xE1lise do Comportamento Aplicada",
                "Estimula\xE7\xE3o Precoce",
                "Avalia\xE7\xE3o Comportamental"
              ]
            }
          })
        }
      ]
    });
    const services = [
      {
        title: "Terapia Ocupacional",
        description: "Interven\xE7\xF5es para desenvolver habilidades motoras, cognitivas e funcionais.",
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)",
        icon: Stethoscope,
        items: ["Motor fino e grosso", "Coordena\xE7\xE3o motora", "Autonomia pessoal", "Atividades de vida di\xE1ria"]
      },
      {
        title: "Integra\xE7\xE3o Sensorial",
        description: "Abordagem especializada para organizar o processamento sensorial. Desenvolvida pela Dra. Jean Ayres, trabalha as 8 sensa\xE7\xF5es do corpo.",
        color: "linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)",
        icon: Brain,
        items: [
          "Diagn\xF3stico sensorial completo",
          "Terapia de Integra\xE7\xE3o Sensorial (SIT)",
          "Sala Snoezelen / Sala Sensorial",
          "Programa de interven\xE7\xE3o individualizado",
          "Orienta\xE7\xE3o para escola e fam\xEDlia",
          "Estrat\xE9gias de regula\xE7\xE3o sensorial"
        ]
      },
      {
        title: "ABA (An\xE1lise do Comportamento Aplicada)",
        description: "Metodologia cient\xEDfica baseada em princ\xEDpios do comportamento para desenvolver habilidades sociais, comunicativas e comportamentais.",
        color: "linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)",
        icon: Target,
        items: [
          "Avalia\xE7\xE3o funcional do comportamento",
          "Interven\xE7\xE3o comportamental individualizada",
          "Ensino estruturado de habilidades",
          "Redu\xE7\xE3o de comportamentos problem\xE1ticos",
          "Acompanhamento e orienta\xE7\xE3o familiar",
          "Registro e an\xE1lise de dados"
        ]
      },
      {
        title: "Estimula\xE7\xE3o Precoce",
        description: "Interven\xE7\xF5es para os primeiros anos de vida.",
        color: "linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)",
        icon: Baby,
        items: ["Avalia\xE7\xE3o do desenvolvimento", "Programa de estimula\xE7\xE3o", "Suporte aos pais", "Monitoramento"]
      },
      {
        title: "Avalia\xE7\xE3o Comportamental",
        description: "Processos avaliativos para compreender o perfil funcional.",
        color: "linear-gradient(135deg, var(--pastel-peach) 0%, var(--secondary-light) 100%)",
        icon: ClipboardCheck,
        items: ["Avalia\xE7\xE3o sensorial", "Perfil motor", "Escala de independ\xEAncia", "Relat\xF3rio completo"]
      }
    ];
    const processSteps = [
      { title: "Contato", description: "Voc\xEA entra em contato pelo WhatsApp ou formul\xE1rio." },
      { title: "Agendamento", description: "Marcamos uma avalia\xE7\xE3o inicial." },
      { title: "Avalia\xE7\xE3o", description: "Realizamos avalia\xE7\xE3o completa do desenvolvimento." },
      { title: "Plano", description: "Elaboramos um plano personalizado." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services" }, _attrs))} data-v-aef7625b><section class="hero-section" data-v-aef7625b><div class="container" data-v-aef7625b><div class="section-header" data-v-aef7625b><span class="section-tag" data-v-aef7625b>Nossos Servi\xE7os</span><h1 data-v-aef7625b>Tratamentos especializados</h1><p data-v-aef7625b>Oferecemos interven\xE7\xF5es especializadas para o desenvolvimento integral da crian\xE7a.</p></div><div class="services-showcase" data-v-aef7625b><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<div class="service-card-main" data-v-aef7625b><div class="card-number" data-v-aef7625b>${ssrInterpolate(index + 1)}</div><div class="card-content" data-v-aef7625b><div class="service-icon-large" style="${ssrRenderStyle({ background: service.color })}" data-v-aef7625b>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), {
          size: 28,
          class: "icon-primary icon-inner"
        }, null), _parent);
        _push(`</div><div class="service-text" data-v-aef7625b><h3 data-v-aef7625b>${ssrInterpolate(service.title)}</h3><p data-v-aef7625b>${ssrInterpolate(service.description)}</p><ul class="service-list" data-v-aef7625b><!--[-->`);
        ssrRenderList(service.items, (item) => {
          _push(`<li data-v-aef7625b>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="process-section section" data-v-aef7625b><div class="container" data-v-aef7625b><div class="section-header" data-v-aef7625b><div class="header-content" data-v-aef7625b><span class="section-tag" data-v-aef7625b>Como funciona</span><h2 data-v-aef7625b>Nosso Processo</h2></div></div><div class="process-timeline" data-v-aef7625b><!--[-->`);
      ssrRenderList(processSteps, (step, index) => {
        _push(`<div class="process-step" data-v-aef7625b><div class="step-marker" data-v-aef7625b>${ssrInterpolate(index + 1)}</div><div class="step-content" data-v-aef7625b><h4 data-v-aef7625b>${ssrInterpolate(step.title)}</h4><p data-v-aef7625b>${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="cta-section section" data-v-aef7625b><div class="container" data-v-aef7625b><div class="cta-card" data-v-aef7625b><div class="cta-content" data-v-aef7625b><h2 data-v-aef7625b>Agende uma avalia\xE7\xE3o</h2><p data-v-aef7625b>Nossa equipe est\xE1 pronta para entender as necessidades do seu filho.</p><div class="cta-actions" data-v-aef7625b>`);
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
      _push(`<a${ssrRenderAttr("href", whatsappUrl)} class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" data-v-aef7625b> Falar no WhatsApp </a></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/servicos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const servicos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aef7625b"]]);

export { servicos as default };
//# sourceMappingURL=servicos-DzaFL8EK.mjs.map
