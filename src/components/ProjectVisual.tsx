import type { Project } from "../content";

export function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  if (project.slug === "luma") {
    return (
      <div
        className={`project-visual visual-luma ${compact ? "is-compact" : ""}`}
        role="img"
        aria-label="Luma personal finance mobile interface concept"
      >
        <div className="visual-watermark">LUMA / 01</div>
        <div className="phone phone-back">
          <div className="phone-bar" />
          <span className="ui-kicker">WEEKLY PULSE</span>
          <strong>Everything is on track.</strong>
          <div className="pulse-ring"><span>82</span></div>
          <div className="mini-row"><i /><i /><i /><i /></div>
        </div>
        <div className="phone phone-front">
          <div className="phone-bar" />
          <div className="avatar-row"><span>SX</span><i /></div>
          <p>Good morning, Sara</p>
          <strong className="balance">R$ 4,820</strong>
          <small>SAFE TO USE THIS MONTH</small>
          <div className="luma-card">
            <span>Next best step</span>
            <strong>Move R$ 240 to your goal</strong>
            <button tabIndex={-1}>Review →</button>
          </div>
          <div className="transaction"><i /><span>Home</span><b>42%</b></div>
          <div className="transaction"><i /><span>Everyday</span><b>31%</b></div>
        </div>
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
