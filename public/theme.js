// Run before styles and React load so the first paint uses the correct theme.
;(function () {
  let preference
  try {
    preference = localStorage.getItem('portfolio-theme')
  } catch {
    // Use the light default when storage is unavailable.
  }
  const theme = preference === 'dark' ? 'dark' : 'light'
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#191827' : '#fffdfa')
})()
