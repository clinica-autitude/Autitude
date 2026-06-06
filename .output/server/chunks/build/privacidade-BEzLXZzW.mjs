import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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
import 'lucide-vue-next';

const _sfc_main = {
  __name: "privacidade",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Pol\xEDtica de Privacidade | Autitude - Desenvolvimento e A\xE7\xE3o Humana",
      meta: [
        { name: "description", content: "Pol\xEDtica de Privacidade da Autitude - Desenvolvimento e A\xE7\xE3o Humana." }
      ]
    });
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "privacy" }, _attrs))} data-v-56437218><section class="section hero-section" data-v-56437218><div class="container" data-v-56437218><div class="section-header" data-v-56437218><h1 data-v-56437218>Pol\xEDtica de Privacidade</h1><p data-v-56437218>\xDAltima atualiza\xE7\xE3o: ${ssrInterpolate(unref(currentYear))}</p></div><div class="privacy-content" data-v-56437218><article class="privacy-card" data-v-56437218><h2 data-v-56437218>1. Coleta de Informa\xE7\xF5es</h2><p data-v-56437218> A Autitude coleta informa\xE7\xF5es pessoais fornecidas por voc\xEA atrav\xE9s dos formul\xE1rios de contato e agendamento, incluindo: nome, telefone, e-mail e informa\xE7\xF5es sobre a crian\xE7a ou adolescente. </p></article><article class="privacy-card" data-v-56437218><h2 data-v-56437218>2. Uso das Informa\xE7\xF5es</h2><p data-v-56437218>As informa\xE7\xF5es coletadas s\xE3o utilizadas exclusivamente para:</p><ul data-v-56437218><li data-v-56437218>Contato para agendamento de consultas</li><li data-v-56437218>Comunica\xE7\xE3o sobre servi\xE7os e hor\xE1rios</li><li data-v-56437218>Melhoria dos nossos servi\xE7os</li></ul></article><article class="privacy-card" data-v-56437218><h2 data-v-56437218>3. Prote\xE7\xE3o de Dados</h2><p data-v-56437218> Implementamos medidas de seguran\xE7a adequadas para proteger suas informa\xE7\xF5es pessoais contra acesso n\xE3o autorizado, altera\xE7\xE3o ou divulga\xE7\xE3o. </p></article><article class="privacy-card" data-v-56437218><h2 data-v-56437218>4. Compartilhamento</h2><p data-v-56437218> N\xE3o compartilhamos suas informa\xE7\xF5es pessoais com terceiros, exceto quando necess\xE1rio para o cumprimento de obriga\xE7\xF5es legais ou presta\xE7\xE3o de servi\xE7os em nosso nome. </p></article><article class="privacy-card" data-v-56437218><h2 data-v-56437218>5. Seus Direitos</h2><p data-v-56437218> Voc\xEA tem o direito de acessar, corrigir ou excluir suas informa\xE7\xF5es pessoais. Para exercer esses direitos, entre em contato conosco. </p></article><article class="privacy-card" data-v-56437218><h2 data-v-56437218>6. Contato</h2><p data-v-56437218> Para quest\xF5es sobre esta pol\xEDtica de privacidade, entre em contato conosco atrav\xE9s do e-mail contato@autitude.com.br ou pelo WhatsApp. </p></article></div><div class="text-center mt-8" data-v-56437218><p style="${ssrRenderStyle({ "color": "var(--text-secondary)", "margin-bottom": "1rem" })}" data-v-56437218>\u{1F49C} Cuidamos de pessoas. Potencializamos possibilidades.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Agendar Consulta `);
          } else {
            return [
              createTextVNode(" Agendar Consulta ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacidade.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacidade = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-56437218"]]);

export { privacidade as default };
//# sourceMappingURL=privacidade-BEzLXZzW.mjs.map
