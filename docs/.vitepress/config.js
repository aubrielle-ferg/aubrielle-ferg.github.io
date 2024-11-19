export default {
  lang: 'en-US',
  title: 'Aubrielle Ferg',
  description: 'Aubrielle Ferg is an Backend / Embedded Engineer.',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://aubrielle-ferg.github.io',
    lastmodDateOnly: false
  },
  head: [
    ['meta', { property: 'author', content: 'Aubrielle Ferg' }],
    ['meta', { name: 'og:site_name', content: 'Aubrielle Ferg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@else_clause' }],
    ['meta', { name: 'twitter:creator', content: '@else_clause' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }]
  ],
  themeConfig: {
    logo: { src: '/logo.png', width: 24, height: 24 },
    aside: true,
    outline: {
      level: 'deep'
    },
    nav: nav(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aubrielle-ferg/' }
    ]
  }
}

function nav() {
  return [
    {
      text: 'Blog',
      link: '/blog/',
      activeMatch: '/blog'
    }
  ]
}
