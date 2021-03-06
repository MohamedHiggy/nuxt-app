export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'blog-app',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css' },
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "@/assets/styles/main.scss"
    ],

    loading: {
        color: "red",
        height: "5px"
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ['~/plugins/axios', { src: '~/plugins/vuelidate.js', mode: 'both', }],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: "https://jsonplaceholder.typicode.com"
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}