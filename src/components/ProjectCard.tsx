
type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
}

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        <span>{title}</span>
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="project-tags">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visa på GitHub →
        </a>
      )}
    </article>
  )
}

export default ProjectCard
