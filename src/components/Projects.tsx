import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectVisual from './ProjectVisual'

export default function Projects() {
  const [filter, setFilter] = useState('Alla')
  const [selected, setSelected] = useState<Project | null>(null)
  const dialog = useRef<HTMLDialogElement>(null)
  function openProject(project: Project) {
    setSelected(project)
    dialog.current?.showModal()
  }
  return (
    <section
      id="projects"
      className="projects section"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">01 / FRÅN IDÉ TILL KOD</span>
          <h2 id="projects-title">
            Utvalda projekt<span className="accent">.</span>
          </h2>
        </div>
        <p>
          Egna experiment och verkliga
          <br />
          utmaningar från mina LIA-perioder.
        </p>
      </div>
      <div className="project-filters" aria-label="Filtrera projekt">
        {['Alla', 'Eget projekt', 'LIA-projekt'].map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item === 'Eget projekt' ? 'Egna projekt' : item}
            <span>
              {item === 'Alla'
                ? projects.length
                : projects.filter((p) => p.category === item).length}
            </span>
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => filter === 'Alla' || p.category === filter)
          .map((p) => (
            <ProjectCard key={p.id} project={p} onSelect={openProject} />
          ))}
      </div>
      <dialog
        ref={dialog}
        onClose={() => dialog.current?.querySelector('video')?.pause()}
        className="project-dialog"
        aria-labelledby="dialog-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close()
        }}
      >
        {selected && (
          <>
            <button
              className="dialog-close"
              onClick={() => dialog.current?.close()}
              aria-label="Stäng projektdetaljer"
            >
              ✕
            </button>
            {selected.videoUrl ? (
              <figure className="project-video">
                <video
                  key={selected.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  poster={selected.posterUrl}
                  aria-label="TrafficVision: förinspelad AI-analys av trafik"
                >
                  <source src={selected.videoUrl} type="video/mp4" />
                  Din webbläsare stöder inte videouppspelning.
                </video>
                <figcaption>
                  Förinspelad modellanalys · 12 sekunder. Källa:{' '}
                  <a
                    href="https://supervision.roboflow.com/latest/assets/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Roboflow Supervision
                  </a>
                  .
                </figcaption>
              </figure>
            ) : (
              <ProjectVisual id={selected.id} />
            )}
            <div className="dialog-content">
              <span className="eyebrow">
                {selected.category} / {selected.label}
              </span>
              <h2 id="dialog-title">{selected.title}</h2>
              <div className="project-tags">
                {selected.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <h3>Utmaningen</h3>
              <p>{selected.problem}</p>
              <h3>Så arbetade jag</h3>
              <p>{selected.approach}</p>
              <h3>Resultat & lärdomar</h3>
              <p>{selected.takeaway}</p>
              {selected.downloadUrl && (
                <a className="btn-primary" href={selected.downloadUrl} download>
                  Ladda ner projektet ↓
                </a>
              )}
              {selected.downloadUrl && (
                <p className="project-run-note">
                  Videon kan ses direkt här. För att analysera exempelvideon
                  eller ett eget klipp, kör Python-appen lokalt enligt
                  instruktionerna i ZIP-filen.
                </p>
              )}
              {selected.githubUrl && (
                <a
                  className="btn-primary"
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Utforska koden på GitHub ↗
                </a>
              )}
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}
