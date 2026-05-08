import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const config = {
      whatsappUrl: "https://wa.me/5512991968683"
    };
    const activeCategory = ref("all");
    const openFaq = ref(null);
    const categories = [
      { id: "all", name: "Todas" },
      { id: "general", name: "Geral" },
      { id: "sensory", name: "Sensorial" },
      { id: "therapy", name: "Terapia" },
      { id: "schedule", name: "Agendamento" }
    ];
    const faqs = [
      {
        category: "general",
        question: "O que \xE9 Terapia Ocupacional pedi\xE1trica?",
        answer: "A Terapia Ocupacional pedi\xE1trica \xE9 uma especialidade que ajuda crian\xE7as a desenvolver habilidades necess\xE1rias para realizar as atividades cotidianas, brincas e escolares. O terapeuta ocupacional utiliza atividades significativas para promover independ\xEAncia, coordena\xE7\xE3o motora, integra\xE7\xE3o sensorial e participa\xE7\xE3o nas rotinas di\xE1rias."
      },
      {
        category: "general",
        question: "A partir de qual idade atende?",
        answer: "Atendemos crian\xE7as a partir de 0 anos, com foco especial na estimula\xE7\xE3o precoce nos primeiros anos de vida. Quanto mais cedo for identificada a necessidade de interven\xE7\xE3o, melhor para o desenvolvimento da crian\xE7a."
      },
      {
        category: "general",
        question: "Quanto tempo dura cada sess\xE3o?",
        answer: "As sess\xF5es t\xEAm dura\xE7\xE3o de 45 a 60 minutos, dependendo da necessidade da crian\xE7a e do tipo de interven\xE7\xE3o. Avalia\xE7\xF5es iniciais geralmente duram mais tempo para serem completas."
      },
      {
        category: "general",
        question: "Preciso estar presente durante a sess\xE3o?",
        answer: "Sim, a presen\xE7a do respons\xE1vel \xE9 fundamental durante as sess\xF5es, especialmente em crian\xE7as menores. Al\xE9m disso, a orienta\xE7\xE3o familiar \xE9 parte essencial do tratamento para garantir a generaliza\xE7\xE3o das habilidades aprendidas em casa."
      },
      {
        category: "sensory",
        question: "O que \xE9 Integra\xE7\xE3o Sensorial?",
        answer: "Integra\xE7\xE3o Sensorial \xE9 uma abordagem terap\xEAutica que trabalha o processamento das informa\xE7\xF5es sensoriais pelo c\xE9rebro. Desenvolvida pela Dra. Jean Ayres, ajuda crian\xE7as que t\xEAm dificuldade em processar est\xEDmulos sensoriais do ambiente de forma organizada."
      },
      {
        category: "sensory",
        question: "Quais s\xE3o os sinais de desregula\xE7\xE3o sensorial?",
        answer: "Os sinais incluem: rejei\xE7\xE3o a certas texturas de roupas ou alimentos, tapar os ouvidos com barulhos comuns, dificuldade em transi\xE7\xF5es entre atividades, quedas frequentes, busca excessiva de movimento ou, ao contr\xE1rio, medo de se mexer, dificuldade em se concentrar, rea\xE7\xF5es intensas a est\xEDmulos sensoriais."
      },
      {
        category: "sensory",
        question: "Como saber se meu filho precisa de terapia sensorial?",
        answer: "Se seu filho apresenta comportamentos que parecem incomuns para a idade, como dificuldade em se acalmar, seletividade alimentar extrema, rejei\xE7\xE3o a texturas, quedas frequentes, dificuldade com transi\xE7\xF5es ou escolar atrasadas, uma avalia\xE7\xE3o com terapeuta ocupacional pode ajudar a identificar necessidades sensoriais."
      },
      {
        category: "sensory",
        question: 'O que \xE9 a "Sala Sensorial" (Snoezelen)?',
        answer: "A Sala Sensorial \xE9 um ambiente controlado com est\xEDmulos visuais, t\xE1teis, sonoros e pr\xF3prioceptivos, desenhado para ajudar a crian\xE7a a processar informa\xE7\xF5es sensoriais de forma mais organizada. \xC9 um espa\xE7o seguro para explora\xE7\xE3o e regula\xE7\xE3o."
      },
      {
        category: "therapy",
        question: "Qual a diferen\xE7a entre Terapia Ocupacional e Fisioterapia?",
        answer: "A Terapia Ocupacional foca em habilidades funcionais para realizar atividades di\xE1rias, enquanto a Fisioterapia se concentra na reabilita\xE7\xE3o f\xEDsica e motora. A TO trabalha habilidades espec\xEDficas para independ\xEAncia em brincas, alimenta\xE7\xE3o, vestu\xE1rio, escolar, enquanto a FM trabalha for\xE7a, movimento e postura."
      },
      {
        category: "therapy",
        question: "O que \xE9 Estimula\xE7\xE3o Precoce?",
        answer: "Estimula\xE7\xE3o Precoce \xE9 um programa de interven\xE7\xE3o destinado a crian\xE7as de 0 a 6 anos que visa otimizar o potencial de desenvolvimento atrav\xE9s de atividades adequadas ao n\xEDvel da crian\xE7a. \xC9 especialmente importante quando h\xE1 atrasos no desenvolvimento ou risco neurol\xF3gico."
      },
      {
        category: "therapy",
        question: "Os pais participam do tratamento?",
        answer: "Sim! A fam\xEDlia \xE9 parte essencial do tratamento. Os pais recebem orienta\xE7\xF5es para aplicar estrat\xE9gias em casa, garantindo que os progressos na terapia sejam generalizados para o cotidiano da crian\xE7a. O sucesso do tratamento depende muito do envolvimento familiar."
      },
      {
        category: "schedule",
        question: "Como funciona o agendamento?",
        answer: "Voc\xEA pode entrar em contato pelo WhatsApp ou preencher o formul\xE1rio de agendamento. Retornaremos em at\xE9 24 horas para entender suas necessidades e agendar a avalia\xE7\xE3o inicial."
      },
      {
        category: "schedule",
        question: "Quanto custa a avalia\xE7\xE3o?",
        answer: "A avalia\xE7\xE3o inicial tem custo espec\xEDfico que varia conforme a extens\xE3o. Ap\xF3s a avalia\xE7\xE3o, apresentamos um plano de interven\xE7\xE3o com as sess\xF5es recomendadas e investimento. Aceitamos diversas formas de pagamento."
      },
      {
        category: "schedule",
        question: "Voc\xEAs atendem por plano de sa\xFAde?",
        answer: "Trabalhamos com alguns planos de sa\xFAde. Entre em contato para verificar se aceitamos o seu plano. Tamb\xE9m oferecemos op\xE7\xF5es de pagamento particular com pacotes."
      },
      {
        category: "schedule",
        question: "Onde ficam localizados?",
        answer: "Estamos na Rua Major Jos\xE9 dos Santos Moreira, 328, Pindamonhangaba-SP, com atendimento presencial mediante agendamento pr\xE9vio. Tamb\xE9m oferecemos orienta\xE7\xF5es online para fam\xEDlias de outras regi\xF5es."
      }
    ];
    const filteredFaqs = computed(() => {
      if (activeCategory.value === "all") return faqs;
      return faqs.filter((faq2) => faq2.category === activeCategory.value);
    });
    const sensoryApproach = [
      { title: "Avalia\xE7\xE3o", description: "Avalia\xE7\xE3o completa do perfil sensorial e funcional da crian\xE7a" },
      { title: "Plano", description: "Elabora\xE7\xE3o de plano personalizado com metas espec\xEDficas" },
      { title: "Interven\xE7\xE3o", description: "Sess\xF5es terap\xEAuticas com atividades estruturadas" },
      { title: "Orienta\xE7\xE3o", description: "Orienta\xE7\xE3o familiar para generaliza\xE7\xE3o em casa" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq" }, _attrs))} data-v-cd4db1aa><section class="hero-section" data-v-cd4db1aa><div class="container" data-v-cd4db1aa><div class="section-title" data-v-cd4db1aa><span class="section-tag" data-v-cd4db1aa>Perguntas Frequentes</span><h2 data-v-cd4db1aa>O que Voc\xEA Precisa Saber</h2><p data-v-cd4db1aa>Tire suas d\xFAvidas sobre Terapia Ocupacional e Integra\xE7\xE3o Sensorial.</p></div><div class="faq-categories" data-v-cd4db1aa><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<button class="${ssrRenderClass([{ active: activeCategory.value === category.id }, "category-btn"])}" data-v-cd4db1aa>${ssrInterpolate(category.name)}</button>`);
      });
      _push(`<!--]--></div><div class="faq-list" data-v-cd4db1aa><!--[-->`);
      ssrRenderList(filteredFaqs.value, (faq2, index) => {
        _push(`<div class="${ssrRenderClass([{ open: openFaq.value === index }, "faq-item"])}" data-v-cd4db1aa><div class="faq-question" data-v-cd4db1aa><span class="faq-number" data-v-cd4db1aa>${ssrInterpolate(index + 1)}</span><h3 data-v-cd4db1aa>${ssrInterpolate(faq2.question)}</h3><div class="faq-toggle" data-v-cd4db1aa><span data-v-cd4db1aa></span></div></div><div class="faq-answer" style="${ssrRenderStyle(openFaq.value === index ? null : { display: "none" })}" data-v-cd4db1aa><p data-v-cd4db1aa>${ssrInterpolate(faq2.answer)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="sensory-section section" data-v-cd4db1aa><div class="container" data-v-cd4db1aa><div class="section-title" data-v-cd4db1aa><span class="section-tag" data-v-cd4db1aa>Especialidade</span><h2 data-v-cd4db1aa>O que \xE9 Integra\xE7\xE3o Sensorial?</h2></div><div class="sensory-showcase" data-v-cd4db1aa><div class="sensory-text" data-v-cd4db1aa><p data-v-cd4db1aa> A <strong data-v-cd4db1aa>Integra\xE7\xE3o Sensorial</strong> \xE9 uma abordagem terap\xEAutica desenvolvida pela Dra. Jean Ayres, fundamentada na ideia de que o processamento das informa\xE7\xF5es sensoriais \xE9 essencial para o desenvolvimento e comportamento humano. </p><p data-v-cd4db1aa> Quando o c\xE9rebro processa as informa\xE7\xF5es sensoriais de forma desorganizada, a crian\xE7a pode apresentar dificuldades em atividades cotidianas, comportamento desregulado e desafios no aprendizado. </p><h3 data-v-cd4db1aa>Sistema Sensorial</h3><p data-v-cd4db1aa> O sistema sensorial inclui 8 sentidos que trabalham juntos: toque, olfato, paladar, vis\xE3o, audi\xE7\xE3o, propriocep\xE7\xE3o (consci\xEAncia do corpo), vestibular (equil\xEDbrio e movimento) e interocep\xE7\xE3o. </p></div><div class="sensory-signs" data-v-cd4db1aa><h3 data-v-cd4db1aa>Sinais de Regula\xE7\xE3o Sensorial</h3><ul data-v-cd4db1aa><li data-v-cd4db1aa><strong data-v-cd4db1aa>Hiporreativo:</strong> Busca est\xEDmulos intensos, n\xE3o percebe dor/temperatura, bate objetos</li><li data-v-cd4db1aa><strong data-v-cd4db1aa>Hipersens\xEDvel:</strong> Reage excessivamente a ru\xEDdos, texturas, luzes</li><li data-v-cd4db1aa><strong data-v-cd4db1aa>Desorganizado:</strong> Dificuldade em se concentrar, transi\xE7\xF5es</li><li data-v-cd4db1aa><strong data-v-cd4db1aa>Motor:</strong> Coordena\xE7\xE3o ruim, quedas frequentes</li><li data-v-cd4db1aa><strong data-v-cd4db1aa>Alimentar:</strong> Seletividade alimentar extrema</li><li data-v-cd4db1aa><strong data-v-cd4db1aa>Sonoro:</strong> Tapando ouvidos ou procurando barulho</li></ul></div></div><div class="sensory-approach" data-v-cd4db1aa><h3 data-v-cd4db1aa>Abordagem Terap\xEAutica</h3><div class="approach-grid" data-v-cd4db1aa><!--[-->`);
      ssrRenderList(sensoryApproach, (step) => {
        _push(`<div class="approach-step" data-v-cd4db1aa><div class="step-icon" data-v-cd4db1aa><div class="step-icon-inner" data-v-cd4db1aa></div></div><h4 data-v-cd4db1aa>${ssrInterpolate(step.title)}</h4><p data-v-cd4db1aa>${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="cta-section section" data-v-cd4db1aa><div class="container" data-v-cd4db1aa><div class="cta-card" data-v-cd4db1aa><div class="cta-content" data-v-cd4db1aa><h2 data-v-cd4db1aa>Ainda tem d\xFAvidas?</h2><p data-v-cd4db1aa>Entre em contato conosco para saber como podemos ajudar seu filho.</p><div class="cta-buttons" data-v-cd4db1aa>`);
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
      _push(`<a${ssrRenderAttr("href", config.whatsappUrl)} class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" data-v-cd4db1aa> Falar no WhatsApp </a></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd4db1aa"]]);

export { faq as default };
//# sourceMappingURL=faq-CTINPyfj.mjs.map
