import { ref, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { MapPin, MessageCircle, Mail, Clock } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './DotGrid-BqVIY_Uo.mjs';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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

const _sfc_main = {
  __name: "contato",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contato | Autitude - Fale Conosco",
      meta: [
        { name: "description", content: "Entre em contato com a Autitude. WhatsApp, e-mail ou formul\xE1rio de contato." }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contato - Autitude",
            description: "Entre em contato com a Autitude. WhatsApp, e-mail ou formul\xE1rio.",
            url: "https://hautlys.github.io/Autitude/contato",
            mainEntity: {
              "@type": "MedicalBusiness",
              name: "Autitude - Cl\xEDnica de Terapia Ocupacional",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+5512991968683",
                contactType: "customer service",
                availableLanguage: "Portuguese",
                areaServed: "BR"
              }
            }
          })
        }
      ]
    });
    const config = {
      address: {
        street: "Rua Major Jos\xE9 dos Santos Moreira, 328",
        city: "Pindamonhangaba",
        state: "SP"
      },
      whatsappUrl: "https://wa.me/5512991968683",
      hours: {
        weekdays: "8h \xE0s 18h"
      }
    };
    const contactInfo = [
      {
        title: "Localiza\xE7\xE3o",
        content: config.address.street,
        detail: `${config.address.city}, ${config.address.state}`,
        icon: MapPin,
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)"
      },
      {
        title: "WhatsApp",
        content: "Respostas r\xE1pidas para suas d\xFAvidas",
        link: `${config.whatsappUrl}?text=${encodeURIComponent("Ol\xE1! Gostaria de mais informa\xE7\xF5es.")}`,
        linkText: "Chamar no WhatsApp",
        btnClass: "btn-whatsapp",
        icon: MessageCircle,
        color: "linear-gradient(135deg, var(--pastel-mint) 0%, var(--accent-light) 100%)"
      },
      {
        title: "E-mail",
        content: "contato@autitude.com.br",
        detail: "Respondemos em at\xE9 24h",
        icon: Mail,
        color: "linear-gradient(135deg, var(--pastel-pink) 0%, var(--secondary-light) 100%)"
      },
      {
        title: "Hor\xE1rio",
        content: "Segunda a Sexta",
        detail: config.hours.weekdays,
        icon: Clock,
        color: "linear-gradient(135deg, var(--pastel-peach) 0%, var(--secondary-light) 100%)"
      }
    ];
    const form = ref({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact" }, _attrs))} data-v-c75dec99><section class="hero-section" data-v-c75dec99><div class="hero-bg-grid" data-v-c75dec99>`);
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
      _push(`</div><div class="container" data-v-c75dec99><div class="section-header" data-v-c75dec99><span class="section-tag" data-v-c75dec99>Contato</span><h1 data-v-c75dec99>Fale conosco</h1><p data-v-c75dec99>Estamos prontos para atender voc\xEA e sua fam\xEDlia.</p></div><div class="contact-showcase" data-v-c75dec99><div class="contact-info-cards" data-v-c75dec99><!--[-->`);
      ssrRenderList(contactInfo, (info) => {
        _push(`<div class="info-card" data-v-c75dec99><div class="card-icon-wrapper" style="${ssrRenderStyle({ background: info.color })}" data-v-c75dec99>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(info.icon), {
          size: 24,
          class: "icon-primary card-icon-inner"
        }, null), _parent);
        _push(`</div><div class="card-text" data-v-c75dec99><h3 data-v-c75dec99>${ssrInterpolate(info.title)}</h3><p class="primary-text" data-v-c75dec99>${ssrInterpolate(info.content)}</p>`);
        if (info.detail) {
          _push(`<p class="secondary-text" data-v-c75dec99>${ssrInterpolate(info.detail)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (info.link) {
          _push(`<a${ssrRenderAttr("href", info.link)} class="${ssrRenderClass([info.btnClass, "btn btn-sm"])}" target="_blank" data-v-c75dec99>${ssrInterpolate(info.linkText)}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="contact-form-wrapper" data-v-c75dec99><div class="form-header" data-v-c75dec99><h3 data-v-c75dec99>Envie uma mensagem</h3><p data-v-c75dec99>Respondemos em at\xE9 24 horas.</p></div><form class="contact-form" data-v-c75dec99><div class="form-group" data-v-c75dec99><label class="form-label" for="name" data-v-c75dec99>Nome *</label><input type="text" id="name" class="form-input"${ssrRenderAttr("value", form.value.name)} required placeholder="Seu nome completo" data-v-c75dec99></div><div class="form-row" data-v-c75dec99><div class="form-group" data-v-c75dec99><label class="form-label" for="email" data-v-c75dec99>E-mail *</label><input type="email" id="email" class="form-input"${ssrRenderAttr("value", form.value.email)} required placeholder="seu@email.com" data-v-c75dec99></div><div class="form-group" data-v-c75dec99><label class="form-label" for="tel" data-v-c75dec99>Telefone</label><input type="tel" id="tel" class="form-input"${ssrRenderAttr("value", form.value.phone)} placeholder="(12) 99999-9999" data-v-c75dec99></div></div><div class="form-group" data-v-c75dec99><label class="form-label" for="msg" data-v-c75dec99>Mensagem *</label><textarea id="msg" class="form-textarea" required placeholder="Como podemos ajudar?" rows="5" data-v-c75dec99>${ssrInterpolate(form.value.message)}</textarea></div><button type="submit" class="btn btn-primary btn-lg btn-submit" data-v-c75dec99> Enviar Mensagem </button></form></div></div></div></section><section class="location-section section" data-v-c75dec99><div class="container" data-v-c75dec99><div class="location-card" data-v-c75dec99><div class="location-content" data-v-c75dec99><div class="location-icon" data-v-c75dec99>`);
      _push(ssrRenderComponent(unref(MapPin), {
        size: 32,
        class: "icon-primary"
      }, null, _parent));
      _push(`</div><div class="location-details" data-v-c75dec99><h3 data-v-c75dec99>Nosso Endere\xE7o</h3><p class="address" data-v-c75dec99>Rua Major Jos\xE9 dos Santos Moreira, 328</p><p class="city" data-v-c75dec99>Pindamonhangaba, SP</p><div class="location-meta" data-v-c75dec99><span data-v-c75dec99>Seg a Sex: 8h \xE0s 18h</span></div></div></div><div class="location-map" data-v-c75dec99><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.6308949951824!2d-45.460713999999996!3d-22.9309369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf1835a97b90d%3A0x8c2cb7aa78bd7f92!2sAutitude%20Desenvolvimento%20e%20A%C3%A7%C3%A3o%20Humana!5e0!3m2!1spt-BR!2sbr!4v1778250238052!5m2!1spt-BR!2sbr" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-c75dec99></iframe></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contato = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c75dec99"]]);

export { contato as default };
//# sourceMappingURL=contato-C-JqHWg4.mjs.map
