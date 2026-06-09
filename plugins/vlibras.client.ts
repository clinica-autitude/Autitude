import { defineNuxtPlugin } from '#app'
import VLibras from '@vue-a11y/vlibras'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VLibras)
})
