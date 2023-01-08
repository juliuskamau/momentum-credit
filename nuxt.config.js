import axios from "axios";
// let dynamicRoutes = async () => {
//   const posts = await axios.get(
//     "http://dev.bean.co.ke/wordpress/wp-json/wp/v2/posts"
//   );
//   const routesForPosts = posts.data.map(post => {
//     return {
//       route: `/articles/${post.id}`,
//       payload: post
//     };
//   });
//   return routesForPosts;
// };
export default {
    generate: {
        fallback: "404.html",
        exclude: [/^\/media|^\/articles/]
            // routes: dynamicRoutes
    },
    loading: {
        color: "#E5BA5B",
        height: "4px"
    },
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: "universal",
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: "static",
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: "Momentum Credit - Expanding Your Possibilities",
        htmlAttrs: {
        lang: "en",
        },
        
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "keywords",
                name: "keywords",
                content: "momentum,credit,loan,loans,financing,book,logbook,sharia"
            },
            {
                hid: "title",
                name: "title",
                content: "Momentum Credit — Expanding Your Possibilities"
            },
            {
                hid: "description",
                name: "description",
                content: "Momentum Credit is a premier structured non-banking financial lender aiming to transform Africa through 24-hour fast and transparent financing. "
            },
            {
                hid: "og:type",
                property: "og:type",
                content: "website"
            },
            {
                hid: "og:url",
                property: "og:url",
                content: "https://momentumcredit.co.ke/"
            },
            {
                hid: "og:title",
                property: "og:title",
                content: "Momentum Credit — Expanding Your Possibilities"
            },
            {
                hid: "og:description",
                property: "og:description",
                content: "Momentum Credit is a premier structured non-banking financial lender aiming to transform Africa through 24-hour fast and transparent financing. "
            },
            {
                hid: "og:image",
                property: "og:image",
                content: "https://momentumcredit.co.ke/img/cover.jpg"
            },
            {
                hid: "twitter:card",
                property: "twitter:card",
                content: "summary_large_image"
            },
            {
                hid: "og:url",
                property: "og:url",
                content: "https://momentumcredit.co.ke/"
            },
            {
                hid: "twitter:title",
                property: "twitter:title",
                content: "Momentum Credit — Expanding Your Possibilities"
            },
            {
                hid: "twitter:description",
                property: "twitter:description",
                content: "Momentum Credit is a premier structured non-banking financial lender aiming to transform Africa through 24-hour fast and transparent financing. "
            },
            {
                hid: "twitter:image",
                property: "twitter:image",
                content: "https://momentumcredit.co.ke/img/cover.jpg"
            }
        ],
        link: [
            { rel: "icon", href: "/img/favicon-196.png" },
            {
                rel: 'canonical',
                href: 'https://momentumcredit.co.ke/'
            },
            {
                rel: "apple-touch-icon-precomposed",
                href: "/img/apple-touch-icon-precomposed.png"
            },
            {
                rel: "stylesheet",
                fref: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
            }
        ]
    },
    /*
     ** Global CSS
     */
    css: [
        "vue-range-component/dist/vue-range-slider.css",
        "@/assets/scss/main.scss"
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        { src: "@/plugins/vue-range-slider.js", ssr: false },
        {src: 'plugins/owl.js', ssr: false},
        { src: "~plugins/ga.js", mode: "client" }
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        "@nuxtjs/tailwindcss"
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        ["vue-scrollto/nuxt", { duration: 300 }],
        "@nuxtjs/axios",
        "@nuxt/http",
        "@nuxtjs/gtm",
        "nuxt-facebook-pixel-module"
    ],
    facebook: {
        track: "PageView",
        pixelId: "373634007242008",
        autoPageView: true,
        disabled: false
    },
    /* Axios Configs */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        baseURL: process.env.API_URL
    },
    http: {
        baseURL: process.env.API_URL
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    router: {
        prefetchPayloads: false,
        /* the base directory of the app*/
        base: "/"
            /* Let's remove the trailing slash */
            // trailingSlash: false,
            // mode: 'hash'
    },
    /** google tag manager */
    gtm: {
        id: "GTM-W6FKLQQ",
        enabled: true
    }
};