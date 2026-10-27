import photo from '../assets/albin-about.jpg'
export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="about-photo">
        <img src={photo} alt="Albin sittande i en tv-studio" loading="lazy" />
        <span>
          Albin Kalatzis Forsberg
          <br />
          <small>Utvecklare. Problemlösare. Nyfiken.</small>
        </span>
      </div>
      <div className="about-copy">
        <span className="eyebrow">02 / MÄNNISKAN BAKOM KODEN</span>
        <h2 id="about-title">
          Praktisk problemlösare.
          <br />
          <span className="gradient-text">Ny riktning.</span> Samma driv.
        </h2>
        <p>
          Efter över sex år som elektriker och säkerhetstekniker bytte jag
          verktygslådan mot kod. Jag är van vid att felsöka, förstå hur saker
          hänger ihop och få lösningar att fungera i praktiken.
        </p>
        <p>
          2026 tog jag examen från AI-utvecklarutbildningen på Jensen YH i
          Stockholm. Under mina LIA-perioder på Nightingale Heart och DeLorean
          arbetade jag med medicinsk bildbehandling, AI-analys och
          automatiserade flöden.
        </p>
        <p>
          Nu söker jag min första roll efter utbildningen inom utveckling eller
          AI/ML. Jag tar med mig nyfikenhet, tålamod och viljan att fortsätta
          lära mig tillsammans med ett team.
        </p>
        <a className="text-link" href="#contact">
          Låt oss prata ↗
        </a>
      </div>
      <div className="about-values">
        <div>
          <span>✳</span>
          <h3>Nyfiken på tekniken</h3>
          <p>Jag vill förstå vad som händer bakom resultatet.</p>
        </div>
        <div>
          <span>⌘</span>
          <h3>Gillar att lösa problem</h3>
          <p>Från en trasig koppling till en pipeline som behöver felsökas.</p>
        </div>
        <div>
          <span>↗</span>
          <h3>Redo att utvecklas</h3>
          <p>Jag vill bidra, få feedback och lära mig av erfarna kollegor.</p>
        </div>
      </div>
    </section>
  )
}
