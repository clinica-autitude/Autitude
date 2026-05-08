import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
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
      const text = encodeURIComponent("Ol\xE1! Gostaria de agendar uma avalia\xE7\xE3o.");
      return `${config.whatsappUrl}?text=${text}`;
    });
    const canIncrement = computed(() => form.value.childAge < pediatricLimit);
    const canDecrement = computed(() => form.value.childAge > 0);
    const ageDisplay = computed(() => form.value.childAge === pediatricLimit ? "18+" : form.value.childAge);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "schedule" }, _attrs))} data-v-0221cf4c><section class="hero-section" data-v-0221cf4c><div class="container" data-v-0221cf4c><div class="section-header" data-v-0221cf4c><span class="section-tag" data-v-0221cf4c>Agendamento</span><h1 data-v-0221cf4c>Agende sua consulta</h1><p data-v-0221cf4c>Preencha o formul\xE1rio e retornaremos em at\xE9 24 horas.</p></div><div class="schedule-showcase" data-v-0221cf4c><form class="schedule-form" data-v-0221cf4c><div class="form-section" data-v-0221cf4c><h3 data-v-0221cf4c>Dados do Respons\xE1vel</h3><div class="form-grid" data-v-0221cf4c><div class="form-group" data-v-0221cf4c><label class="form-label" for="parentName" data-v-0221cf4c>Nome do Respons\xE1vel *</label><input type="text" id="parentName" class="form-input"${ssrRenderAttr("value", form.value.parentName)} required placeholder="Seu nome completo" data-v-0221cf4c></div><div class="form-group" data-v-0221cf4c><label class="form-label" for="phone" data-v-0221cf4c>Telefone *</label><input type="tel" id="phone" class="form-input"${ssrRenderAttr("value", form.value.phone)} required placeholder="(12) 99999-9999" data-v-0221cf4c></div></div><div class="form-grid" data-v-0221cf4c><div class="form-group" data-v-0221cf4c><label class="form-label" for="email" data-v-0221cf4c>E-mail</label><input type="email" id="email" class="form-input"${ssrRenderAttr("value", form.value.email)} placeholder="seu@email.com" data-v-0221cf4c></div><div class="form-group" data-v-0221cf4c><label class="form-label" for="childName" data-v-0221cf4c>Nome da Crian\xE7a</label><input type="text" id="childName" class="form-input"${ssrRenderAttr("value", form.value.childName)} placeholder="Nome da crian\xE7a" data-v-0221cf4c></div></div><div class="form-group" data-v-0221cf4c><label class="form-label" data-v-0221cf4c>Idade da Crian\xE7a</label><div class="age-selector" data-v-0221cf4c><button type="button" class="age-btn age-btn-minus"${ssrIncludeBooleanAttr(!canDecrement.value) ? " disabled" : ""} data-v-0221cf4c><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" data-v-0221cf4c><line x1="5" y1="12" x2="19" y2="12" data-v-0221cf4c></line></svg></button><div class="age-display" data-v-0221cf4c><span class="age-value" data-v-0221cf4c>${ssrInterpolate(ageDisplay.value)}</span></div><button type="button" class="age-btn age-btn-plus"${ssrIncludeBooleanAttr(!canIncrement.value) ? " disabled" : ""} data-v-0221cf4c><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" data-v-0221cf4c><line x1="12" y1="5" x2="12" y2="19" data-v-0221cf4c></line><line x1="5" y1="12" x2="19" y2="12" data-v-0221cf4c></line></svg></button></div></div></div><div class="form-section" data-v-0221cf4c><h3 data-v-0221cf4c>Informa\xE7\xF5es Adicionais</h3><div class="form-group" data-v-0221cf4c><label class="form-label" for="message" data-v-0221cf4c>Observa\xE7\xF5es</label><textarea id="message" class="form-textarea" placeholder="Conte-nos mais sobre sua demanda..." rows="4" data-v-0221cf4c>${ssrInterpolate(form.value.message)}</textarea></div></div><div class="form-privacy" data-v-0221cf4c><label class="checkbox-label" data-v-0221cf4c><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.privacy) ? ssrLooseContain(form.value.privacy, null) : form.value.privacy) ? " checked" : ""} required data-v-0221cf4c><span data-v-0221cf4c>Aceito a `);
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
      _push(`</span></label></div><button type="submit" class="btn btn-primary btn-lg btn-submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-0221cf4c>${ssrInterpolate(isSubmitting.value ? "Enviando..." : "Enviar Solicita\xE7\xE3o")}</button></form><div class="schedule-info" data-v-0221cf4c><div class="info-block how-it-works" data-v-0221cf4c><div class="block-header" data-v-0221cf4c><div class="block-icon" data-v-0221cf4c></div><h3 data-v-0221cf4c>Como funciona?</h3></div><ol class="steps-list" data-v-0221cf4c><li data-v-0221cf4c><span class="step-num" data-v-0221cf4c>1</span> Preencha o formul\xE1rio</li><li data-v-0221cf4c><span class="step-num" data-v-0221cf4c>2</span> Entraremos em contato em at\xE9 24h</li><li data-v-0221cf4c><span class="step-num" data-v-0221cf4c>3</span> Agendamos a avalia\xE7\xE3o</li><li data-v-0221cf4c><span class="step-num" data-v-0221cf4c>4</span> Iniciamos o tratamento</li></ol></div><div class="info-block contact-quick" data-v-0221cf4c><div class="block-header" data-v-0221cf4c><div class="block-icon whatsapp" data-v-0221cf4c></div><h3 data-v-0221cf4c>Prefere WhatsApp?</h3></div><p data-v-0221cf4c>Fale conosco diretamente para d\xFAvidas r\xE1pidas.</p><a${ssrRenderAttr("href", whatsappLink.value)} class="btn btn-whatsapp" target="_blank" data-v-0221cf4c> Chamar no WhatsApp </a></div><div class="info-block hours-block" data-v-0221cf4c><div class="block-header" data-v-0221cf4c><div class="block-icon time" data-v-0221cf4c></div><h3 data-v-0221cf4c>Hor\xE1rio de Atendimento</h3></div><div class="hours-info" data-v-0221cf4c><p class="days" data-v-0221cf4c>Segunda a Sexta</p><p class="hours" data-v-0221cf4c>8h \xE0s 18h</p></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const agendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0221cf4c"]]);

export { agendar as default };
//# sourceMappingURL=agendar-B1xmCO8c.mjs.map
