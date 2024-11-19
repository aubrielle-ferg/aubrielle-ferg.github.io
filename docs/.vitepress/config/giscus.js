const giscusConfig = (currentTheme) => ({
  async: true,
  src: 'https://giscus.app/client.js',
  'data-repo': 'aubrielle-ferg/aubrielle-ferg.github.io',
  'data-repo-id': 'R_kgDONRdCVw',
  'data-category': 'General',
  'data-category-id': 'DIC_kwDONRdCV84CkZEM',
  'data-mapping': 'pathname',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'top',
  'data-theme': currentTheme,
  'data-lang': 'en',
  'data-loading': 'lazy',
  crossorigin: 'anonymous'
})

export { giscusConfig }
