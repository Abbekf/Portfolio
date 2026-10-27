import type { Project } from '../data/projects'
import ProjectVisual from './ProjectVisual'

type Props = { project: Project; onSelect: (project: Project) => void }
export default function ProjectCard({ project, onSelect }: Props) {
  return (
    <article className="project-card">
      <ProjectVisual id={project.id} />
      <div className="project-body">
        <span className="project-label">{project.label}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <button onClick={() => onSelect(project)}>
            {project.videoUrl ? 'Se video & projekt' : 'Läs om projektet'}{' '}
            <span aria-hidden="true">↗</span>
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} på GitHub`}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
