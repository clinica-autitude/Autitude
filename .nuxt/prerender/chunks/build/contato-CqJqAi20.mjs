import { ref, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/vue@3.5.35/node_modules/vue/server-renderer/index.mjs';
import { MapPin, MessageCircle, Mail, Clock } from 'file:///home/ubuntu/Autitude/node_modules/.pnpm/lucide-vue-next@1.0.0_vue@3.5.35/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import { _ as _sfc_main$1 } from './DotGrid-awvUuBj2.mjs';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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

const _sfc_main = {
  __name: "contato",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contato | Autitude - Desenvolvimento e A\xE7\xE3o Humana",
      meta: [
        { name: "description", content: "Entre em contato com a Autitude. Estamos na Vila Rica, em Pindamonhangaba-SP. WhatsApp, e-mail ou formul\xE1rio de contato." }
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
              name: "Autitude - Desenvolvimento e A\xE7\xE3o Humana",
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
        neighborhood: "Vila Rica",
        city: "Pindamonhangaba",
        state: "SP"
      },
      whatsappUrl: "https://wa.me/5512991968683",
      phoneDisplay: "(12) 99196-8683",
      hours: {
        weekdays: "8h \xE0s 18h"
      }
    };
    const contactInfo = [
      {
        title: "Localiza\xE7\xE3o",
        content: config.address.street,
        detail: `${config.address.neighborhood} \u2014 ${config.address.city}, ${config.address.state}`,
        icon: MapPin,
        color: "linear-gradient(135deg, var(--pastel-lavender) 0%, var(--primary-light) 100%)"
      },
      {
        title: "WhatsApp",
        content: config.phoneDisplay,
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact" }, _attrs))} data-v-f74d2ff6><section class="hero-section" data-v-f74d2ff6><div class="hero-bg-grid" data-v-f74d2ff6>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        "dot-size": 14,
        gap: 28,
        "base-color": "#6B4FA3",
        "active-color": "#3D2D5E",
        proximity: 120,
        "speed-trigger": 80,
        "shock-radius": 200,
        "shock-strength": 4,
        "max-speed": 5e3,
        resistance: 750,
        "return-duration": 1.5
      }, null, _parent));
      _push(`</div><div class="container" data-v-f74d2ff6><div class="section-header" data-v-f74d2ff6><span class="section-tag" data-v-f74d2ff6>Contato</span><h1 data-v-f74d2ff6>Fale com a Autitude</h1><p data-v-f74d2ff6>Estamos prontos para acolher voc\xEA e sua fam\xEDlia.</p></div><div class="contact-showcase" data-v-f74d2ff6><div class="contact-info-cards" data-v-f74d2ff6><!--[-->`);
      ssrRenderList(contactInfo, (info) => {
        _push(`<div class="info-card" data-v-f74d2ff6><div class="card-icon-wrapper" style="${ssrRenderStyle({ background: info.color })}" data-v-f74d2ff6>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(info.icon), {
          size: 24,
          class: "icon-primary card-icon-inner"
        }, null), _parent);
        _push(`</div><div class="card-text" data-v-f74d2ff6><h3 data-v-f74d2ff6>${ssrInterpolate(info.title)}</h3><p class="primary-text" data-v-f74d2ff6>${ssrInterpolate(info.content)}</p>`);
        if (info.detail) {
          _push(`<p class="secondary-text" data-v-f74d2ff6>${ssrInterpolate(info.detail)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (info.link) {
          _push(`<a${ssrRenderAttr("href", info.link)} class="${ssrRenderClass([info.btnClass, "btn btn-sm"])}" target="_blank" data-v-f74d2ff6>${ssrInterpolate(info.linkText)}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div class="contact-form-wrapper" data-v-f74d2ff6><div class="form-header" data-v-f74d2ff6><h3 data-v-f74d2ff6>Envie uma mensagem</h3><p data-v-f74d2ff6>Respondemos em at\xE9 24 horas.</p></div><form class="contact-form" data-v-f74d2ff6><div class="form-group" data-v-f74d2ff6><label class="form-label" for="name" data-v-f74d2ff6>Nome *</label><input type="text" id="name" class="form-input"${ssrRenderAttr("value", form.value.name)} required placeholder="Seu nome completo" data-v-f74d2ff6></div><div class="form-row" data-v-f74d2ff6><div class="form-group" data-v-f74d2ff6><label class="form-label" for="email" data-v-f74d2ff6>E-mail *</label><input type="email" id="email" class="form-input"${ssrRenderAttr("value", form.value.email)} required placeholder="seu@email.com" data-v-f74d2ff6></div><div class="form-group" data-v-f74d2ff6><label class="form-label" for="tel" data-v-f74d2ff6>Telefone</label><input type="tel" id="tel" class="form-input"${ssrRenderAttr("value", form.value.phone)} placeholder="(12) 99999-9999" data-v-f74d2ff6></div></div><div class="form-group" data-v-f74d2ff6><label class="form-label" for="msg" data-v-f74d2ff6>Mensagem *</label><textarea id="msg" class="form-textarea" required placeholder="Como podemos ajudar?" rows="5" data-v-f74d2ff6>${ssrInterpolate(form.value.message)}</textarea></div><button type="submit" class="btn btn-primary btn-lg btn-submit" data-v-f74d2ff6> Enviar Mensagem </button></form></div></div></div></section><section class="location-section section" data-v-f74d2ff6><div class="container" data-v-f74d2ff6><div class="location-card" data-v-f74d2ff6><div class="location-content" data-v-f74d2ff6><div class="location-icon" data-v-f74d2ff6>`);
      _push(ssrRenderComponent(unref(MapPin), {
        size: 32,
        class: "icon-primary"
      }, null, _parent));
      _push(`</div><div class="location-details" data-v-f74d2ff6><h3 data-v-f74d2ff6>Nosso endere\xE7o</h3><p class="address" data-v-f74d2ff6>Rua Major Jos\xE9 dos Santos Moreira, 328</p><p class="city" data-v-f74d2ff6>Vila Rica \u2014 Pindamonhangaba, SP</p><div class="location-meta" data-v-f74d2ff6><span data-v-f74d2ff6>Seg a Sex: 8h \xE0s 18h</span></div></div></div><div class="location-map" data-v-f74d2ff6><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.523716039893!2d-45.46558491270433!3d-22.93093188518779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf1835a97b90d%3A0x8c2cb7aa78bd7f92!2sAutitude%20Desenvolvimento%20e%20A%C3%A7%C3%A3o%20Humana!5e0!3m2!1sen!2sbr!4v1780604277186!5m2!1sen!2sbr" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Localiza\xE7\xE3o da Autitude \u2014 Rua Major Jos\xE9 dos Santos Moreira, 328, Vila Rica, Pindamonhangaba-SP" data-v-f74d2ff6></iframe></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contato = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f74d2ff6"]]);

export { contato as default };
//# sourceMappingURL=contato-CqJqAi20.mjs.map
