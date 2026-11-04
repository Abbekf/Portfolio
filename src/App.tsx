import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  const { t } = useTranslation()
  return (
    <>
      <a className="skip-link" href="#main">
        {t('skip')}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <a href="#start" className="logo">
          <span className="logo-dot" />
          AKF<span className="logo-slash">/</span>
        </a>
        <span>© {new Date().getFullYear()} Albin Kalatzis Forsberg</span>
        <span>{t('footer.built')}</span>
        <a href="#start">{t('footer.top')}</a>
      </footer>
    </>
  )
}
