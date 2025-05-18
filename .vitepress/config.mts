import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cifracollab",
  description: "a site with cifras",
  lang: 'pt-BR',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Conteúdo', link: '/content' }
    ],

    sidebar: [
      {
        text: 'Introdução',
        link: '/content',
        items: [
          {
            text: 'Instrumentos',
            items: [
              {
                text: 'Guitarra',
                items: [
                  {
                    text: 'Tablaturas',
                    link: '/content/guitar/tabs',
                    items: [
                      { text: 'Fácil', link: '/content/guitar/tabs/easy' },
                      { text: 'Medio', link: '/content/guitar/tabs/medium' },
                      { text: 'Difícil', link: '/content/guitar/tabs/hard' }
                    ]
                  }
                ]
              },
                {
                text: 'Ukulele 🏗️',
                items: [
                  {
                    text: 'Tablaturas',
                    link: '/content/guitar/tabs',
                    // items: [
                    //   { text: 'Fácil', link: '/content/guitar/tabs/easy' },
                    //   { text: 'Medio', link: '/content/guitar/tabs/medium' },
                    //   { text: 'Difícil', link: '/content/guitar/tabs/hard' }
                    // ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
