import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain } from 'file:///home/ubuntu/Autitude/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './DotGrid-BqVIY_Uo.mjs';
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
import 'file:///home/ubuntu/Autitude/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';

const pediatricLimit = 18;
const _sfc_main = {
  __name: "agendar",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Agendar | Autitude - Agende sua Consulta",
      meta: [
        { name: "description", content: "Agende uma avalia\xE7\xE3o na Autitude. Preencha o formul\xE1rio e retornaremos em at\xE9 24 horas." }
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
      const text = encodeURIComponent("Ol\xE1! Gostaria de agendar uma avalia\xE7\xE3o.");
      return `${config.whatsappUrl}?text=${text}`;
    });
    const canIncrement = computed(() => form.value.childAge < pediatricLimit);
    const canDecrement = computed(() => form.value.childAge > 0);
    const ageDisplay = computed(() => form.value.childAge === pediatricLimit ? "18+" : form.value.childAge);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "schedule" }, _attrs))} data-v-0dd5c347><section class="hero-section" data-v-0dd5c347><div class="hero-bg-grid" data-v-0dd5c347>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        "dot-size": 14,
        gap: 28,
        "base-color": "#CDBFF0",
        "active-color": "#7B5CBF",
        proximity: 120,
        "speed-trigger": 80,
        "shock-radius": 200,
        "shock-strength": 4,
        "max-speed": 5e3,
        resistance: 750,
        "return-duration": 1.5
      }, null, _parent));
      _push(`</div><div class="container" data-v-0dd5c347><div class="section-header" data-v-0dd5c347><span class="section-tag" data-v-0dd5c347>Agendamento</span><h1 data-v-0dd5c347>Agende sua consulta</h1><p data-v-0dd5c347>Preencha o formul\xE1rio e retornaremos em at\xE9 24 horas.</p></div><div class="schedule-showcase" data-v-0dd5c347><form class="schedule-form" data-v-0dd5c347><div class="form-section" data-v-0dd5c347><h3 data-v-0dd5c347>Dados do Respons\xE1vel</h3><div class="form-grid" data-v-0dd5c347><div class="form-group" data-v-0dd5c347><label class="form-label" for="parentName" data-v-0dd5c347>Nome do Respons\xE1vel *</label><input type="text" id="parentName" class="form-input"${ssrRenderAttr("value", form.value.parentName)} required placeholder="Seu nome completo" data-v-0dd5c347></div><div class="form-group" data-v-0dd5c347><label class="form-label" for="phone" data-v-0dd5c347>Telefone *</label><input type="tel" id="phone" class="form-input"${ssrRenderAttr("value", form.value.phone)} required placeholder="(12) 99999-9999" data-v-0dd5c347></div></div><div class="form-grid" data-v-0dd5c347><div class="form-group" data-v-0dd5c347><label class="form-label" for="email" data-v-0dd5c347>E-mail</label><input type="email" id="email" class="form-input"${ssrRenderAttr("value", form.value.email)} placeholder="seu@email.com" data-v-0dd5c347></div><div class="form-group" data-v-0dd5c347><label class="form-label" for="childName" data-v-0dd5c347>Nome da Crian\xE7a</label><input type="text" id="childName" class="form-input"${ssrRenderAttr("value", form.value.childName)} placeholder="Nome da crian\xE7a" data-v-0dd5c347></div></div><div class="form-group" data-v-0dd5c347><label class="form-label" data-v-0dd5c347>Idade da Crian\xE7a</label><div class="age-selector" data-v-0dd5c347><button type="button" class="age-btn age-btn-minus"${ssrIncludeBooleanAttr(!canDecrement.value) ? " disabled" : ""} data-v-0dd5c347><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" data-v-0dd5c347><line x1="5" y1="12" x2="19" y2="12" data-v-0dd5c347></line></svg></button><div class="age-display" data-v-0dd5c347><span class="age-value" data-v-0dd5c347>${ssrInterpolate(ageDisplay.value)}</span></div><button type="button" class="age-btn age-btn-plus"${ssrIncludeBooleanAttr(!canIncrement.value) ? " disabled" : ""} data-v-0dd5c347><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" data-v-0dd5c347><line x1="12" y1="5" x2="12" y2="19" data-v-0dd5c347></line><line x1="5" y1="12" x2="19" y2="12" data-v-0dd5c347></line></svg></button></div></div></div><div class="form-section" data-v-0dd5c347><h3 data-v-0dd5c347>Informa\xE7\xF5es Adicionais</h3><div class="form-group" data-v-0dd5c347><label class="form-label" for="message" data-v-0dd5c347>Observa\xE7\xF5es</label><textarea id="message" class="form-textarea" placeholder="Conte-nos mais sobre sua demanda..." rows="4" data-v-0dd5c347>${ssrInterpolate(form.value.message)}</textarea></div></div><div class="form-privacy" data-v-0dd5c347><label class="checkbox-label" data-v-0dd5c347><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(form.value.privacy) ? ssrLooseContain(form.value.privacy, null) : form.value.privacy) ? " checked" : ""} required data-v-0dd5c347><span data-v-0dd5c347>Aceito a `);
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
      _push(`</span></label></div><button type="submit" class="btn btn-primary btn-lg btn-submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} data-v-0dd5c347>${ssrInterpolate(isSubmitting.value ? "Enviando..." : "Enviar Solicita\xE7\xE3o")}</button></form><div class="schedule-info" data-v-0dd5c347><div class="info-block how-it-works" data-v-0dd5c347><div class="block-header" data-v-0dd5c347><div class="block-icon" data-v-0dd5c347></div><h3 data-v-0dd5c347>Como funciona?</h3></div><ol class="steps-list" data-v-0dd5c347><li data-v-0dd5c347><span class="step-num" data-v-0dd5c347>1</span> Preencha o formul\xE1rio</li><li data-v-0dd5c347><span class="step-num" data-v-0dd5c347>2</span> Entraremos em contato em at\xE9 24h</li><li data-v-0dd5c347><span class="step-num" data-v-0dd5c347>3</span> Agendamos a avalia\xE7\xE3o</li><li data-v-0dd5c347><span class="step-num" data-v-0dd5c347>4</span> Iniciamos o tratamento</li></ol></div><div class="info-block contact-quick" data-v-0dd5c347><div class="block-header" data-v-0dd5c347><div class="block-icon whatsapp" data-v-0dd5c347></div><h3 data-v-0dd5c347>Prefere WhatsApp?</h3></div><p data-v-0dd5c347>Fale conosco diretamente para d\xFAvidas r\xE1pidas.</p><a${ssrRenderAttr("href", whatsappLink.value)} class="btn btn-whatsapp" target="_blank" data-v-0dd5c347> Chamar no WhatsApp </a></div><div class="info-block hours-block" data-v-0dd5c347><div class="block-header" data-v-0dd5c347><div class="block-icon time" data-v-0dd5c347></div><h3 data-v-0dd5c347>Hor\xE1rio de Atendimento</h3></div><div class="hours-info" data-v-0dd5c347><p class="days" data-v-0dd5c347>Segunda a Sexta</p><p class="hours" data-v-0dd5c347>8h \xE0s 18h</p></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/agendar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const agendar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0dd5c347"]]);

export { agendar as default };
//# sourceMappingURL=agendar-CSOBjuan.mjs.map
