// Run before styles and React load so the first paint uses the correct theme.
;(function () {
  const theme = 'light'
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#191827' : '#f3eadb')
})()
