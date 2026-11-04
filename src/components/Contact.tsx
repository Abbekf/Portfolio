import { useTranslation } from 'react-i18next'
export default function Contact() {
  const { t } = useTranslation()
  return (
    <section
      id="contact"
      className="contact section"
      aria-labelledby="contact-title"
    >
      <div>
        <span className="eyebrow">{t('contact.eyebrow')}</span>
        <h2 id="contact-title">
          {t('contact.title')}
          <br />
          {t('contact.together')}
        </h2>
        <p>
          {t('contact.opportunity')}
          <br className="desktop-break" /> {t('contact.detail')}
        </p>
      </div>
      <div className="contact-links">
        <a href="mailto:albin.kforsberg@gmail.com">
          <span className="contact-icon">✉</span>
          <div>
            <small>{t('contact.email')}</small>
            <strong>albin.kforsberg@gmail.com</strong>
          </div>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          href="https://github.com/Abbekf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon">⌘</span>
          <div>
            <small>{t('contact.code')}</small>
            <strong>github.com/Abbekf</strong>
          </div>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
