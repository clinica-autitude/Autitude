import { mergeProps, unref, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, c as useRoute, u as useHead } from './server.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue-bundle-renderer@2.2.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/node-mock-http@1.0.4/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/pathe@2.0.3/node_modules/pathe/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unhead@2.1.15/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/devalue@5.8.1/node_modules/devalue/index.js';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unhead@2.1.15/node_modules/unhead/dist/utils.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unhead@2.1.15/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue-router@5.1.0_@vue+compiler-sfc@3.5.35_vite@7.3.5_@types+node@25.9.1_jiti@2.7.0_terser@5.48.0_yaml@2.9.0__vue@3.5.35/node_modules/vue-router/vue-router.node.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/lucide-vue-next@1.0.0_vue@3.5.35/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = Array.isArray(route.params.slug) ? route.params.slug.join("/") : route.params.slug;
    const seoContent = {
      "terapia-ocupacional-infantil": {
        title: "Terapia Ocupacional Infantil - Autitude",
        description: "Descubra como a terapia ocupacional infantil pode ajudar no desenvolvimento da crian\xE7a. Atendimento especializado em Pindamonhangaba-SP.",
        keywords: "terapia ocupacional infantil, integra\xE7\xE3o sensorial, desenvolvimento infantil"
      },
      "integracao-sensorial": {
        title: "Integra\xE7\xE3o Sensorial - Autitude",
        description: "Entenda a integra\xE7\xE3o sensorial e como ela afeta o desenvolvimento. Atendimento especializado com certifica\xE7\xE3o internacional pela University of Southern California (USC).",
        keywords: "integra\xE7\xE3o sensorial, sensory integration, regula\xE7\xE3o sensorial"
      },
      "neuropsicologia-infantil": {
        title: "Neuropsicologia Infantil - Autitude",
        description: "A neuropsicologia infantil investiga o desenvolvimento cognitivo, emocional e comportamental da crian\xE7a.",
        keywords: "neuropsicologia infantil, avalia\xE7\xE3o neuropsicol\xF3gica, desenvolvimento infantil"
      },
      "neuropsicopedagogia": {
        title: "Neuropsicopedagogia - Autitude",
        description: "Apoio especializado para crian\xE7as e adolescentes com dificuldades de aprendizagem.",
        keywords: "neuropsicopedagogia, dificuldades de aprendizagem, aprendizagem"
      },
      "fonoaudiologia-infantil": {
        title: "Fonoaudiologia Infantil - Autitude",
        description: "Atendimento fonoaudiol\xF3gico especializado em linguagem, comunica\xE7\xE3o e neurodiverg\xEAncia.",
        keywords: "fonoaudiologia infantil, linguagem, comunica\xE7\xE3o, neurodiverg\xEAncia"
      },
      "autismo-terapia": {
        title: "Terapia para Autismo - Autitude",
        description: "Cuidado integrado e humanizado para crian\xE7as e adolescentes no espectro autista.",
        keywords: "autismo, TEA, autismo infantil, cuidado humanizado"
      },
      "tdah-tratamento": {
        title: "Acompanhamento para TDAH - Autitude",
        description: "Cuidado especializado para crian\xE7as e adolescentes com TDAH, com foco em regula\xE7\xE3o, aprendizagem e bem-estar.",
        keywords: "TDAH, ADHD, aten\xE7\xE3o, hiperatividade"
      },
      "blog": {
        title: "Blog - Autitude",
        description: "Conte\xFAdos sobre desenvolvimento infantil, neurodiverg\xEAncia e cuidado integrado para fam\xEDlias.",
        keywords: "blog, artigos, desenvolvimento infantil, neurodiverg\xEAncia"
      }
    };
    const content = seoContent[slug] || {
      title: "Autitude - Desenvolvimento e A\xE7\xE3o Humana",
      description: "Espa\xE7o especializado em crian\xE7as, adolescentes e fam\xEDlias, com foco no p\xFAblico neurodivergente. Pindamonhangaba-SP.",
      keywords: "autitude, neurodiverg\xEAncia, Pindamonhangaba, desenvolvimento infantil"
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "seo-redirect-page" }, _attrs))} data-v-ec94603d><h1 data-v-ec94603d>${ssrInterpolate(unref(content).title)}</h1><p data-v-ec94603d>${ssrInterpolate(unref(content).description)}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ec94603d"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Bhi2UG3o.mjs.map
