const skills = [
  {
    name: 'Python',
    mark: 'Py',
    color: '#3379ab',
    area: 'Kod & data',
    detail:
      'Databearbetning, AI-pipelines, webbinsamling och automatisering i egna projekt och under LIA.',
  },
  {
    name: 'SQL',
    mark: 'SQL',
    color: '#555c83',
    area: 'Databaser',
    detail:
      'Relationsdatabaser, frågor och CRUD. Bland annat i ett eget lagerhanteringsprojekt med SQLite.',
  },
  {
    name: 'TensorFlow',
    mark: 'TF',
    color: '#ee8029',
    area: 'Deep learning',
    detail:
      'Träning och finjustering av bildklassificeringsmodeller med Keras och EfficientNetB0.',
  },
  {
    name: 'PyTorch',
    mark: 'Pt',
    color: '#dc5b47',
    area: 'Bildmodeller',
    detail: 'Använt i arbete med bildmodeller och medicinsk bildbehandling.',
  },
  {
    name: 'scikit-learn',
    mark: 'sk',
    color: '#2b8c9d',
    area: 'Maskininlärning',
    detail:
      'Modellutvärdering och klassificeringsmått som ROC-AUC, precision och recall.',
  },
  {
    name: 'LLM & RAG',
    mark: '✧',
    color: '#ad62a2',
    area: 'Generativ AI',
    detail:
      'LLM-baserad analys, agentflöden och RAG-liknande förklaringar under LIA på DeLorean.',
  },
  {
    name: 'Streamlit',
    mark: 'St',
    color: '#e85264',
    area: 'Dataappar',
    detail:
      'Interaktiva Python-gränssnitt för att utforska data och använda AI-funktioner, bland annat MediaSearch AI.',
  },
  {
    name: 'React',
    mark: '⚛',
    color: '#2298ae',
    area: 'Frontend',
    detail:
      'Den här portfolion är byggd med React och TypeScript. Jag utvecklar mina kunskaper genom att bygga.',
  },
  {
    name: 'Git',
    mark: '◇',
    color: '#ea634c',
    area: 'Versionshantering',
    detail:
      'Versionshantering av egna projekt med Git och GitHub, inklusive commit, push och arbete med .gitignore.',
  },
  {
    name: 'Docker',
    mark: '▤',
    color: '#2788c7',
    area: 'Containrar',
    detail:
      'Grundläggande arbete med containrar och Docker Compose. Jag har bland annat satt upp ett lokalt Spark-kluster.',
  },
]
export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">03 / MIN VERKTYGSLÅDA</span>
          <h2 id="skills-title">
            Kompetenser & teknik<span className="accent">.</span>
          </h2>
        </div>
        <p>
          Verktyg jag har arbetat med.
          <br />
          Tryck på ett kort för sammanhang.
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
              <small>{s.area}</small>
              <span className="skill-expand" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{s.detail}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
