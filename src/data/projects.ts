export type Project = {
  id: string
  title: string
  titleKey?: string
  category: 'personal' | 'internship'
  label: string
  description: string
  technologies: string[]
  videoUrl?: string
  posterUrl?: string
  downloadUrl?: string
  githubUrl?: string
  problem: string
  approach: string
  takeaway: string
}

export const projects: Project[] = [
  {
    id: 'trafficvision',
    title: 'TrafficVision',
    category: 'personal',
    label: 'projectContent.trafficvision.label',
    description:
      'projectContent.trafficvision.description',
    technologies: ['Python', 'YOLO11', 'ByteTrack', 'Streamlit'],
    videoUrl: '/projects/trafficvision/demo.mp4',
    posterUrl: '/projects/trafficvision/preview.jpg',
    githubUrl: 'https://github.com/Abbekf/TrafficVision',
    problem:
      'projectContent.trafficvision.problem',
    approach:
      'projectContent.trafficvision.approach',
    takeaway:
      'projectContent.trafficvision.takeaway',
  },
  {
    id: 'media',
    title: 'MediaSearch AI',
    category: 'personal',
    label: 'projectContent.media.label',
    description:
      'projectContent.media.description',
    technologies: ['Python', 'Whisper', 'Streamlit'],
    githubUrl: 'https://github.com/Abbekf/MediaSearch-ai',
    problem:
      'projectContent.media.problem',
    approach:
      'projectContent.media.approach',
    takeaway:
      'projectContent.media.takeaway',
  },
  {
    id: 'melanoma',
    title: 'Melanoma Classifier',
    category: 'personal',
    label: 'projectContent.melanoma.label',
    description:
      'projectContent.melanoma.description',
    technologies: ['TensorFlow', 'EfficientNetB0', 'Grad-CAM'],
    githubUrl: 'https://github.com/Abbekf/Melanoma-classifier',
    problem:
      'projectContent.melanoma.problem',
    approach:
      'projectContent.melanoma.approach',
    takeaway:
      'projectContent.melanoma.takeaway',
  },
  {
    id: 'cardiac',
    title: 'Cardiac Inpainting',
    githubUrl: 'https://github.com/Abbekf/cardiac-inpainting',
    category: 'internship',
    label: 'projectContent.cardiac.label',
    description:
      'projectContent.cardiac.description',
    technologies: ['U-Net', 'Stable Diffusion', 'Python'],
    problem:
      'projectContent.cardiac.problem',
    approach:
      'projectContent.cardiac.approach',
    takeaway:
  'projectContent.cardiac.takeaway',
  },
  {
    id: 'agents',
    title: 'Konkurrentanalys med AI',
    titleKey: 'projectContent.agents.title',
    category: 'internship',
    label: 'projectContent.agents.label',
    description:
      'projectContent.agents.description',
    technologies: ['Python', 'LLM', 'AI-agenter'],
    problem:
      'projectContent.agents.problem',
    approach:
      'projectContent.agents.approach',
    takeaway:
      'projectContent.agents.takeaway',
  },
  {
    id: 'accessibility',
    title: 'Accessibility Audit',
    titleKey: 'projectContent.accessibility.title',
    category: 'internship',
    label: 'projectContent.accessibility.label',
    description:
      'projectContent.accessibility.description',
    technologies: ['Python', 'axe-core', 'RAG'],
    problem:
      'projectContent.accessibility.problem',
    approach:
      'projectContent.accessibility.approach',
    takeaway:
      'projectContent.accessibility.takeaway',
  },
]
