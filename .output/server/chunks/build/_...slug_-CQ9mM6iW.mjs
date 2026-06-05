import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "P\xE1gina n\xE3o encontrada | Autitude - Desenvolvimento e A\xE7\xE3o Humana",
      meta: [
        { name: "description", content: "P\xE1gina n\xE3o encontrada. Volte para a p\xE1gina inicial da Autitude." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-page" }, _attrs))} data-v-8f7c137b><div class="container" data-v-8f7c137b><div class="error-content" data-v-8f7c137b><div class="error-visual" data-v-8f7c137b><span class="error-code" data-v-8f7c137b>404</span></div><h1 data-v-8f7c137b>P\xE1gina n\xE3o encontrada</h1><p data-v-8f7c137b>Desculpe, a p\xE1gina que voc\xEA procura n\xE3o existe ou foi movida. Vamos voltar para cuidar de voc\xEA.</p><div class="error-actions" data-v-8f7c137b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn btn-primary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voltar ao In\xEDcio `);
          } else {
            return [
              createTextVNode(" Voltar ao In\xEDcio ")
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
            _push2(` Fale Conosco `);
          } else {
            return [
              createTextVNode(" Fale Conosco ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f7c137b"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-CQ9mM6iW.mjs.map
