import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Minestom",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //nav: [
    //  { text: 'Home', link: '/' },
    //  { text: 'Examples', link: '/markdown-examples' }
    //],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is Minestom?', link: '/introduction/what-is-minestom.md' },
          { text: 'Project Set-up', link: '/introduction/project-set-up.md' },
          { text: 'Create a Server' , link: '/introduction/create-a-server.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Minestom/Minestom' },
      { icon: 'discord', link: 'https://discord.gg/pkFRvqB' }
    ],
  },
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  },
  cleanUrls: true
})
