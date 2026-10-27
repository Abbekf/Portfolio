import albinPhoto from '../assets/albin-hero.jpg'

export default function Hero() {
  return (
    <section id="start" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <span className="hero-badge">
          <span className="status-dot" />
          Öppen för min första roll inom utveckling & AI
        </span>
        <h1 id="hero-title">
          Albin Kalatzis
          <br />
          Forsberg.
          <span className="hero-title-role gradient-text">
            Junior Software &amp; AI Developer
          </span>
        </h1>
        <p className="hero-role">
          Systemutveckling & AI/ML <span>· Stockholm</span>
        </p>
        <p className="hero-description">
          Nyexaminerad AI-utvecklare med praktiska projekt inom maskininlärning,
          AI och systemutveckling. Nu söker jag ett team där jag kan bidra, lära
          mig mer och bygga användbara lösningar.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Utforska mina projekt <span aria-hidden="true">↗</span>
          </a>
          <a href="#contact" className="btn-secondary">
            Säg hej <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span>PYTHON</span>
          <i />
          <span>AI / ML</span>
          <i />
          <span>SYSTEMUTVECKLING</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img
            src={albinPhoto}
            alt="Albin Kalatzis Forsberg utomhus i Stockholm"
            className="hero-photo"
            fetchPriority="high"
          />
        </div>
        <div className="floating-note code-note" aria-hidden="true">
          <span className="window-dots">● ● ●</span>
          <code>
            <em>const</em> developer = {'{'}
            <br />
            &nbsp; name: <b>'Albin'</b>,<br />
            &nbsp; mindset: <b>'keep learning'</b>
            <br />
            {'}'}
          </code>
        </div>
        <div className="floating-note location-note">
          <span className="note-icon">✳</span>
          <div>
            <strong>Från idé till fungerande kod.</strong>
            <small>Ett projekt i taget.</small>
          </div>
        </div>
        <span className="visual-spark" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  )
}
