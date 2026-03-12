export default function DemoEssentiel() {
  return (
    <div className="demo-container">
      {/* ── SIDEBAR ── */}
      <aside className="demo-sidebar">
        <div className="demo-sidebar-logo">
          <span className="park">PARK</span>
          <span className="immo">IMMO</span>
        </div>
        <div className="demo-plan-badge">Essentiel · 19€</div>

        <nav className="demo-sidebar-nav">
          {/* Dashboard */}
          <div className="demo-sidebar-item active">
            <span>●</span> Dashboard
          </div>

          {/* Section Patrimoine */}
          <div className="demo-section-title">Patrimoine</div>
          <div className="demo-sidebar-item">
            <span>·</span> Mes biens
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Prêts actifs
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Documents
          </div>

          {/* Section Gestion locative */}
          <div className="demo-section-title">Gestion locative</div>
          <div className="demo-sidebar-item">
            <span>·</span> Mes locations
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Baux
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Encaissements
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Quittances
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Révisions IRL
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Alertes
            <span className="alert-badge">3</span>
          </div>

          {/* Section Travaux */}
          <div className="demo-section-title">Travaux</div>
          <div className="demo-sidebar-item locked">
            <span>·</span> Chantiers <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>·</span> Interventions <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>·</span> Prestataires <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,.3)', padding: '2px 18px 0', fontStyle: 'italic' }}>
            Disponible avec le plan Pro
          </div>

          {/* Section Acquisition */}
          <div className="demo-section-title">Acquisition</div>
          <div className="demo-sidebar-item locked">
            <span>·</span> Pipeline <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>·</span> Commercialisation <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>·</span> Scénarios <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,.3)', padding: '2px 18px 0', fontStyle: 'italic' }}>
            Disponible avec le plan Pro
          </div>

          {/* Section Commun */}
          <div className="demo-section-title">Commun</div>
          <div className="demo-sidebar-item">
            <span>·</span> Annuaire
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Événements
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Alertes
            <span className="alert-badge">3</span>
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Paramètres
          </div>
        </nav>

        <div className="demo-sidebar-footer">
          Parkimmo v1.0 · Essentiel · Sheana K.
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="demo-main">
        {/* Header */}
        <header className="demo-header">
          <div className="demo-header-left">
            <span className="demo-header-title">Dashboard</span>
            <span className="demo-header-badge">Essentiel</span>
          </div>
          <div className="demo-header-right">
            <button className="demo-search-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></button>
            <div className="demo-avatar">SK</div>
          </div>
        </header>

        {/* Content */}
        <div className="demo-content">
          {/* Stats Grid */}
          <div className="demo-stats-grid demo-anim demo-anim-d1">
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--sage)' }}>
              <div className="demo-stat-label">Biens</div>
              <div className="demo-stat-value">3 / 3 max</div>
              <div className="demo-stat-sub">Limite du plan Essentiel</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--success)' }}>
              <div className="demo-stat-label">Loyers mensuels</div>
              <div className="demo-stat-value">1 540 €</div>
              <div className="demo-stat-sub">2 biens loués · 0 impayé</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--purple)' }}>
              <div className="demo-stat-label">Rendement brut moyen</div>
              <div className="demo-stat-value">5,8%</div>
              <div className="demo-stat-sub">Pondéré sur les biens locatifs</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--warning)' }}>
              <div className="demo-stat-label">Prochaine échéance</div>
              <div className="demo-stat-value">18 mars</div>
              <div className="demo-stat-sub">Renouvellement PNO Studio</div>
            </div>
          </div>

          {/* Table 1: Mes biens */}
          <div className="demo-card demo-anim demo-anim-d2">
            <h3>Mes biens</h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Adresse</th>
                  <th>Type</th>
                  <th>Statut locatif</th>
                  <th>Loyer</th>
                  <th>Locataire</th>
                  <th>Bail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Résidence principale</td>
                  <td className="td-sub">12 rue des Lilas, Paris 11e</td>
                  <td className="td-sub">T3 · 68m²</td>
                  <td><span className="badge badge-info">RP</span></td>
                  <td className="td-muted">—</td>
                  <td className="td-muted">—</td>
                  <td className="td-muted">—</td>
                </tr>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td className="td-sub">8 av. de la Résistance, 93100</td>
                  <td className="td-sub">Studio · 24m²</td>
                  <td><span className="badge badge-success">Loué</span></td>
                  <td className="td-value">650 €</td>
                  <td>M. Dupont</td>
                  <td className="td-sub">Fin : 31/08/2027</td>
                </tr>
                <tr>
                  <td className="td-main">T2 Vincennes</td>
                  <td className="td-sub">34 rue de Fontenay, 94300</td>
                  <td className="td-sub">T2 · 42m²</td>
                  <td><span className="badge badge-success">Loué</span></td>
                  <td className="td-value">890 €</td>
                  <td>Mme Leclerc</td>
                  <td className="td-sub">Fin : 15/01/2028</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2: Encaissements — Mars 2026 */}
          <div className="demo-card demo-anim demo-anim-d3">
            <h3>Encaissements — Mars 2026</h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Locataire</th>
                  <th>Loyer dû</th>
                  <th>Payé</th>
                  <th>Statut</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td>M. Dupont</td>
                  <td className="td-value">650 €</td>
                  <td className="td-value">650 €</td>
                  <td><span className="badge badge-success">Encaissé</span></td>
                  <td className="td-sub">03/03/2026</td>
                </tr>
                <tr>
                  <td className="td-main">T2 Vincennes</td>
                  <td>Mme Leclerc</td>
                  <td className="td-value">890 €</td>
                  <td className="td-value">890 €</td>
                  <td><span className="badge badge-success">Encaissé</span></td>
                  <td className="td-sub">01/03/2026</td>
                </tr>
                <tr className="table-footer">
                  <td>Total</td>
                  <td></td>
                  <td className="td-value">1 540 €</td>
                  <td className="td-value">1 540 €</td>
                  <td>Taux : 100%</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 3: Alertes & échéances */}
          <div className="demo-card demo-anim demo-anim-d4">
            <h3>Alertes &amp; échéances</h3>
            <div className="demo-timeline">
              <div className="demo-timeline-item warning">
                <div className="demo-timeline-date">18 mars</div>
                <div>
                  <div className="demo-timeline-content">Renouvellement assurance PNO</div>
                  <div className="demo-timeline-bien">Studio Montreuil</div>
                </div>
                <span className="badge badge-warning">Urgent</span>
              </div>
              <div className="demo-timeline-item info">
                <div className="demo-timeline-date">1er avril</div>
                <div>
                  <div className="demo-timeline-content">Encaissement loyers</div>
                  <div className="demo-timeline-bien">2 biens</div>
                </div>
                <span className="badge badge-info">Info</span>
              </div>
              <div className="demo-timeline-item danger">
                <div className="demo-timeline-date">15 avril</div>
                <div>
                  <div className="demo-timeline-content">DPE à refaire (classe E)</div>
                  <div className="demo-timeline-bien">T2 Vincennes</div>
                </div>
                <span className="badge badge-danger">Important</span>
              </div>
              <div className="demo-timeline-item sage">
                <div className="demo-timeline-date">1er juillet</div>
                <div>
                  <div className="demo-timeline-content">Révision IRL (+3,2% estimé)</div>
                  <div className="demo-timeline-bien">Studio Montreuil</div>
                </div>
                <span className="badge badge-sage">Planifié</span>
              </div>
            </div>
          </div>

          {/* Upgrade Banner */}
          <div className="demo-upgrade-banner demo-anim demo-anim-d5">
            <div className="demo-upgrade-text">
              <strong>Passez en Pro (39€/mois)</strong> pour débloquer le suivi de chantiers, la gestion des prestataires et gérer jusqu&apos;à 5 biens.
            </div>
            <button className="demo-upgrade-btn">Découvrir le plan Pro →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
