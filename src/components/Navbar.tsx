import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <a href="#start" className="logo" aria-label="AKF, till startsidan">
        <span className="logo-dot" />
        AKF<span className="logo-slash">/</span>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Stäng ✕' : 'Meny ☰'}
      </button>
      <nav
        id="main-nav"
        className={`nav-links ${open ? 'is-open' : ''}`}
        aria-label="Huvudnavigation"
      >
        {[
          ['projects', 'Projekt'],
          ['about', 'Om mig'],
          ['skills', 'Kompetenser'],
          ['contact', 'Kontakt'],
        ].map(([id, text]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {text}
          </a>
        ))}
      </nav>
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
