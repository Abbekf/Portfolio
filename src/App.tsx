import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Hoppa till innehållet
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
        <span>Byggd med React, TypeScript & nyfikenhet.</span>
        <a href="#start">Till toppen ↑</a>
      </footer>
    </>
  )
}
