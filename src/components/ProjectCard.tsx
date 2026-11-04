import { useTranslation } from 'react-i18next'
import type { Project } from '../data/projects'
import ProjectVisual from './ProjectVisual'

type Props = { project: Project; onSelect: (project: Project) => void }
export default function ProjectCard({ project, onSelect }: Props) {
  const { t } = useTranslation()
  const title = project.titleKey ? t(project.titleKey) : project.title
  return (
    <article className="project-card">
      <ProjectVisual id={project.id} />
      <div className="project-body">
        <span className="project-label">{t(project.label)}</span>
        <h3>{title}</h3>
        <p>{t(project.description)}</p>
        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <button onClick={() => onSelect(project)}>
            {t(project.videoUrl ? 'projects.watch' : 'projects.read')}{' '}
            <span aria-hidden="true">↗</span>
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('projects.githubLabel', { title })}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
