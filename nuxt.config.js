export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "black-miravle",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" },{
      href:"https://fonts.googleapis.com/css2?family=Poppins&display=swap",
      rel:"stylesheet"
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["./assets/scss/variables.scss"]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt"
  ],
  bootstrapVue: {
    components: ['BContainer', 'BRow', 'BCol'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: "file-loader",
            query: {
              name: "assets/[name].[hash:8].[ext]"
            }
          },
          {
            loader: "vue-svg-loader",
            options: {
              // Optional svgo options
              svgo: {
                plugins: [{ removeViewBox: false }]
              }
            }
          }
        ]
      });
    },
    postcss: {
      preset: {
        stage: 3
      }
    },
    babel: {
      compact: true,
     },
  }
};
