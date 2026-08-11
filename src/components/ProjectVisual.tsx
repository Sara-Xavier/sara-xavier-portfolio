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

  if (project.slug === "orbit") {
    return (
      <div
        className={`project-visual visual-orbit ${compact ? "is-compact" : ""}`}
        role="img"
        aria-label="Orbit operations analytics dashboard concept"
      >
        <div className="orbit-window">
          <aside>
            <b>O.</b>
            <span className="orbit-active" />
            <span />
            <span />
            <span />
          </aside>
          <div className="orbit-main">
            <header><span>OPERATIONS / OVERVIEW</span><b>LIVE</b></header>
            <div className="orbit-heading"><div><small>SYSTEM PULSE</small><strong>96.4%</strong></div><button tabIndex={-1}>Last 24 hours⌄</button></div>
            <div className="orbit-grid">
              <div className="orbit-chart">
                <span>THROUGHPUT</span>
                <div className="chart-line"><i /><i /><i /><i /><i /><i /><i /><i /></div>
                <div className="chart-axis"><span>08</span><span>12</span><span>16</span><span>20</span></div>
              </div>
              <div className="risk-card"><span>ATTENTION</span><strong>03</strong><small>signals need review</small></div>
            </div>
            <div className="incident-list">
              <div><i /><span>Distribution center — NE</span><b>Elevated</b></div>
              <div><i /><span>Carrier handoff latency</span><b>Watching</b></div>
              <div><i /><span>Inventory reconciliation</span><b>Stable</b></div>
            </div>
          </div>
        </div>
        <div className="visual-watermark">ORBIT / 02</div>
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
