import { mergeProps, unref, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///home/ubuntu/Autitude/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, b as useRoute, u as useHead } from './server.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = Array.isArray(route.params.slug) ? route.params.slug.join("/") : route.params.slug;
    const seoContent = {
      "terapia-ocupacional-infantil": {
        title: "Terapia Ocupacional Infantil - Autitude",
        description: "Descubra como a terapia ocupacional infantil pode ajudar no desenvolvimento do seu filho. Tratamento especializado em Pindamonhangaba-SP.",
        keywords: "terapia ocupacional infantil, desenvolvimento infantil,\u513F\u79D1\u804C\u4E1A\u6CBB\u7597"
      },
      "integracao-sensorial": {
        title: "Integra\xE7\xE3o Sensorial - Autitude",
        description: "Entenda a integra\xE7\xE3o sensorial e como ela afeta o desenvolvimento da crian\xE7a. Tratamento especializado com certifica\xE7\xE3o internacional.",
        keywords: "integra\xE7\xE3o sensorial, sensory integration, tratamento sensorial"
      },
      "estimulacao-precoce": {
        title: "Estimula\xE7\xE3o Precoce - Autitude",
        description: "A estimula\xE7\xE3o precoce \xE9 essencial nos primeiros anos de vida. Veja como podemos ajudar no desenvolvimento do seu filho.",
        keywords: "estimula\xE7\xE3o precoce, early intervention, desenvolvimento infantil"
      },
      "autismo-terapia": {
        title: "Terapia para Autismo - Autitude",
        description: "Tratamento especializado para crian\xE7as no espectro autista. Abordagem humanizada e baseada em evid\xEAncias.",
        keywords: "autismo, TEA, autism therapy,\u513F\u79D1\u6CBB\u7597"
      },
      "tdah-tratamento": {
        title: "Tratamento para TDAH - Autitude",
        description: "Apoio terap\xEAutico para crian\xE7as com TDAH. Desenvolvimento de fokus e habilidades comportamentais.",
        keywords: "TDAH, ADHD, aten\xE7\xE3o, hiperatividade"
      },
      "blog": {
        title: "Blog - Autitude",
        description: "Artigos e informa\xE7\xF5es sobre terapia ocupacional e integra\xE7\xE3o sensorial para pais.",
        keywords: "blog, artigos, parenting, desenvolvimento infantil"
      }
    };
    const content = seoContent[slug] || {
      title: "Autitude - Cl\xEDnica de Terapia Ocupacional",
      description: "Cl\xEDnica especializada em terapia ocupacional e integra\xE7\xE3o sensorial em Pindamonhangaba-SP.",
      keywords: "terapia ocupacional, integra\xE7\xE3o sensorial, Pindamonhangaba"
    };
    useHead({
      title: content.title,
      meta: [
        { name: "description", content: content.description },
        { name: "keywords", content: content.keywords },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: content.title },
        { property: "og:description", content: content.description },
        { property: "og:type", content: "website" }
      ],
      link: [
        { rel: "canonical", href: "https://hautlys.github.io/Autitude" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "seo-redirect-page" }, _attrs))} data-v-54445813><h1 data-v-54445813>${ssrInterpolate(unref(content).title)}</h1><p data-v-54445813>${ssrInterpolate(unref(content).description)}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-54445813"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-fBy1IBe6.mjs.map
