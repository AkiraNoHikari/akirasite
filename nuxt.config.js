export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  router: {
    base: "/akirasite/",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Akira",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { "http-equiv": "cache-control", content: "no-cache" },
      { hid: "og-title", property: "og:title", content: "Akira - VTuber, Artist, Coder" },
      { hid: "og-desc", property: "og:description", content: "Checkout my awesome content!" },
      { hid: "og-site-name", property: "og:site_name", content: "Akirasite" },
      { hid: "og-image", property: "og:image", content: "https://cdn.discordapp.com/attachments/967882844191981688/967883830168006706/Unbenannt.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
