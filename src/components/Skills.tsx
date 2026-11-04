import { useTranslation } from 'react-i18next'
const skills = [
  {
    name: 'Python',
    mark: 'Py',
    color: '#3379ab',
    area: 'skillContent.0.area',
    detail:
      'skillContent.0.detail',
  },
  {
    name: 'SQL',
    mark: 'SQL',
    color: '#555c83',
    area: 'skillContent.1.area',
    detail:
      'skillContent.1.detail',
  },
  {
    name: 'TensorFlow',
    mark: 'TF',
    color: '#ee8029',
    area: 'skillContent.2.area',
    detail:
      'skillContent.2.detail',
  },
  {
    name: 'PyTorch',
    mark: 'Pt',
    color: '#dc5b47',
    area: 'skillContent.3.area',
    detail: 'skillContent.3.detail',
  },
  {
    name: 'scikit-learn',
    mark: 'sk',
    color: '#2b8c9d',
    area: 'skillContent.4.area',
    detail:
      'skillContent.4.detail',
  },
  {
    name: 'LLM & RAG',
    mark: '✧',
    color: '#ad62a2',
    area: 'skillContent.5.area',
    detail:
      'skillContent.5.detail',
  },
  {
    name: 'Streamlit',
    mark: 'St',
    color: '#e85264',
    area: 'skillContent.6.area',
    detail:
      'skillContent.6.detail',
  },
  {
    name: 'React',
    mark: '⚛',
    color: '#2298ae',
    area: 'skillContent.7.area',
    detail:
      'skillContent.7.detail',
  },
  {
    name: 'Git',
    mark: '◇',
    color: '#ea634c',
    area: 'skillContent.8.area',
    detail:
      'skillContent.8.detail',
  },
  {
    name: 'Docker',
    mark: '▤',
    color: '#2788c7',
    area: 'skillContent.9.area',
    detail:
      'skillContent.9.detail',
  },
]
export default function Skills() {
  const { t } = useTranslation()
  return (
    <section
      id="skills"
      className="section skills"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">{t('skills.eyebrow')}</span>
          <h2 id="skills-title">
            {t('skills.title')}<span className="accent">.</span>
          </h2>
        </div>
        <p>
          {t('skills.intro')}{' '}
          <br />
          {t('skills.introDetail')}
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((s) => (
          <details className="skill-card" key={s.name}>
            <summary>
              <span className="skill-mark" style={{ color: s.color }}>
                {s.mark}
              </span>
              <strong>{s.name}</strong>
              <small>{t(s.area)}</small>
              <span className="skill-expand" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{t(s.detail)}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
