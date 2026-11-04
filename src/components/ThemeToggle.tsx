import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Theme = 'light' | 'dark'

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#191827' : '#fffdfa')
}

export default function ThemeToggle() {
  const { t } = useTranslation()
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    const system = window.matchMedia('(prefers-color-scheme: dark)')
    function followSystem() {
      if (document.documentElement.dataset.themePreference === 'explicit') return
      const next = system.matches ? 'dark' : 'light'
      applyTheme(next)
      setTheme(next)
    }
    system.addEventListener('change', followSystem)
    return () => system.removeEventListener('change', followSystem)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.themePreference = 'explicit'
    applyTheme(next)
    setTheme(next)
    try {
      localStorage.setItem('portfolio-theme', next)
    } catch {
      // The choice still applies for this visit if storage is blocked.
    }
  }

  const label = t(theme === 'dark' ? 'theme.light' : 'theme.dark')
  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}
      aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true" focusable="false">
        {theme === 'dark' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </>
        ) : <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />}
      </svg>
    </button>
  )
}
