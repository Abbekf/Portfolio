
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: "MediaSearch AI",
    description: "Semantisk sökning i ljud- och videotranskriptioner med AI.",
    technologies: ["Python", "Streamlit", "NLP"],
    githubUrl: "https://github.com/Abbekf/MediaSearch-ai"
  },
  {
    id: 2,
    title: "Melanoma Classifier",
    description: "Klassificering av hudförändringar med deep learning.",
    technologies: ["TensorFlow", "EfficientNet", "Computer Vision"],
    githubUrl: "https://github.com/Abbekf/Melanoma-classifier"
  },
  {
    id: 3,
    title: "Cardiac Inpainting",
    description: "AI-genererade kontrafaktiska medicinska bilder.",
    technologies: ["Python", "Stable Diffusion", "U-Net"]
  },
  {
    id: 4,
    title: "AI Competitor Analysis",
    description: "Automatiserad konkurrentbevakning med AI-agenter.",
    technologies: ["Python", "LLM", "Agents"]
  },
  {
    id: 5,
    title: "Accessibility Audit",
    description: "Automatiserad analys av webbplatsers tillgänglighet.",
    technologies: ["Python", "WCAG", "RAG"]
  }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Utvalda projekt</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
