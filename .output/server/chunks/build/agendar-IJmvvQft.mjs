import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './DotGrid-awvUuBj2.mjs';
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
import 'lucide-vue-next';

const pediatricLimit = 18;
const _sfc_main = {
  __name: "agendar",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Agendar | Autitude - Desenvolvimento e A\xE7\xE3o Humana",
      meta: [
        { name: "description", content: "Agende uma avalia\xE7\xE3o na Autitude. Cuidamos de pessoas e potencializamos possibilidades. Retornamos em at\xE9 24 horas." }
      ]
    });
    const config = {
      whatsappUrl: "https://wa.me/5512991968683"
    };
    const form = ref({
      parentName: "",
      phone: "",
      email: "",
      childName: "",
      childAge: 0,
      message: "",
      privacy: false
    });
    const isSubmitting = ref(false);
    const whatsappLink = computed(() => {
      const text = encodeURIComponent("Ol\xE1! Gostaria de agendar uma avalia\xE7\xE3o na Autitude.");
      return `${config.whatsappUrl}?text=${text}`;
    });
    const canIncrement = computed(() => form.value.childAge < pediatricLimit);
    const canDecrement = computed(() => form.value.childAge > 0);
    const ageDisplay = computed(() => form.value.childAge === pediatricLimit ? "18+" : form.value.childAge);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "schedule" }, _attrs))} data-v-2715fdfa><section class="hero-section" data-v-2715fdfa><div class="hero-bg-grid" data-v-2715fdfa>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        "dot-size": 14,
        gap: 28,
        "base-color": "#6B4FA3",
        "active-color": "#3D2D5E",
        proximity: 120,
        "speed-trigger": 80,
        "shock-radius": 200,
        "shock-strength": 4,
        "max-speed": 5e3,
        resistance: 750,
        "return-duration": 1.5
      }, null, _parent));
      _push(`</div><div class="container" data-v-2715fdfa><div class="section-header" data-v-2715fdfa><span class="section-tag" data-v-2715fdfa>Agendamento</span><h1 data-v-2715fdfa>Agende sua consulta</h1><p data-v-2715fdfa>Preencha o formul\xE1rio e retornaremos em at\xE9 24 horas. Cuidamos de pessoas. Potencializamos possibilidades.</p></div><div class="schedule-showcase" data-v-2715fdfa><form class="schedule-form" data-v-2715fdfa><div class="form-section" data-v-2715fdfa><h3 data-v-2715fdfa>Sobre voc\xEA</h3><div class="form-grid" data-v-2715fdfa><div class="form-group" data-v-2715fdfa><label class="form-label" for="parentName" data-v-2715fdfa>Seu nome *</label><input type="text" id="parentName" class="form-input"${ssrRenderAttr("value", form.value.parentName)} required placeholder="Seu nome completo" data-v-2715fdfa></div><div class="form-group" data-v-2715fdfa><label class="form-label" for="phone" data-v-2715fdfa>Telefone *</label><input type="tel" id="phone" class="form-input"${ssrRenderAttr("value", form.value.phone)} required placeholder="(12) 99999-9999" data-v-2715fdfa></div></div><div class="form-grid" data-v-2715fdfa><div class="form-group" data-v-2715fdfa><label class="form-label" for="email" data-v-2715fdfa>E-mail</label><input type="email" id="email" class="form-input"${ssrRenderAttr("value", form.value.email)} placeholder="seu@email.com" data-v-2715fdfa></div><div class="form-group" data-v-2715fdfa><label class="form-label" for="childName" data-v-2715fdfa>Nome da crian\xE7a ou adolescente</label><input type="text" id="childName" class="form-input"${ssrRenderAttr("value", form.value.childName)} placeholder="Nome da crian\xE7a ou adolescente" data-v-2715fdfa></div></div><div class="form-group" data-v-2715fdfa><label class="form-label" data-v-2715fdfa>Idade da crian\xE7a ou adolescente</label><div class="age-selector" data-v-2715fdfa><button type="button" class="age-btn age-btn-minus"${ssrIncludeBooleanAttr(!canDecrement.value) ? " disabled" : ""} data-v-2715fdfa><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" data-v-2715fdfa><line x1="5" y1="12" x2="19" y2="12" data-v-2715fdfa></line></svg></button><div class="age-display" data-v-2715fdfa><span class="age-value" data-v-2715fdfa>${ssrInterpolate(ageDisplay.value)}</span></div><button type="button" class="age-btn age-btn-plus"${ssrIncludeBooleanAttr(!canIncrement.value) ? " disabled" : ""} data-v-2715fdfa><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" data-v-2715fdfa><line x1="12" y1="5" x2="12" y2="19" data-v-2715fdfa></line><line x1="5" y1="12" x2="19" y2="12" data-v-2715fdfa></line></svg></button></div></div></div><div class="form-section" data-v-2715fdfa><h3 data-v-2715fdfa>Contexto e expectativas</h3><div class="form-group" data-v-2715fdfa><label class="form-label" for="message" data-v-2715fdfa>Observa\xE7\xF5es</label><textarea id="message" class="form-textarea" placeholder="Conte-nos mais sobre sua demanda..." rows="4" data-v-2715fdfa>${ssrInterpolate(form.value.message)}</textarea></div></div><div class="form-privacy" data-v-2715fdfa><label class="checkbox-label" data-v-2715fdfa><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.privacy) ? ssrLooseContain(form.value.privacy, null) : form.value.privacy) ? " checked" : ""} required data-v-2715fdfa><span data-v-2715fdfa>Aceito a `);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/privacidade" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pol\xEDtica de Privacidade`);
          } else {
            return [
              createTextVNode("Pol\xEDtica de Privacidade")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></label></div><button type="submit" class="btn btn-primary btn-lg btn-submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-2715fdfa>${ssrInterpolate(isSubmitting.value ? "Enviando..." : "Enviar Solicita\xE7\xE3o")}</button></form><div class="schedule-info" data-v-2715fdfa><div class="info-block how-it-works" data-v-2715fdfa><div class="block-header" data-v-2715fdfa><div class="block-icon" data-v-2715fdfa></div><h3 data-v-2715fdfa>Como funciona?</h3></div><ol class="steps-list" data-v-2715fdfa><li data-v-2715fdfa><span class="step-num" data-v-2715fdfa>1</span> Preencha o formul\xE1rio</li><li data-v-2715fdfa><span class="step-num" data-v-2715fdfa>2</span> Entraremos em contato em at\xE9 24h</li><li data-v-2715fdfa><span class="step-num" data-v-2715fdfa>3</span> Agendamos a avalia\xE7\xE3o</li><li data-v-2715fdfa><span class="step-num" data-v-2715fdfa>4</span> Iniciamos o tratamento</li></ol></div><div class="info-block contact-quick" data-v-2715fdfa><div class="block-header" data-v-2715fdfa><div class="block-icon whatsapp" data-v-2715fdfa></div><h3 data-v-2715fdfa>Prefere WhatsApp?</h3></div><p data-v-2715fdfa>Fale conosco diretamente para d\xFAvidas r\xE1pidas.</p><a${ssrRenderAttr("href", whatsappLink.value)} class="btn btn-whatsapp" target="_blank" data-v-2715fdfa> Chamar no WhatsApp </a></div><div class="info-block hours-block" data-v-2715fdfa><div class="block-header" data-v-2715fdfa><div class="block-icon time" data-v-2715fdfa></div><h3 data-v-2715fdfa>Hor\xE1rio de Atendimento</h3></div><div class="hours-info" data-v-2715fdfa><p class="days" data-v-2715fdfa>Segunda a Sexta</p><p class="hours" data-v-2715fdfa>8h \xE0s 18h</p></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const agendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2715fdfa"]]);

export { agendar as default };
//# sourceMappingURL=agendar-IJmvvQft.mjs.map
