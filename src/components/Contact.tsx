export default function Contact() {
  return (
    <section
      id="contact"
      className="contact section"
      aria-labelledby="contact-title"
    >
      <div>
        <span className="eyebrow">04 / NÄSTA KAPITEL</span>
        <h2 id="contact-title">
          Ska vi bygga
          <br />
          något tillsammans?
        </h2>
        <p>
          Jag söker min första roll efter utbildningen inom
          <br className="desktop-break" /> utveckling eller AI/ML i Stockholm.
          Hör gärna av dig!
        </p>
      </div>
      <div className="contact-links">
        <a href="mailto:albin.kforsberg@gmail.com">
          <span className="contact-icon">✉</span>
          <div>
            <small>SKRIV ETT MEJL</small>
            <strong>albin.kforsberg@gmail.com</strong>
          </div>
          <span aria-hidden="true">↗</span>
        </a>
        <a
          href="https://github.com/Abbekf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-icon">⌘</span>
          <div>
            <small>UTFORSKA MIN KOD</small>
            <strong>github.com/Abbekf</strong>
          </div>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
