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
            src="/projects/trafficvision/preview.jpg"
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
        <>
          <div className="scan-grid" />
          <div className="scan-target">
            <div />
            <i />
            <i />
            <i />
            <i />
          </div>
          <span className="scan-label">{t('visual.image')}</span>
          <div className="scan-progress">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </>
      )}
      {id === 'cardiac' && (
        <img
          src="/projects/cardiac/cardiac-inpainting.png"
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
        <>
          <div className="audit-sheet">
            <span />
            <span />
            <span />
            <div>
              ✓ <i />
            </div>
            <div>
              ✓ <i />
            </div>
            <div>
              ✓ <i />
            </div>
          </div>
          <div className="access-person">♿</div>
        </>
      )}
    </div>
  )
}
