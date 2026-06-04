import { _ as _export_sfc, u as useHead, a as __nuxt_component_0 } from './server.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './ColorBends-DzA-kp_2.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue-bundle-renderer@2.2.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/h3@1.15.11/node_modules/h3/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/ufo@1.6.4/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/destr@2.0.5/node_modules/destr/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/ofetch@1.5.1/node_modules/ofetch/dist/node.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/node-mock-http@1.0.4/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unstorage@1.17.5_db0@0.3.4_ioredis@5.11.0/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/ohash@2.0.11/node_modules/ohash/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/defu/dist/defu.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unctx@2.5.0/node_modules/unctx/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/ubuntu/Autitude/node_modules/pathe/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/h3/dist/index.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unhead@2.1.15/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/devalue@5.8.1/node_modules/devalue/index.js';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/unhead@2.1.15/node_modules/unhead/dist/utils.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue-router@5.1.0_@vue+compiler-sfc@3.5.35_vite@7.3.5_@types+node@25.9.1_jiti@2.7.0_terser@5.48.0_yaml@2.9.0__vue@3.5.35/node_modules/vue-router/vue-router.node.mjs';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/lucide-vue-next@1.0.0_vue@3.5.35/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import 'file:///home/ubuntu/Autitude/node_modules/.pnpm/three@0.184.0/node_modules/three/build/three.module.js';

const _sfc_main = {
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "FAQ | Autitude - Desenvolvimento e A\xE7\xE3o Humana",
      meta: [
        { name: "description", content: "Perguntas frequentes sobre o atendimento da Autitude: neuropsicologia, neuropsicopedagogia, fonoaudiologia, terapia ocupacional e integra\xE7\xE3o sensorial." }
      ]
    });
    const config = {
      whatsappUrl: "https://wa.me/5512991968683"
    };
    const activeCategory = ref("all");
    const openFaq = ref(null);
    const categories = [
      { id: "all", name: "Todas" },
      { id: "general", name: "Geral" },
      { id: "neuro", name: "Neurodiverg\xEAncia" },
      { id: "therapy", name: "Especialidades" },
      { id: "schedule", name: "Agendamento" }
    ];
    const faqs = [
      {
        category: "general",
        question: "O que \xE9 a Autitude?",
        answer: "A Autitude \xE9 um espa\xE7o especializado no atendimento de crian\xE7as, adolescentes e suas fam\xEDlias, com foco no p\xFAblico neurodivergente. Nossa abordagem \xE9 humanizada, integrativa e baseada em evid\xEAncias cient\xEDficas, articulando diferentes especialidades em torno de cada pessoa."
      },
      {
        category: "general",
        question: "Quais especialidades voc\xEAs oferecem?",
        answer: "Trabalhamos com Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia e Terapia Ocupacional \u2014 especialidades que se articulam em torno de cada pessoa e de sua fam\xEDlia. A Terapia Ocupacional conta com certifica\xE7\xE3o internacional em Integra\xE7\xE3o Sensorial."
      },
      {
        category: "general",
        question: "A partir de qual idade voc\xEAs atendem?",
        answer: "Atendemos crian\xE7as, adolescentes e suas fam\xEDlias. O cuidado pode come\xE7ar mesmo nos primeiros anos de vida, favorecendo o desenvolvimento desde cedo."
      },
      {
        category: "general",
        question: "Quanto tempo dura cada sess\xE3o?",
        answer: "As sess\xF5es t\xEAm dura\xE7\xE3o de 45 a 60 minutos, de acordo com a necessidade e o tipo de interven\xE7\xE3o. Avalia\xE7\xF5es iniciais costumam ser mais longas para uma escuta e investiga\xE7\xE3o completas."
      },
      {
        category: "general",
        question: "A fam\xEDlia participa do processo?",
        answer: "Sim. Acreditamos que a fam\xEDlia \xE9 parte essencial do cuidado. Por isso, oferecemos orienta\xE7\xF5es e conduzimos o trabalho em parceria, para que as conquistas possam acontecer tamb\xE9m no cotidiano."
      },
      {
        category: "neuro",
        question: "O que \xE9 neurodiverg\xEAncia?",
        answer: "Neurodiverg\xEAncia \xE9 um conceito que reconhece varia\xE7\xF5es no funcionamento do c\xE9rebro humano, como o Transtorno do Espectro Autista (TEA), o TDAH, a dislexia, entre outras. Cada pessoa neurodivergente tem um perfil \xFAnico, com pot\xEAncias e desafios pr\xF3prios."
      },
      {
        category: "neuro",
        question: "Como sei se meu filho precisa de avalia\xE7\xE3o?",
        answer: "Se voc\xEA percebe desafios na comunica\xE7\xE3o, na aprendizagem, no comportamento, na regula\xE7\xE3o emocional ou na intera\xE7\xE3o social, uma avalia\xE7\xE3o especializada pode ajudar a compreender o perfil e construir um plano de cuidado individualizado."
      },
      {
        category: "neuro",
        question: "O que \xE9 Integra\xE7\xE3o Sensorial?",
        answer: "Integra\xE7\xE3o Sensorial \xE9 uma abordagem terap\xEAutica desenvolvida pela Dra. Jean Ayres que trabalha o processamento das informa\xE7\xF5es sensoriais pelo c\xE9rebro, ajudando crian\xE7as e adolescentes a se organizarem melhor em rela\xE7\xE3o aos est\xEDmulos do cotidiano."
      },
      {
        category: "neuro",
        question: "Quais s\xE3o os sinais de desregula\xE7\xE3o sensorial?",
        answer: "Alguns sinais incluem: rejei\xE7\xE3o a texturas de roupas ou alimentos, rea\xE7\xE3o intensa a barulhos, dificuldade em transi\xE7\xF5es, quedas frequentes, busca excessiva de movimento ou, ao contr\xE1rio, medo de se movimentar, dificuldade de concentra\xE7\xE3o e seletividade alimentar."
      },
      {
        category: "therapy",
        question: "O que faz a Neuropsicologia?",
        answer: "A Neuropsicologia investiga o funcionamento cognitivo, emocional e comportamental, realiza avalia\xE7\xF5es neuropsicol\xF3gicas e rastreamento de neurodiverg\xEAncias, al\xE9m de oferecer orienta\xE7\xE3o e apoio \xE0s fam\xEDlias."
      },
      {
        category: "therapy",
        question: "O que faz a Neuropsicopedagogia?",
        answer: "A Neuropsicopedagogia identifica e acompanha dificuldades de aprendizagem, planeja e aplica planos pedag\xF3gicos individuais e apoia o desenvolvimento escolar, articulando neuroci\xEAncia e educa\xE7\xE3o."
      },
      {
        category: "therapy",
        question: "O que faz a Fonoaudiologia?",
        answer: "A Fonoaudiologia trabalha o desenvolvimento da linguagem, a comunica\xE7\xE3o social, a fala e a motricidade orofacial, com aten\xE7\xE3o especial ao atendimento de pessoas neurodivergentes."
      },
      {
        category: "therapy",
        question: "O que faz a Terapia Ocupacional?",
        answer: "A Terapia Ocupacional promove a autonomia, a socializa\xE7\xE3o, a independ\xEAncia funcional e o enfrentamento dos desafios do cotidiano, com certifica\xE7\xE3o internacional em Integra\xE7\xE3o Sensorial pela University of Southern California (USC, USA)."
      },
      {
        category: "schedule",
        question: "Como funciona o agendamento?",
        answer: "Voc\xEA pode entrar em contato pelo WhatsApp ou preencher o formul\xE1rio de agendamento em nosso site. Retornaremos em at\xE9 24 horas para entender suas necessidades e marcar a avalia\xE7\xE3o inicial."
      },
      {
        category: "schedule",
        question: "Quanto custa a avalia\xE7\xE3o?",
        answer: "A avalia\xE7\xE3o inicial tem investimento que pode variar conforme a especialidade e a extens\xE3o. Ap\xF3s a avalia\xE7\xE3o, apresentamos um plano de cuidado personalizado, com sess\xF5es e formas de pagamento adequadas a cada fam\xEDlia."
      },
      {
        category: "schedule",
        question: "Voc\xEAs atendem por plano de sa\xFAde?",
        answer: "Trabalhamos com alguns planos de sa\xFAde e tamb\xE9m com op\xE7\xF5es particulares, incluindo pacotes. Entre em contato para verificarmos o seu plano."
      },
      {
        category: "schedule",
        question: "Onde voc\xEAs est\xE3o localizados?",
        answer: "Estamos na Rua Major Jos\xE9 dos Santos Moreira, 328 \u2014 Vila Rica, Pindamonhangaba-SP. O atendimento \xE9 presencial, com agendamento pr\xE9vio, e tamb\xE9m oferecemos orienta\xE7\xF5es online para fam\xEDlias de outras regi\xF5es."
      }
    ];
    const filteredFaqs = computed(() => {
      if (activeCategory.value === "all") return faqs;
      return faqs.filter((faq2) => faq2.category === activeCategory.value);
    });
    const approach = [
      { title: "Acolhimento", description: "Escuta atenta da hist\xF3ria e das necessidades de cada fam\xEDlia" },
      { title: "Avalia\xE7\xE3o", description: "Investiga\xE7\xE3o cuidadosa do perfil \xFAnico de cada pessoa" },
      { title: "Plano", description: "Constru\xE7\xE3o de um plano individualizado e baseado em evid\xEAncias" },
      { title: "Acompanhamento", description: "Cuidado cont\xEDnuo, com orienta\xE7\xE3o \xE0 fam\xEDlia e \xE0 rede de apoio" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq" }, _attrs))} data-v-78740fbf><section class="hero-section" data-v-78740fbf><div class="container" data-v-78740fbf><div class="section-title" data-v-78740fbf><span class="section-tag" data-v-78740fbf>Perguntas frequentes</span><h2 data-v-78740fbf>O que voc\xEA precisa saber</h2><p data-v-78740fbf>Tire suas d\xFAvidas sobre o cuidado que oferecemos na Autitude.</p></div><div class="faq-categories" data-v-78740fbf><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<button class="${ssrRenderClass([{ active: activeCategory.value === category.id }, "category-btn"])}" data-v-78740fbf>${ssrInterpolate(category.name)}</button>`);
      });
      _push(`<!--]--></div><div class="faq-list" data-v-78740fbf><!--[-->`);
      ssrRenderList(filteredFaqs.value, (faq2, index) => {
        _push(`<div class="${ssrRenderClass([{ open: openFaq.value === index }, "faq-item"])}" data-v-78740fbf><div class="faq-question" data-v-78740fbf><span class="faq-number" data-v-78740fbf>${ssrInterpolate(index + 1)}</span><h3 data-v-78740fbf>${ssrInterpolate(faq2.question)}</h3><div class="faq-toggle" data-v-78740fbf><span data-v-78740fbf></span></div></div><div class="faq-answer" style="${ssrRenderStyle(openFaq.value === index ? null : { display: "none" })}" data-v-78740fbf><p data-v-78740fbf>${ssrInterpolate(faq2.answer)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="sensory-section section" data-v-78740fbf><div class="container" data-v-78740fbf><div class="section-title" data-v-78740fbf><span class="section-tag" data-v-78740fbf>Especialidade</span><h2 data-v-78740fbf>O que \xE9 Integra\xE7\xE3o Sensorial?</h2></div><div class="sensory-showcase" data-v-78740fbf><div class="sensory-text" data-v-78740fbf><p data-v-78740fbf> A <strong data-v-78740fbf>Integra\xE7\xE3o Sensorial</strong> \xE9 uma abordagem terap\xEAutica desenvolvida pela Dra. Jean Ayres, fundamentada na ideia de que o processamento das informa\xE7\xF5es sensoriais \xE9 essencial para o desenvolvimento e o comportamento humano. </p><p data-v-78740fbf> Quando o c\xE9rebro processa as informa\xE7\xF5es sensoriais de forma desorganizada, a crian\xE7a ou o adolescente pode apresentar dificuldades em atividades cotidianas, comportamento desregulado e desafios na aprendizagem. </p><h3 data-v-78740fbf>Sistema sensorial</h3><p data-v-78740fbf> O sistema sensorial inclui 8 sentidos que trabalham juntos: tato, olfato, paladar, vis\xE3o, audi\xE7\xE3o, propriocep\xE7\xE3o (consci\xEAncia do corpo), vestibular (equil\xEDbrio e movimento) e interocep\xE7\xE3o. </p></div><div class="sensory-signs" data-v-78740fbf><h3 data-v-78740fbf>Sinais de regula\xE7\xE3o sensorial</h3><ul data-v-78740fbf><li data-v-78740fbf><strong data-v-78740fbf>Hiporreativo:</strong> busca est\xEDmulos intensos, parece n\xE3o perceber dor ou temperatura</li><li data-v-78740fbf><strong data-v-78740fbf>Hipersens\xEDvel:</strong> reage excessivamente a ru\xEDdos, texturas e luzes</li><li data-v-78740fbf><strong data-v-78740fbf>Desorganizado:</strong> dificuldade de concentra\xE7\xE3o e nas transi\xE7\xF5es</li><li data-v-78740fbf><strong data-v-78740fbf>Motor:</strong> coordena\xE7\xE3o ruim e quedas frequentes</li><li data-v-78740fbf><strong data-v-78740fbf>Alimentar:</strong> seletividade alimentar extrema</li><li data-v-78740fbf><strong data-v-78740fbf>Sonoro:</strong> tapar os ouvidos ou buscar barulhos de forma intensa</li></ul></div></div><div class="sensory-approach" data-v-78740fbf><h3 data-v-78740fbf>Como conduzimos o cuidado</h3><div class="approach-grid" data-v-78740fbf><!--[-->`);
      ssrRenderList(approach, (step) => {
        _push(`<div class="approach-step" data-v-78740fbf><div class="step-icon" data-v-78740fbf><div class="step-icon-inner" data-v-78740fbf></div></div><h4 data-v-78740fbf>${ssrInterpolate(step.title)}</h4><p data-v-78740fbf>${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="cta-section section" data-v-78740fbf><div class="container" data-v-78740fbf><div class="cta-card" data-v-78740fbf>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "cta-bg-effect",
        colors: ["#6B4FA3", "#8FC176", "#3D2D5E", "#5C9F45"],
        rotation: 40,
        speed: 0.18,
        scale: 1.25,
        frequency: 1.5,
        warpStrength: 1.1,
        mouseInfluence: 0.5,
        parallax: 0.4,
        noise: 0.06,
        transparent: ""
      }, null, _parent));
      _push(`<div class="cta-content" data-v-78740fbf><span class="cta-tag" data-v-78740fbf>Autitude \u2014 Desenvolvimento e A\xE7\xE3o Humana</span><h2 data-v-78740fbf>Ainda tem d\xFAvidas?</h2><p data-v-78740fbf>\u{1F49C} Cuidamos de pessoas. Potencializamos possibilidades.</p><div class="cta-buttons" data-v-78740fbf>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/agendar",
        class: "btn btn-primary btn-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Agendar Avalia\xE7\xE3o`);
          } else {
            return [
              createTextVNode("Agendar Avalia\xE7\xE3o")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a${ssrRenderAttr("href", config.whatsappUrl)} class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" data-v-78740fbf> Falar no WhatsApp </a></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78740fbf"]]);

export { faq as default };
//# sourceMappingURL=faq-DWlIYWDD.mjs.map
