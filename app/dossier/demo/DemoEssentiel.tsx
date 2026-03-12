export default function DemoEssentiel() {
  return (
    <div className="demo-container">
      {/* ── SIDEBAR ── */}
      <aside className="demo-sidebar">
        <div className="demo-sidebar-logo">
          <span className="park">PARK</span>
          <span className="immo">IMMO</span>
        </div>
        <div className="demo-plan-badge">Essentiel &middot; 19&euro;</div>

        <nav className="demo-sidebar-nav">
          {/* Dashboard */}
          <div className="demo-sidebar-item active">
            <span>&bull;</span> Dashboard
          </div>

          {/* Section Patrimoine */}
          <div className="demo-section-title">Patrimoine</div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Mes biens
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Pr&ecirc;ts actifs
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Documents
          </div>

          {/* Section Gestion locative */}
          <div className="demo-section-title">Gestion locative</div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Mes locations
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Baux
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Encaissements
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Quittances
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> R&eacute;visions IRL
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Alertes
            <span className="alert-badge">3</span>
          </div>

          {/* Section Travaux — LOCKED */}
          <div className="demo-section-title">Travaux</div>
          <div className="demo-sidebar-item locked">
            <span>&middot;</span> Chantiers <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>&middot;</span> Interventions <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>&middot;</span> Prestataires <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,.3)', padding: '2px 18px 0', fontStyle: 'italic' }}>
            Disponible avec le plan Pro
          </div>

          {/* Section Acquisition — LOCKED */}
          <div className="demo-section-title">Acquisition</div>
          <div className="demo-sidebar-item locked">
            <span>&middot;</span> Pipeline <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>&middot;</span> Commercialisation <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>&middot;</span> Sc&eacute;narios <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,.3)', padding: '2px 18px 0', fontStyle: 'italic' }}>
            Disponible avec le plan Expert
          </div>

          {/* Section Commun */}
          <div className="demo-section-title">Commun</div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Annuaire
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> &Eacute;v&eacute;nements
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Alertes
            <span className="alert-badge">3</span>
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Param&egrave;tres
          </div>
        </nav>

        <div className="demo-sidebar-footer">
          Parkimmo v1.0 &middot; Essentiel &middot; Sophie L.
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
            <div className="demo-avatar">SL</div>
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
              <div className="demo-stat-value">1 540 &euro;</div>
              <div className="demo-stat-sub">2 biens lou&eacute;s &middot; 0 impay&eacute;</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--purple)' }}>
              <div className="demo-stat-label">Rendement brut moyen</div>
              <div className="demo-stat-value">5,8%</div>
              <div className="demo-stat-sub">Pond&eacute;r&eacute; sur les biens locatifs</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--warning)' }}>
              <div className="demo-stat-label">Prochaine &eacute;ch&eacute;ance</div>
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
                  <th>Charges locataire</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">R&eacute;sidence principale</td>
                  <td className="td-sub">12 rue des Lilas, Paris 11e</td>
                  <td className="td-sub">T3 &middot; 68m&sup2;</td>
                  <td><span className="badge badge-info">RP</span></td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-muted">&mdash;</td>
                </tr>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td className="td-sub">8 av. R&eacute;sistance, 93100</td>
                  <td className="td-sub">Studio &middot; 24m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">650 &euro;</td>
                  <td>M. Dupont</td>
                  <td className="td-sub">Fin : 31/08/2027</td>
                  <td className="td-sub">50 &euro;/mois</td>
                </tr>
                <tr>
                  <td className="td-main">T2 Vincennes</td>
                  <td className="td-sub">34 rue de Fontenay, 94300</td>
                  <td className="td-sub">T2 &middot; 42m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">890 &euro;</td>
                  <td>Mme Leclerc</td>
                  <td className="td-sub">Fin : 15/01/2028</td>
                  <td className="td-sub">70 &euro;/mois</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2: Encaissements — Mars 2026 */}
          <div className="demo-card demo-anim demo-anim-d3">
            <h3>Encaissements &mdash; Mars 2026</h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Locataire</th>
                  <th>Loyer d&ucirc;</th>
                  <th>Pay&eacute;</th>
                  <th>Mode</th>
                  <th>Statut</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td>M. Dupont</td>
                  <td className="td-value">650 &euro;</td>
                  <td className="td-value">650 &euro;</td>
                  <td className="td-sub">Virement</td>
                  <td><span className="badge badge-success">Encaiss&eacute;</span></td>
                  <td className="td-sub">03/03/2026</td>
                </tr>
                <tr>
                  <td className="td-main">T2 Vincennes</td>
                  <td>Mme Leclerc</td>
                  <td className="td-value">890 &euro;</td>
                  <td className="td-value">890 &euro;</td>
                  <td className="td-sub">Virement</td>
                  <td><span className="badge badge-success">Encaiss&eacute;</span></td>
                  <td className="td-sub">01/03/2026</td>
                </tr>
                <tr className="table-footer">
                  <td>Total</td>
                  <td></td>
                  <td className="td-value">1 540 &euro;</td>
                  <td className="td-value">1 540 &euro;</td>
                  <td></td>
                  <td>Taux : 100%</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 3: Charges annuelles */}
          <div className="demo-card demo-anim demo-anim-d4">
            <h3>Charges annuelles</h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Taxe fonci&egrave;re</th>
                  <th>Copro</th>
                  <th>PNO</th>
                  <th>Total charges/an</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td className="td-value">420 &euro;</td>
                  <td className="td-value">1 200 &euro;</td>
                  <td className="td-value">180 &euro;</td>
                  <td className="td-value">1 800 &euro;</td>
                </tr>
                <tr>
                  <td className="td-main">T2 Vincennes</td>
                  <td className="td-value">580 &euro;</td>
                  <td className="td-value">1 800 &euro;</td>
                  <td className="td-value">210 &euro;</td>
                  <td className="td-value">2 590 &euro;</td>
                </tr>
                <tr className="table-footer">
                  <td>Total</td>
                  <td className="td-value">1 000 &euro;</td>
                  <td className="td-value">3 000 &euro;</td>
                  <td className="td-value">390 &euro;</td>
                  <td className="td-value">4 390 &euro;</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4: Documents */}
          <div className="demo-card demo-anim demo-anim-d5">
            <h3>Documents</h3>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 6 }}>
              14 / 22 documents compl&eacute;t&eacute;s (64%)
            </div>
            <div style={{ background: 'var(--border)', borderRadius: 4, height: 8, width: '100%', marginBottom: 12 }}>
              <div style={{ background: 'var(--sage)', height: '100%', borderRadius: 4, width: '64%' }} />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Acquisition</td>
                  <td><span className="badge badge-success">4/4</span></td>
                </tr>
                <tr>
                  <td className="td-main">Location</td>
                  <td>
                    <span className="badge badge-warning">6/8</span>
                    <span style={{ fontSize: 9, color: 'var(--muted)', marginLeft: 6 }}>2 manquants</span>
                  </td>
                </tr>
                <tr>
                  <td className="td-main">Assurances</td>
                  <td><span className="badge badge-warning">2/4</span></td>
                </tr>
                <tr>
                  <td className="td-main">Charges/Copro</td>
                  <td><span className="badge badge-danger">2/6</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 5: Alertes & échéances */}
          <div className="demo-card demo-anim demo-anim-d6">
            <h3>Alertes &amp; &eacute;ch&eacute;ances</h3>
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
                  <div className="demo-timeline-content">DPE &agrave; refaire (classe E)</div>
                  <div className="demo-timeline-bien">T2 Vincennes</div>
                </div>
                <span className="badge badge-danger">Important</span>
              </div>
              <div className="demo-timeline-item sage">
                <div className="demo-timeline-date">1er juillet</div>
                <div>
                  <div className="demo-timeline-content">R&eacute;vision IRL (+3,2% estim&eacute;)</div>
                  <div className="demo-timeline-bien">Studio Montreuil</div>
                </div>
                <span className="badge badge-sage">Planifi&eacute;</span>
              </div>
            </div>
          </div>

          {/* Upgrade Banner */}
          <div className="demo-upgrade-banner demo-anim demo-anim-d7">
            <div className="demo-upgrade-text">
              <strong>Passez en Pro (39&euro;/mois)</strong> pour d&eacute;bloquer le suivi de chantiers, la gestion des prestataires et g&eacute;rer jusqu&apos;&agrave; 15 biens.
            </div>
            <button className="demo-upgrade-btn">D&eacute;couvrir le plan Pro &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
