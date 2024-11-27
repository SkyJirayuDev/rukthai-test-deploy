export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  target: 'static',
  ssr: false,
  devtools: { enabled: true },
  css: [
    '@/assets/sass/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/sass/abstracts/variables";
            @import "@/assets/sass/abstracts/mixins";
          `
        }
      }
    }
  },
  app: {
    head: {
      title: 'Ruk Thai Massage | Best Relaxing Massage in Remuera, Auckland',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=0' },
        { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
        { name: 'description', content: 'Ruk Thai Massage | Best Relaxing Massage in Remuera, Auckland' },
        { 'http-equiv': 'content-language', content: 'en' },
        { 'http-equiv': 'content-type', content: 'text/html; charset=UTF-8' },
        { property: 'og:title', content: 'Ruk Thai Massage | Best Relaxing Massage in Remuera, Auckland' },
        { property: 'og:description', content: 'Ruk Thai Massage | Best Relaxing Massage in Remuera, Auckland' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://rukthaimassage.co.nz/img/icon-spa.png' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Vidaloka&display=swap' },
        { rel: 'shortcut icon', type: 'image/png', href: '/img/favicon.png' },
        { rel: 'stylesheet', href: '/slick/slick.css' },
        { rel: 'stylesheet', href: '/slick/slick-theme.css' }
      ],
      script: [
        { src: '//code.jquery.com/jquery-1.11.0.min.js', type: 'text/javascript' },
        { src: '//code.jquery.com/jquery-migrate-1.2.1.min.js', type: 'text/javascript' },
        { src: '/slick/slick.min.js', type: 'text/javascript' }
      ]
    }
  }
})
