import { useEffect, useState } from "react";
import { Locale, Project, projects } from "../content";
import { ProjectVisual } from "./ProjectVisual";
import { Theme, ThemeSwitch } from "./ThemeSwitch";

const labels = {
  en: {
    back: "Back to work",
    available: "Available for work",
    client: "Client project — pre-launch",
    concept: "Portfolio concept — demonstration data",
    overview: "Project overview",
    role: "Role",
    duration: "Duration",
    scope: "Scope",
    context: "01 — Context",
    challenge: "02 — Challenge",
    discovery: "03 — Discovery",
    discoveryTitle: "Finding the decision beneath the request.",
    discoveryCopy: "The discovery plan combined lightweight interviews, journey mapping, competitive review, and assumption testing. The goal was not to collect artifacts—it was to expose the moments where confidence broke down.",
    methods: ["Interview synthesis", "Journey mapping", "Assumption matrix", "Concept testing"],
    insight: "04 — Key insight",
    direction: "05 — Product direction",
    flow: "06 — Core flow",
    flowTitle: "One primary path, with detail on demand.",
    flowSteps: ["Signal", "Understand", "Choose", "Confirm"],
    system: "07 — Design system",
    systemTitle: "A small visual language built for clarity.",
    systemCopy: "The system uses restrained color, decisive type hierarchy, and repeatable interaction patterns. Every component earns its place by reducing interpretation time.",
    finalUi: "08 — Final interface",
    outcome: "09 — Outcome",
    outcomeTitle: "A clearer product story and a more focused experience.",
    learning: "10 — Learning",
    next: "Next project",
    prototype: "Prototype coming soon",
    note: "This is a self-initiated concept. Research details and outcomes are demonstration content and will be replaced with Sara’s real project evidence.",
  },
  pt: {
    back: "Voltar aos projetos",
    available: "Disponível para trabalho",
    client: "Projeto para cliente — pré-lançamento",
    concept: "Conceito de portfólio — dados demonstrativos",
    overview: "Visão geral do projeto",
    role: "Papel",
    duration: "Duração",
    scope: "Escopo",
    context: "01 — Contexto",
    challenge: "02 — Desafio",
    discovery: "03 — Descoberta",
    discoveryTitle: "Encontrando a decisão por trás do pedido.",
    discoveryCopy: "O plano de descoberta combinou entrevistas leves, mapeamento de jornada, análise competitiva e teste de suposições. O objetivo não era colecionar artefatos, mas revelar os momentos em que a confiança se perdia.",
    methods: ["Síntese de entrevistas", "Mapa de jornada", "Matriz de suposições", "Teste de conceito"],
    insight: "04 — Insight principal",
    direction: "05 — Direção de produto",
    flow: "06 — Fluxo principal",
    flowTitle: "Um caminho principal, com detalhes sob demanda.",
    flowSteps: ["Sinal", "Entender", "Escolher", "Confirmar"],
    system: "07 — Design system",
    systemTitle: "Uma linguagem visual compacta feita para clareza.",
    systemCopy: "O sistema usa cores contidas, hierarquia tipográfica decisiva e padrões de interação reutilizáveis. Cada componente conquista seu lugar reduzindo o tempo de interpretação.",
    finalUi: "08 — Interface final",
    outcome: "09 — Resultado",
    outcomeTitle: "Uma história de produto mais clara e uma experiência mais focada.",
    learning: "10 — Aprendizado",
    next: "Próximo projeto",
    prototype: "Protótipo em breve",
    note: "Este é um conceito autoral. Os detalhes de pesquisa e resultados são conteúdo demonstrativo e serão substituídos pelas evidências dos projetos reais de Sara.",
  },
} as const;

export function CaseStudy({
  project,
  theme,
  onThemeChange,
}: {
  project: Project;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}) {
  const [locale, setLocale] = useState<Locale>("en");
  const t = labels[locale];
  const detail = project.caseDetail;
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

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
    <main className={`case-page theme-${project.theme}`}>
      <header className="case-header shell">
        <a href="#work" className="back-link">← {t.back}</a>
        <a href="#top" className="wordmark">SARA XAVIER<span>®</span></a>
        <div className="header-tools">
          <ThemeSwitch theme={theme} onChange={onThemeChange} />
          <div className="language-switch" aria-label="Language / Idioma">
            <button type="button" aria-pressed={locale === "en"} onClick={() => changeLocale("en")}>EN</button><span>/</span>
            <button type="button" aria-pressed={locale === "pt"} onClick={() => changeLocale("pt")}>PT</button>
          </div>
          <div className="availability"><i />{t.available}</div>
        </div>
      </header>

      <article>
        <section className="case-hero shell">
          <div className="case-kicker mono"><span>[SX.{project.index}]</span><span>{project.category[locale]}</span><span>{project.dateLabel?.[locale] ?? project.year}</span></div>
          <span className="demo-pill">{project.kind === "client" ? t.client : t.concept}</span>
          <h1>{project.title[locale]}</h1>
          <p>{project.summary[locale]}</p>
        </section>

        <section className="case-visual shell-wide"><ProjectVisual project={project} compact /></section>

        <section className="case-facts shell">
          <span className="section-label mono">{t.overview}</span>
          <dl>
            <div><dt>{t.role}</dt><dd>{project.role[locale]}</dd></div>
            <div><dt>{t.duration}</dt><dd>{project.duration[locale]}</dd></div>
            <div><dt>{t.scope}</dt><dd>{project.tags.map((tag) => tag[locale]).join(" / ")}</dd></div>
          </dl>
        </section>

        <section className="case-narrative shell">
          <div className="narrative-block"><span className="section-label mono">{t.context}</span><p>{project.context[locale]}</p></div>
          <div className="narrative-block offset"><span className="section-label mono">{t.challenge}</span><p>{project.challenge[locale]}</p></div>
        </section>

        <blockquote className="case-quote shell"><span>“</span>{project.quote[locale]}</blockquote>

        <section className="discovery-section shell">
          <span className="section-label mono">{t.discovery}</span>
          <div className="case-two-col"><h2>{detail?.discoveryTitle[locale] ?? t.discoveryTitle}</h2><p>{detail?.discoveryCopy[locale] ?? t.discoveryCopy}</p></div>
          <div className="method-grid">{(detail?.methods.map((method) => method[locale]) ?? t.methods).map((method, index) => <div key={method}><span className="mono">0{index + 1}</span><strong>{method}</strong></div>)}</div>
        </section>

        <section className="insight-section">
          <div className="shell insight-grid">
            <span className="section-label mono">{t.insight}</span>
            <p>{project.insight[locale]}</p>
          </div>
        </section>

        <section className="direction-section shell">
          <span className="section-label mono">{t.direction}</span>
          <p>{project.decision[locale]}</p>
        </section>

        <section className="flow-section shell-wide">
          <div className="shell flow-head"><span className="section-label mono">{t.flow}</span><h2>{detail?.flowTitle[locale] ?? t.flowTitle}</h2></div>
          <div className="flow-diagram shell">
            {(detail?.flowSteps.map((step) => step[locale]) ?? t.flowSteps).map((step, index, steps) => <div key={step}><span className="mono">0{index + 1}</span><strong>{step}</strong>{index < steps.length - 1 && <i>→</i>}</div>)}
          </div>
        </section>

        <section className="system-section shell">
          <span className="section-label mono">{t.system}</span>
          <div className="case-two-col"><h2>{detail?.systemTitle[locale] ?? t.systemTitle}</h2><p>{detail?.systemCopy[locale] ?? t.systemCopy}</p></div>
          <div className="system-board">
            <div className="type-sample"><span>TYPE / 01</span><strong>Aa</strong><small>Geist / Product clarity</small></div>
            <div className="color-sample"><span>COLOR / 02</span><div><i /><i /><i /><i /></div></div>
            <div className={`component-sample ${project.slug === "chatadv" ? "materialize-components" : ""}`}>
              <span>COMPONENT / 03</span>
              {project.slug === "chatadv" ? (
                <div className="materialize-showcase" aria-hidden="true">
                  <button className="mat-button mat-raised" tabIndex={-1}><i>＋</i>{locale === "pt" ? "Criar documento" : "Create document"}</button>
                  <button className="mat-button mat-fab" tabIndex={-1}>＋</button>
                  <button className="mat-button mat-flat" tabIndex={-1}>{locale === "pt" ? "Ver histórico" : "View history"}</button>
                  <small>RAISED / FLAT / FLOATING</small>
                </div>
              ) : (
                <><button tabIndex={-1}>Primary action <i>→</i></button><button className="secondary" tabIndex={-1}>Secondary</button></>
              )}
            </div>
          </div>
        </section>

        <section className="final-ui-section shell-wide">
          <div className="shell"><span className="section-label mono">{t.finalUi}</span></div>
          <ProjectVisual project={project} compact />
        </section>

        <section className="outcome-section shell">
          <span className="section-label mono">{t.outcome}</span>
          <div className="outcome-grid"><div><strong>{project.metric}</strong><span>{project.metricLabel[locale]}</span></div><div><h2>{detail?.outcomeTitle[locale] ?? t.outcomeTitle}</h2><p>{project.outcome[locale]}</p></div></div>
        </section>

        <section className="learning-section shell"><span className="section-label mono">{t.learning}</span><p>{project.learning[locale]}</p><small>{detail?.note[locale] ?? t.note}</small></section>

        <section className="next-project">
          <a href={`#/work/${nextProject.slug}`} className="shell"><span className="mono">{t.next} / {nextProject.index}</span><strong>{nextProject.name}</strong><i>↗</i></a>
        </section>
      </article>
    </main>
  );
}
