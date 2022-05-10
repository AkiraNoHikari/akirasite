export default {
  ssr: false,
  target: "static",
  router: {
    base: "/akirasite/",
  },
  head: {
    title: "Akira",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { hid: "google", name: "google-site-verification", content: "C8GkT2x3f0LvDuf4hQotrGCdlAyLWgJ4jqSCDWz57tk" }, 
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
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
  },
  components: true,
};
