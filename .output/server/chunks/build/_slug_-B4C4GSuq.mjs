import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, c as useRoute, u as useHead } from './server.mjs';
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
//# sourceMappingURL=_slug_-B4C4GSuq.mjs.map
