import { useTranslation } from 'react-i18next'
import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectVisual from './ProjectVisual'

export default function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('all')
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
          <span className="eyebrow">{t('projects.eyebrow')}</span>
          <h2 id="projects-title">
            {t('projects.title')}<span className="accent">.</span>
          </h2>
        </div>
        <p>
          {t('projects.intro')}{' '}
          <br />
          {t('projects.introDetail')}
        </p>
      </div>
      <div className="project-filters" aria-label={t('projects.filter')}>
        {['all', 'personal', 'internship'].map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {t(`categories.${item}`)}
            <span>
              {item === 'all'
                ? projects.length
                : projects.filter((p) => p.category === item).length}
            </span>
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects
          .filter((p) => filter === 'all' || p.category === filter)
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
              aria-label={t('projects.close')}
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
                  aria-label={t('projects.videoLabel')}
                >
                  <source src={selected.videoUrl} type="video/mp4" />
                  {t('projects.videoUnsupported')}
                </video>
                <figcaption>
                  {t('projects.videoCaption')}{' '}
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
                {t(`category.${selected.category}`)} / {t(selected.label)}
              </span>
              <h2 id="dialog-title">{selected.title}</h2>
              <div className="project-tags">
                {selected.technologies.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <h3>{t('projects.problem')}</h3>
              <p>{t(selected.problem)}</p>
              <h3>{t('projects.approach')}</h3>
              <p>{t(selected.approach)}</p>
              <h3>{t('projects.takeaway')}</h3>
              <p>{t(selected.takeaway)}</p>
              {selected.downloadUrl && (
                <a className="btn-primary" href={selected.downloadUrl} download>
                  {t('projects.download')}
                </a>
              )}
              {selected.downloadUrl && (
                <p className="project-run-note">
                  {t('projects.runNote')}
                </p>
              )}
              {selected.githubUrl && (
                <a
                  className="btn-primary"
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('projects.github')}
                </a>
              )}
            </div>
          </>
        )}
      </dialog>
    </section>
  )
}
