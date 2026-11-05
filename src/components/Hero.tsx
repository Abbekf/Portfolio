import { useTranslation } from 'react-i18next'
import albinPhoto from '../assets/albin-hero.jpg'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="start" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title">
          Albin Kalatzis
          <br />
          Forsberg.
          <span className="hero-title-role gradient-text">
            {t('hero.title')}
          </span>
        </h1>
        <p className="hero-role">
          {t('hero.role')} <span>· Stockholm</span>
        </p>
        <p className="hero-description">
          {t('hero.description')}
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            {t('hero.projects')} <span aria-hidden="true">↗</span>
          </a>
          <a href="#contact" className="btn-secondary">
            {t('hero.contact')} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-footnote">
          <span>PYTHON</span>
          <i />
          <span>AI / ML</span>
          <i />
          <span>{t('hero.software')}</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img
            src={albinPhoto}
            alt={t('hero.photo')}
            className="hero-photo"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
