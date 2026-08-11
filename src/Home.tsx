import { useEffect, useState } from "react";
import { ProjectVisual } from "./components/ProjectVisual";
import { Theme, ThemeSwitch } from "./components/ThemeSwitch";
import { Locale, projects, ui } from "./content";

function LanguageSwitch({ locale, onChange }: { locale: Locale; onChange: (locale: Locale) => void }) {
  return (
    <div className="language-switch" aria-label="Language / Idioma">
      <button type="button" aria-pressed={locale === "en"} onClick={() => onChange("en")}>EN</button>
      <span>/</span>
      <button type="button" aria-pressed={locale === "pt"} onClick={() => onChange("pt")}>PT</button>
    </div>
  );
}

export default function Home({
  theme,
  onThemeChange,
}: {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}) {
  const [locale, setLocale] = useState<Locale>("en");
  const t = ui[locale];

  useEffect(() => {
    const saved = window.localStorage.getItem("sx-locale");
    if (saved === "pt" || saved === "en") setLocale(saved);
  }, []);

  const changeLocale = (next: Locale) => {
    setLocale(next);
    window.localStorage.setItem("sx-locale", next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
  };

  return (
    <main>
      <a className="skip-link" href="#work">Skip to selected work</a>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Sara Xavier — Home">SARA XAVIER<span>®</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">{t.navWork}</a>
          <a href="#about">{t.navAbout}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
        <div className="header-tools">
          <ThemeSwitch theme={theme} onChange={onThemeChange} />
          <LanguageSwitch locale={locale} onChange={changeLocale} />
          <div className="availability"><i />{t.available}</div>
        </div>
      </header>

      <section className="hero shell" id="top" aria-labelledby="hero-title">
        <div className="hero-meta mono"><span>{t.eyebrow}</span><span>{t.location}</span></div>
        <h1 id="hero-title"><span>{t.heroA}</span><span>{t.heroB}</span><span className="accent">{t.heroAccent}</span></h1>
        <div className="hero-foot">
          <p>{t.heroSupport}</p>
          <a href="#work" className="down-link"><span>{t.scroll}</span><i>↓</i></a>
        </div>
      </section>

      <section className="work-section shell" id="work" aria-labelledby="work-title">
        <div className="section-intro">
          <span className="section-label mono">{t.selectedEyebrow}</span>
          <h2 id="work-title">{t.selectedTitle}</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-meta mono">
                <span>[SX.{project.index}]</span>
                <span>{project.category[locale]}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-heading">
                <div><span className="demo-pill">{t.demoNote}</span><h3>{project.name}</h3></div>
                <p>{project.summary[locale]}</p>
              </div>
              <a href={`#/work/${project.slug}`} className="project-link" aria-label={`${t.viewCase}: ${project.name}`}>
                <ProjectVisual project={project} />
                <span className="view-project">{t.viewCase} <i>↗</i></span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section" id="about" aria-labelledby="approach-title">
        <div className="shell approach-grid">
          <span className="section-label mono">{t.approachEyebrow}</span>
          <div className="approach-copy">
            <h2 id="approach-title">{t.approachTitle}</h2>
            <p>{t.approachIntro}</p>
          </div>
          <div className="approach-list">
            {t.approach.map(([name, description], index) => (
              <div className="approach-item" key={name}>
                <span className="mono">0{index + 1}</span><h3>{name}</h3><p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section shell" aria-labelledby="capabilities-title">
        <span className="section-label mono">{t.capabilitiesEyebrow}</span>
        <div className="capabilities-head"><h2 id="capabilities-title">{t.capabilitiesTitle}</h2><span className="capabilities-mark">SX—08</span></div>
        <div className="capability-cloud">
          {t.capabilities.map((capability, index) => <span key={capability}><i>0{index + 1}</i>{capability}</span>)}
        </div>
      </section>

      <section className="about-section shell" aria-labelledby="about-title">
        <span className="section-label mono">{t.aboutEyebrow}</span>
        <div className="about-layout">
          <h2 id="about-title">{t.aboutTitle}</h2>
          <p>{t.aboutCopy}</p>
          <div className="about-stamp"><span>SX</span><small>NATAL<br />BRASIL<br />2026</small></div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="shell">
          <span className="section-label mono">{t.footerEyebrow}</span>
          <h2><span>{t.footerTitleA}</span><span className="accent">{t.footerTitleB}</span></h2>
          <div className="contact-row"><span>{t.contactSoon}</span><span>LINKEDIN</span><span>BEHANCE</span></div>
          <div className="footer-bottom mono"><span>{t.rights}</span><span>PRODUCT / UI UX DESIGN</span><a href="#top">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
