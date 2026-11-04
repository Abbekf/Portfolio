import { useTranslation } from 'react-i18next'
import photo from '../assets/albin-about.jpg'
export default function About() {
  const { t } = useTranslation()
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="about-photo">
        <img src={photo} alt={t('about.photo')} loading="lazy" />
        <span>
          Albin Kalatzis Forsberg
          <br />
          <small>{t('about.caption')}</small>
        </span>
      </div>
      <div className="about-copy">
        <span className="eyebrow">{t('about.eyebrow')}</span>
        <h2 id="about-title">
          {t('about.title')}
          <br />
          <span className="gradient-text">{t('about.direction')}</span> {t('about.drive')}
        </h2>
        <p>
          {t('about.background')}
        </p>
        <p>
          {t('about.education')}
        </p>
        <p>
          {t('about.opportunity')}
        </p>
        <a className="text-link" href="#contact">
          {t('about.contact')}
        </a>
      </div>
      <div className="about-values">
        <div>
          <span>✳</span>
          <h3>{t('about.curious')}</h3>
          <p>{t('about.curiousDetail')}</p>
        </div>
        <div>
          <span>⌘</span>
          <h3>{t('about.problems')}</h3>
          <p>{t('about.problemsDetail')}</p>
        </div>
        <div>
          <span>↗</span>
          <h3>{t('about.growth')}</h3>
          <p>{t('about.growthDetail')}</p>
        </div>
      </div>
    </section>
  )
}
