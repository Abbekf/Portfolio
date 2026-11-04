import { useTranslation } from 'react-i18next'
type Props = { id: string }

// Projektbilder och illustrationer delar samma ram i kort och projektdialog.
export default function ProjectVisual({ id }: Props) {
  const { t } = useTranslation()
  return (
    <div className={`project-visual visual-${id}`} aria-hidden="true">
      {id === 'trafficvision' && (
        <>
          <img
            className="traffic-thumbnail"
            src="/projects/trafficvision/trafficvision-portfolio.png"
            alt=""
            loading="lazy"
          />
          <span className="traffic-video-label">{t('visual.video')}</span>
        </>
      )}
      {id === 'media' && (
        <img
          src="/projects/mediasearch/mediasearch.png"
          alt=""
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      {id === 'melanoma' && (
        <img
          src="/projects/melanoma-classifier/melanoma-classifier.png"
          alt=""
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      {id === 'cardiac' && (
        <img
          src="/projects/cardiac/cardiac-inpainting-portfolio.png"
          alt=""
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      )}
      {id === 'agents' && (
        <img
          src="/projects/competitor/competitor.png"
          alt=""
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
      {id === 'accessibility' && (
        <img
          src="/projects/accessibility/accessibility.png"
          alt=""
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      )}
    </div>
  )
}
