import albinPhoto from '../assets/albin-hero.jpg'

function Hero() {
  return (
    <section id="start" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          Söker mitt första jobb inom utveckling / AI
        </div>

        <h1>
          Hej! Jag heter{' '}
          <span className="gradient-text">
            Albin Kalatzis Forsberg
          </span>{' '}
          och är{' '}
          <span className="gradient-text">
            Junior Software & AI Developer
          </span>{' '}
          i Stockholm.
        </h1>

        <p className="hero-description">
          Jag är nyexaminerad och söker mitt första jobb inom
          utveckling eller AI/ML. Jag har byggt praktiska projekt
          inom maskininlärning, AI och webbutveckling och tycker
          om att lösa problem och skapa användbara lösningar.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Se mina projekt
          </a>

          <a href="#contact" className="btn-secondary">
            Kontakta mig
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src={albinPhoto}
          alt="Porträttbild på Albin Kalatzis Forsberg"
          className="hero-photo"
        />
      </div>
    </section>
  )
}

export default Hero