import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <a href="#start" className="logo" aria-label={t('nav.home')}>
        <span className="logo-dot" />
        AKF<span className="logo-slash">/</span>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={t(open ? 'nav.close' : 'nav.open')}
        onClick={() => setOpen(!open)}
      >
        <span className="menu-text" aria-hidden="true">{t(open ? 'nav.close' : 'nav.open')}</span>
        <span className="menu-icon" aria-hidden="true">{open ? '✕' : '☰'}</span>
      </button>
      <nav
        id="main-nav"
        className={`nav-links ${open ? 'is-open' : ''}`}
        aria-label={t('nav.main')}
      >
        {[
          ['projects', 'nav.projects'],
          ['about', 'nav.about'],
          ['skills', 'nav.skills'],
          ['contact', 'nav.contact'],
        ].map(([id, text]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {t(text)}
          </a>
        ))}
      </nav>
      <div className="header-preferences">
        <div className="language-switcher" role="group" aria-label={t('language.label')}>
          <button
            type="button"
            lang="sv"
            aria-label={t('language.sv')}
            aria-pressed={i18n.resolvedLanguage === 'sv'}
            onClick={() => void i18n.changeLanguage('sv')}
          >
            <svg className="language-flag" viewBox="0 0 16 10" aria-hidden="true" focusable="false">
              <path fill="#006aa7" d="M0 0h16v10H0z" />
              <path fill="#fecc00" d="M5 0h2v10H5zM0 4h16v2H0z" />
            </svg> SV
          </button>
          <span className="language-divider" aria-hidden="true">|</span>
          <button
            type="button"
            lang="en"
            aria-label={t('language.en')}
            aria-pressed={i18n.resolvedLanguage === 'en'}
            onClick={() => void i18n.changeLanguage('en')}
          >
            <svg className="language-flag" viewBox="0 0 60 30" aria-hidden="true" focusable="false">
              <path fill="#012169" d="M0 0h60v30H0z" />
              <path stroke="#fff" strokeWidth="6" d="m0 0 60 30m0-30L0 30" />
              <path stroke="#c8102e" strokeWidth="2" d="m0 0 60 30m0-30L0 30" />
              <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
              <path stroke="#c8102e" strokeWidth="6" d="M30 0v30M0 15h60" />
            </svg> EN
          </button>
        </div>
        <ThemeToggle />
      </div>
      <a
        href="https://github.com/Abbekf"
        className="github-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
