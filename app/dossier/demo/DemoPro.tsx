export default function DemoPro() {
  return (
    <div className="demo-container">
      {/* ── SIDEBAR ── */}
      <aside className="demo-sidebar">
        <div className="demo-sidebar-nav">
          <div className="demo-sidebar-logo">
            <span className="park">PARK</span>
            <span className="immo">IMMO</span>
          </div>
          <div className="demo-plan-badge">PRO &middot; 39&euro;</div>

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
          <div className="demo-sidebar-item">
            <span>&middot;</span> Documents
          </div>

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

          <div className="demo-section-title">Travaux</div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Chantiers
            <span className="item-badge">1</span>
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Interventions
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Prestataires
          </div>

          <div className="demo-section-title">Acquisition</div>
          <div className="demo-sidebar-item locked">
            <span>&middot;</span> Pipeline
            <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>&middot;</span> Commercialisation
            <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>&middot;</span> Sc&eacute;narios
            <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div style={{ padding: '2px 18px 0', fontSize: '9px', color: 'rgba(255,255,255,.3)', fontStyle: 'italic' }}>
            Disponible avec le plan Expert
          </div>

          <div className="demo-section-title">Commun</div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Annuaire
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> &Eacute;v&eacute;nements
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Alertes
            <span className="alert-badge">4</span>
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Param&egrave;tres
          </div>
        </div>

        <div className="demo-sidebar-footer">
          Parkimmo v1.0 &middot; Pro &middot; Laurent R.
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="demo-main">
        {/* Header */}
        <header className="demo-header">
          <div className="demo-header-left">
            <span className="demo-header-title">Dashboard</span>
            <span className="demo-header-badge">Pro</span>
          </div>
          <div className="demo-header-right">
            <button className="demo-search-btn" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <div className="demo-avatar">LR</div>
          </div>
        </header>

        {/* Content */}
        <div className="demo-content">

          {/* Stats Grid */}
          <div className="demo-stats-grid demo-anim demo-anim-d1">
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--sage)' }}>
              <div className="demo-stat-label">Biens</div>
              <div className="demo-stat-value">5 / 15 max</div>
              <div className="demo-stat-sub">Limite du plan Pro</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--success)' }}>
              <div className="demo-stat-label">Loyers mensuels</div>
              <div className="demo-stat-value">2 640 &euro;</div>
              <div className="demo-stat-sub">3 biens lou&eacute;s &middot; 0 impay&eacute;</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--warning)' }}>
              <div className="demo-stat-label">Chantiers actifs</div>
              <div className="demo-stat-value">1</div>
              <div className="demo-stat-sub">T3 Bagnolet &mdash; 62% avanc&eacute;</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--success)' }}>
              <div className="demo-stat-label">Cash-flow mensuel</div>
              <div className="demo-stat-value">+890 &euro;</div>
              <div className="demo-stat-sub">Apr&egrave;s charges et pr&ecirc;ts</div>
            </div>
          </div>

          {/* Table: Mes biens */}
          <div className="demo-card demo-anim demo-anim-d2">
            <h3>Mes biens</h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Adresse</th>
                  <th>Type</th>
                  <th>Statut</th>
                  <th>Loyer</th>
                  <th>Structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">R&eacute;sidence principale</td>
                  <td className="td-sub">12 rue des Lilas, Paris 11e</td>
                  <td className="td-muted">T3 &middot; 68m&sup2;</td>
                  <td><span className="badge badge-info">RP</span></td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-muted">Nom propre</td>
                </tr>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td className="td-sub">8 av. R&eacute;sistance, 93100</td>
                  <td className="td-muted">Studio &middot; 24m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">650 &euro;</td>
                  <td className="td-muted">Nom propre</td>
                </tr>
                <tr>
                  <td className="td-main">T2 Vincennes</td>
                  <td className="td-sub">34 rue Fontenay, 94300</td>
                  <td className="td-muted">T2 &middot; 42m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">890 &euro;</td>
                  <td className="td-muted">SCI Jade</td>
                </tr>
                <tr>
                  <td className="td-main">T3 Bagnolet</td>
                  <td className="td-sub">15 rue Robespierre, 93170</td>
                  <td className="td-muted">T3 &middot; 62m&sup2;</td>
                  <td><span className="badge badge-warning">En travaux</span></td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-muted">SCI Jade</td>
                </tr>
                <tr>
                  <td className="td-main">Maison Nantes</td>
                  <td className="td-sub">22 bd Jules Verne, 44000</td>
                  <td className="td-muted">Maison &middot; 95m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">1 100 &euro;</td>
                  <td className="td-muted">SCI Jade</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section: Suivi de chantier — T3 Bagnolet */}
          <div className="demo-card demo-anim demo-anim-d3">
            <h3>Suivi de chantier &mdash; T3 Bagnolet</h3>

            {/* Chantier stats */}
            <div className="demo-chantier-stats">
              <div className="demo-cs-item">
                <div className="demo-cs-label">Statut</div>
                <div className="demo-cs-value" style={{ color: 'var(--warning)' }}>En cours</div>
              </div>
              <div className="demo-cs-item">
                <div className="demo-cs-label">Phase</div>
                <div className="demo-cs-value">2 / 3</div>
              </div>
              <div className="demo-cs-item">
                <div className="demo-cs-label">Budget total</div>
                <div className="demo-cs-value">35 000 &euro;</div>
              </div>
              <div className="demo-cs-item">
                <div className="demo-cs-label">Engag&eacute;</div>
                <div className="demo-cs-value" style={{ color: 'var(--warning)' }}>21 700 &euro;</div>
              </div>
              <div className="demo-cs-item">
                <div className="demo-cs-label">Restant</div>
                <div className="demo-cs-value" style={{ color: 'var(--success)' }}>13 300 &euro;</div>
              </div>
              <div className="demo-cs-item">
                <div className="demo-cs-label">D&eacute;lai</div>
                <div className="demo-cs-value">Jan &rarr; Mai 2026</div>
              </div>
            </div>

            {/* Phases */}
            <div className="demo-sub-heading">Phases</div>
            <table>
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Description</th>
                  <th>Budget</th>
                  <th>Statut</th>
                  <th>Progression</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Phase 1</td>
                  <td>D&eacute;molition &amp; gros oeuvre</td>
                  <td className="td-value">8 200 &euro;</td>
                  <td><span className="badge badge-success">Termin&eacute;</span></td>
                  <td>
                    <div className="demo-progress-bar">
                      <div className="demo-progress-fill green" style={{ width: '100%' }} />
                    </div>
                    <div className="demo-progress-label">100%</div>
                  </td>
                </tr>
                <tr>
                  <td className="td-main">Phase 2</td>
                  <td>Plomberie, &eacute;lec, isolation</td>
                  <td className="td-value">13 500 &euro;</td>
                  <td><span className="badge badge-warning">En cours</span></td>
                  <td>
                    <div className="demo-progress-bar">
                      <div className="demo-progress-fill yellow" style={{ width: '55%' }} />
                    </div>
                    <div className="demo-progress-label">55%</div>
                  </td>
                </tr>
                <tr>
                  <td className="td-main">Phase 3</td>
                  <td>Finitions, cuisine, SdB</td>
                  <td className="td-value">13 300 &euro;</td>
                  <td><span className="badge badge-muted">&Agrave; venir</span></td>
                  <td>
                    <div className="demo-progress-bar">
                      <div className="demo-progress-fill grey" style={{ width: '0%' }} />
                    </div>
                    <div className="demo-progress-label">0%</div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Prestataires */}
            <div className="demo-sub-heading">Prestataires</div>
            <table>
              <thead>
                <tr>
                  <th>Prestataire</th>
                  <th>M&eacute;tier</th>
                  <th>Montant</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">B&acirc;ti R&eacute;nov&apos;</td>
                  <td>Gros oeuvre</td>
                  <td className="td-value">8 200 &euro;</td>
                  <td><span className="badge badge-success">Pay&eacute;</span></td>
                </tr>
                <tr>
                  <td className="td-main">&Eacute;lec Pro 93</td>
                  <td>&Eacute;lectricit&eacute;</td>
                  <td className="td-value">5 800 &euro;</td>
                  <td><span className="badge badge-warning">Factur&eacute;</span></td>
                </tr>
                <tr>
                  <td className="td-main">Martin Plomberie</td>
                  <td>Plomberie</td>
                  <td className="td-value">4 200 &euro;</td>
                  <td><span className="badge badge-warning">En cours</span></td>
                </tr>
                <tr>
                  <td className="td-main">SDB Concept</td>
                  <td>Salle de bain</td>
                  <td className="td-value">6 200 &euro;</td>
                  <td><span className="badge badge-muted">Devis sign&eacute;</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section: Alertes */}
          <div className="demo-card demo-anim demo-anim-d4">
            <h3>Alertes</h3>
            <div className="demo-alert-row">
              <span className="demo-alert-date">20 mars</span>
              <span className="demo-alert-dot dot-warning" />
              <span className="demo-alert-text">Visite de chantier Phase 2</span>
              <span className="demo-alert-bien">T3 Bagnolet</span>
              <span className="badge badge-warning">Chantier</span>
            </div>
            <div className="demo-alert-row">
              <span className="demo-alert-date">22 mars</span>
              <span className="demo-alert-dot dot-danger" />
              <span className="demo-alert-text">Facture &Eacute;lec Pro 93 &agrave; r&eacute;gler</span>
              <span className="demo-alert-bien">T3 Bagnolet</span>
              <span className="badge badge-danger">Urgent</span>
            </div>
            <div className="demo-alert-row">
              <span className="demo-alert-date">1er avril</span>
              <span className="demo-alert-dot dot-info" />
              <span className="demo-alert-text">Encaissement loyers</span>
              <span className="demo-alert-bien">3 biens</span>
              <span className="badge badge-info">Loyers</span>
            </div>
            <div className="demo-alert-row">
              <span className="demo-alert-date">15 mai</span>
              <span className="demo-alert-dot dot-sage" />
              <span className="demo-alert-text">Fin estim&eacute;e chantier</span>
              <span className="demo-alert-bien">T3 Bagnolet</span>
              <span className="badge badge-sage">Jalon</span>
            </div>
          </div>

          {/* Support juridique CTA */}
          <div className="demo-upgrade-banner demo-anim demo-anim-d5" style={{ animationDelay: '1.5s' }}>
            <div className="demo-upgrade-text">
              <strong>Besoin d&apos;un conseil juridique ?</strong> Avec le plan Pro, acc&eacute;dez au Support Juridique &amp; Gestionnaire (15&euro;/bien/mois). Conseil r&eacute;daction bail, accompagnement r&eacute;vision IRL, mise en relation r&eacute;seau pros.
            </div>
            <button className="demo-upgrade-btn">En savoir plus &rarr;</button>
          </div>

          {/* Upgrade Banner */}
          <div className="demo-upgrade-banner dark demo-anim demo-anim-d5">
            <div className="demo-upgrade-text">
              <strong>Passez en Expert (59&euro;/mois)</strong> pour d&eacute;bloquer le pipeline d&apos;acquisition, la commercialisation, les sc&eacute;narios et g&eacute;rer un nombre illimit&eacute; de biens.
            </div>
            <button className="demo-upgrade-btn">D&eacute;couvrir le plan Expert &rarr;</button>
          </div>

        </div>
      </div>
    </div>
  );
}
