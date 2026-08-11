import type { Project } from "../content";

export function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  if (project.slug === "chatadv") {
    return (
      <div
        className={`project-visual visual-chatadv ${compact ? "is-compact" : ""}`}
        role="img"
        aria-label="ChatADV dashboard interface, a legal AI workspace"
      >
        <div className="chatadv-grid" />
        <div className="chatadv-real-stage">
          <aside className="chatadv-brand-panel">
            <img src="projects/chatadv/logo.png" alt="" />
            <span>PLATAFORMA SAAS PARA ADVOCACIA</span>
            <strong>Ferramentas jurídicas reunidas em um só workspace.</strong>
            <div>
              <small>IA JURÍDICA</small>
              <small>PRODUTIVIDADE</small>
              <small>AUTOMAÇÃO</small>
            </div>
          </aside>
          <div className="chatadv-screen-shell">
            <div className="chatadv-browser-bar"><i /><i /><i /><span>CHATADV / DASHBOARD</span></div>
            <img src="projects/chatadv/dashboard.png" alt="" />
          </div>
        </div>
        <div className="visual-watermark">CHATADV / CASE 01 / INTERFACE REAL</div>
      </div>
    );
  }

  if (project.slug === "levite") {
    return (
      <div
        className={`project-visual visual-levite ${compact ? "is-compact" : ""}`}
        role="img"
        aria-label="Real screens from the Instituto Levité institutional website"
      >
        <div className="levite-grid" />
        <div className="levite-main-screen">
          <div className="levite-browser-bar"><i /><i /><i /><span>INSTITUTO LEVITÉ / HOME</span></div>
          <img src="projects/levite/home.png" alt="" />
        </div>
        <div className="levite-detail-stack" aria-hidden="true">
          <div><img src="projects/levite/founder.png" alt="" /></div>
          <div className="levite-detail-pair">
            <img src="projects/levite/institute.png" alt="" />
            <img src="projects/levite/specialties.png" alt="" />
          </div>
        </div>
        <div className="levite-logo-card">
          <img src="projects/levite/logo.png" alt="" />
          <span>SITE INSTITUCIONAL / SAÚDE &amp; BEM-ESTAR</span>
        </div>
        <div className="visual-watermark">LEVITÉ / CASE 02 / TELAS REAIS</div>
      </div>
    );
  }

  return (
    <div
      className={`project-visual visual-yey ${compact ? "is-compact" : ""}`}
      role="img"
      aria-label="Yey Digital institutional website proposal"
    >
      <div className="yey-grid" />
      <div className="yey-screen">
        <div className="yey-browser-bar"><i /><i /><i /><span>YEY DIGITAL / INSTITUCIONAL</span></div>
        <img src="projects/yey/home.png" alt="" />
      </div>
      <div className="yey-brand-crop" aria-hidden="true">
        <span>BRAND OBJECT / 01</span>
        <img src="projects/yey/home.png" alt="" />
      </div>
      <div className="yey-copy-card">
        <span>SOFTWARE HOUSE / DIGITAL PRODUCTS</span>
        <strong>Conectando ideias,<br />criando realidades.</strong>
      </div>
      <div className="visual-watermark">YEY / CASE 03 / PROPOSTA NÃO IMPLEMENTADA</div>
    </div>
  );
}
