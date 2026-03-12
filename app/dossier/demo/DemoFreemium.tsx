export default function DemoFreemium() {
  return (
    <div className="demo-container">
      {/* SIDEBAR */}
      <aside className="demo-sidebar">
        <div className="demo-sidebar-nav">
          <div className="demo-sidebar-logo">
            <span className="park">PARK</span>
            <span className="immo">IMMO</span>
          </div>
          <div className="demo-plan-badge">Gratuit</div>

          <div className="demo-sidebar-item active">
            <span>&#9679;</span> Dashboard
          </div>

          <div className="demo-section-title">Patrimoine</div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Mes biens
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Pr&ecirc;ts actifs
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>&middot;</span> Documents
            <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>

          <div className="demo-section-title">Gestion locative</div>
          {["Mes locations", "Baux", "Encaissements", "Quittances", "R\u00e9visions IRL"].map((item) => (
            <div key={item} className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
              <span>&middot;</span> {item}
              <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
            </div>
          ))}

          <div className="demo-section-title">Travaux</div>
          {["Chantiers", "Interventions", "Prestataires"].map((item) => (
            <div key={item} className="demo-sidebar-item locked" title="Disponible avec le plan Pro">
              <span>&middot;</span> {item}
              <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
            </div>
          ))}

          <div className="demo-section-title">Acquisition</div>
          {["Pipeline", "Commercialisation", "Sc\u00e9narios"].map((item) => (
            <div key={item} className="demo-sidebar-item locked" title="Disponible avec le plan Expert">
              <span>&middot;</span> {item}
              <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
            </div>
          ))}

          <div className="demo-section-title">Commun</div>
          <div className="demo-sidebar-item"><span>&middot;</span> Annuaire</div>
          <div className="demo-sidebar-item"><span>&middot;</span> Param&egrave;tres</div>
        </div>

        <div className="demo-sidebar-footer">
          Parkimmo v1.0 &middot; Gratuit &middot; Marie D.
        </div>
      </aside>

      {/* MAIN */}
      <div className="demo-main">
        <header className="demo-header">
          <div className="demo-header-left">
            <span className="demo-header-title">Dashboard</span>
            <span className="demo-header-badge">Gratuit</span>
          </div>
          <div className="demo-header-right">
            <button className="demo-search-btn" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <div className="demo-avatar">MD</div>
          </div>
        </header>

        <div className="demo-content">
          {/* Stats Grid - 1 bien, Marie 28 ans */}
          <div className="demo-stats-grid demo-anim demo-anim-d1">
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--sage)' }}>
              <div className="demo-stat-label">Biens</div>
              <div className="demo-stat-value">1 / 1 max</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--info)' }}>
              <div className="demo-stat-label">Valeur estim&eacute;e</div>
              <div className="demo-stat-value">145 000 &euro;</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--warning)' }}>
              <div className="demo-stat-label">Pr&ecirc;ts en cours</div>
              <div className="demo-stat-value">1</div>
              <div className="demo-stat-sub">Capital restant : 112 400 &euro;</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--muted)', opacity: 0.5 }}>
              <div className="demo-stat-label">Loyers</div>
              <div className="demo-stat-value">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <div className="demo-stat-sub">Module Essentiel requis</div>
            </div>
          </div>

          {/* Table: Mes biens - 1 seul bien */}
          <div className="demo-card demo-anim demo-anim-d2">
            <h3>Mes biens</h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Adresse</th>
                  <th>Type</th>
                  <th>Valeur</th>
                  <th>Pr&ecirc;t actif</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Studio Bastille</td>
                  <td className="td-sub">18 rue de Lappe, Paris 11e</td>
                  <td className="td-muted">Studio &middot; 22m&sup2;</td>
                  <td className="td-value">145 000 &euro;</td>
                  <td className="td-muted">Oui &mdash; CRD 112 400 &euro;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table: Prets actifs - enriched with more columns */}
          <div className="demo-card demo-anim demo-anim-d3">
            <h3>Pr&ecirc;ts actifs</h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Banque</th>
                  <th>Capital emprunt&eacute;</th>
                  <th>CRD</th>
                  <th>Mensualit&eacute;</th>
                  <th>Taux</th>
                  <th>Dur&eacute;e</th>
                  <th>Assurance empr.</th>
                  <th>Fin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Studio Bastille</td>
                  <td className="td-muted">Cr&eacute;dit Agricole</td>
                  <td className="td-value">120 000 &euro;</td>
                  <td className="td-value">112 400 &euro;</td>
                  <td className="td-value">580 &euro;</td>
                  <td className="td-muted">1,35%</td>
                  <td className="td-muted">25 ans</td>
                  <td className="td-muted">28 &euro;/mois (DC+PTIA)</td>
                  <td className="td-muted">Sept 2049</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Locked section: Rentabilite estimee */}
          <div className="demo-card demo-anim demo-anim-d4" style={{ opacity: 0.55, position: 'relative' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Rentabilit&eacute; estim&eacute;e
            </h3>
            <div style={{ textAlign: 'center', padding: '12px 0', fontSize: 12, color: 'var(--muted)' }}>
              Passez en Essentiel pour voir votre rendement brut, net, et cash-flow mensuel
            </div>
          </div>

          {/* Upgrade Banner */}
          <div className="demo-upgrade-banner demo-anim demo-anim-d5">
            <div className="demo-upgrade-text">
              Passez en <strong>Essentiel</strong> (19&euro;/mois) pour d&eacute;bloquer la gestion locative, le coffre-fort documentaire, les alertes et g&eacute;rer jusqu&apos;&agrave; 3 biens.
            </div>
            <button className="demo-upgrade-btn" type="button">
              D&eacute;couvrir le plan Essentiel &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
