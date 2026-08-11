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
      className={`project-visual visual-noma ${compact ? "is-compact" : ""}`}
      role="img"
      aria-label="Noma care coordination service interface concept"
    >
      <div className="noma-copy"><span>NOMA CARE</span><strong>Your care,<br />clearly shared.</strong><small>ONE PLAN / THREE PERSPECTIVES</small></div>
      <div className="noma-phone">
        <div className="phone-bar" />
        <div className="noma-status"><span>Today</span><i>SX</i></div>
        <h3>Good morning, Sara.</h3>
        <p>Here is what matters today.</p>
        <div className="care-task done"><i>✓</i><div><span>08:00</span><strong>Morning medication</strong></div></div>
        <div className="care-task"><i>2</i><div><span>14:30</span><strong>Video appointment</strong></div></div>
        <div className="care-note"><span>CARE TEAM</span><strong>Everything is up to date.</strong></div>
      </div>
      <div className="noma-tag tag-one">PATIENT</div>
      <div className="noma-tag tag-two">CAREGIVER</div>
      <div className="noma-tag tag-three">PROFESSIONAL</div>
    </div>
  );
}
