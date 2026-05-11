import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/ubuntu/Autitude/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "404 - P\xE1gina N\xE3o Encontrada | Autitude",
      meta: [
        { name: "description", content: "P\xE1gina n\xE3o encontrada. Volte para a p\xE1gina inicial." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-page" }, _attrs))} data-v-00a421fe><div class="container" data-v-00a421fe><div class="error-content" data-v-00a421fe><div class="error-visual" data-v-00a421fe><span class="error-code" data-v-00a421fe>404</span></div><h1 data-v-00a421fe>P\xE1gina N\xE3o Encontrada</h1><p data-v-00a421fe>Desculpe, a p\xE1gina que voc\xEA est\xE1 procurando n\xE3o existe ou foi movida.</p><div class="error-actions" data-v-00a421fe>`);
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
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00a421fe"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-BJ-iYomJ.mjs.map
