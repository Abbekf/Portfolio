// Run before styles and React load so the first paint uses the correct theme.
;(function () {
  let preference
  try {
    preference = localStorage.getItem('portfolio-theme')
  } catch {
    // System preference still works when storage is unavailable.
  }
  const explicit = preference === 'light' || preference === 'dark'
  const theme = explicit
    ? preference
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  document.documentElement.dataset.themePreference = explicit ? 'explicit' : 'system'
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#191827' : '#fffdfa')
})()
