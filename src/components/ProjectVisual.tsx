type Props = { id: string }

// TrafficVision visar en bild från en riktig körning; övriga motiv är illustrationer.
export default function ProjectVisual({ id }: Props) {
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
          <span className="traffic-video-label">▶ Se video</span>
        </>
      )}
      {id === 'media' && (
        <>
          <div className="waveform">
            {Array.from({ length: 33 }, (_, i) => (
              <i
                key={i}
                style={{ height: `${12 + ((i * 17 + i * i) % 59)}%` }}
              />
            ))}
          </div>
          <span className="search-orbit" />
          <span className="visual-caption">AUDIO → INSIGHT</span>
        </>
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
          <span className="scan-label">IMAGE CLASSIFICATION</span>
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
        <>
          <div className="lung left-lung" />
          <div className="lung right-lung" />
          <div className="heart-region" />
          <div className="scan-line" />
          <span className="visual-caption">SEGMENT → GENERATE</span>
        </>
      )}
      {id === 'agents' && (
        <>
          <div className="mini-dashboard">
            <div className="mini-header">
              <span />
              <span />
              <span />
            </div>
            <div className="dashboard-body">
              <div className="mini-sidebar" />
              <div className="mini-content">
                <div className="mini-metrics">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="mini-chart">
                  {[35, 55, 42, 70, 58, 85, 75].map((v, i) => (
                    <i key={i} style={{ height: `${v}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <span className="agent-bubble">✧</span>
        </>
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
