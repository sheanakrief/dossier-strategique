export default function DemoPro() {
  return (
    <div className="demo-container">
      {/* ── SIDEBAR ── */}
      <aside className="demo-sidebar">
        <div className="demo-sidebar-logo">
          <span className="park">PARK</span>
          <span className="immo">IMMO</span>
        </div>
        <div className="demo-plan-badge">PRO · 39€</div>

        <nav className="demo-sidebar-nav">
          {/* Dashboard */}
          <div className="demo-sidebar-item active">
            <span>●</span> Dashboard
          </div>

          {/* Patrimoine */}
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

          {/* Gestion locative */}
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

          {/* Travaux */}
          <div className="demo-section-title">Travaux</div>
          <div className="demo-sidebar-item">
            <span>·</span> Chantiers
            <span className="item-badge">1</span>
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Interventions
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Prestataires
          </div>

          {/* Acquisition */}
          <div className="demo-section-title">Acquisition</div>
          <div className="demo-sidebar-item locked">
            <span>·</span> Pipeline
            <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>·</span> Commercialisation
            <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div className="demo-sidebar-item locked">
            <span>·</span> Scénarios
            <span className="lock-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
          </div>
          <div style={{ padding: '2px 18px 0', fontSize: '9px', color: 'rgba(255,255,255,.25)', fontStyle: 'italic' }}>
            Disponible avec le plan Expert
          </div>

          {/* Commun */}
          <div className="demo-section-title">Commun</div>
          <div className="demo-sidebar-item">
            <span>·</span> Annuaire
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Événements
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Alertes
            <span className="alert-badge">4</span>
          </div>
          <div className="demo-sidebar-item">
            <span>·</span> Paramètres
          </div>
        </nav>

        <div className="demo-sidebar-footer">
          Parkimmo v1.0 · Pro · Sheana K.
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
            <div className="demo-search-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
            <div className="demo-avatar">SK</div>
          </div>
        </header>

        {/* Content */}
        <div className="demo-content">

          {/* Stats Grid */}
          <div className="demo-stats-grid demo-anim demo-anim-d1">
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--sage)' }}>
              <div className="demo-stat-label">Biens</div>
              <div className="demo-stat-value">5 / 5 max</div>
              <div className="demo-stat-sub">Limite du plan Pro</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--success)' }}>
              <div className="demo-stat-label">Loyers mensuels</div>
              <div className="demo-stat-value">2 640 €</div>
              <div className="demo-stat-sub">3 biens loués · 0 impayé</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--warning)' }}>
              <div className="demo-stat-label">Chantiers actifs</div>
              <div className="demo-stat-value">1</div>
              <div className="demo-stat-sub">T3 Bagnolet — 62% avancé</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--success)' }}>
              <div className="demo-stat-label">Cash-flow mensuel</div>
              <div className="demo-stat-value">+890 €</div>
              <div className="demo-stat-sub">Après charges et prêts</div>
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
                  <td className="td-main">Résidence principale</td>
                  <td className="td-sub">12 rue des Lilas, Paris 11e</td>
                  <td>T3 · 68m²</td>
                  <td><span className="badge badge-info">RP</span></td>
                  <td className="td-muted">—</td>
                  <td>Nom propre</td>
                </tr>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td className="td-sub">8 av. Résistance, 93100</td>
                  <td>Studio · 24m²</td>
                  <td><span className="badge badge-success">Loué</span></td>
                  <td className="td-value">650 €</td>
                  <td>Nom propre</td>
                </tr>
                <tr>
                  <td className="td-main">T2 Vincennes</td>
                  <td className="td-sub">34 rue Fontenay, 94300</td>
                  <td>T2 · 42m²</td>
                  <td><span className="badge badge-success">Loué</span></td>
                  <td className="td-value">890 €</td>
                  <td>SCI Jade</td>
                </tr>
                <tr>
                  <td className="td-main">T3 Bagnolet</td>
                  <td className="td-sub">15 rue Robespierre, 93170</td>
                  <td>T3 · 62m²</td>
                  <td><span className="badge badge-warning">En travaux</span></td>
                  <td className="td-muted">—</td>
                  <td>SCI Jade</td>
                </tr>
                <tr>
                  <td className="td-main">Maison Nantes</td>
                  <td className="td-sub">22 bd Jules Verne, 44000</td>
                  <td>Maison · 95m²</td>
                  <td><span className="badge badge-success">Loué</span></td>
                  <td className="td-value">1 100 €</td>
                  <td>SCI Jade</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section: Suivi de chantier — T3 Bagnolet */}
          <div className="demo-card demo-anim demo-anim-d3">
            <h3>Suivi de chantier — T3 Bagnolet</h3>

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
                <div className="demo-cs-value">35 000 €</div>
              </div>
              <div className="demo-cs-item">
                <div className="demo-cs-label">Engagé</div>
                <div className="demo-cs-value" style={{ color: 'var(--warning)' }}>21 700 €</div>
              </div>
              <div className="demo-cs-item">
                <div className="demo-cs-label">Restant</div>
                <div className="demo-cs-value" style={{ color: 'var(--success)' }}>13 300 €</div>
              </div>
              <div className="demo-cs-item">
                <div className="demo-cs-label">Délai</div>
                <div className="demo-cs-value">Jan → Mai 2026</div>
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
                  <td>Démolition &amp; gros œuvre</td>
                  <td className="td-value">8 200 €</td>
                  <td><span className="badge badge-success">Terminé</span></td>
                  <td>
                    <div className="demo-progress-bar">
                      <div className="demo-progress-fill green" style={{ width: '100%' }} />
                    </div>
                    <div className="demo-progress-label">100%</div>
                  </td>
                </tr>
                <tr>
                  <td className="td-main">Phase 2</td>
                  <td>Plomberie, élec, isolation</td>
                  <td className="td-value">13 500 €</td>
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
                  <td className="td-value">13 300 €</td>
                  <td><span className="badge badge-muted">À venir</span></td>
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
                  <th>Métier</th>
                  <th>Montant</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Bâti Rénov&apos;</td>
                  <td>Gros œuvre</td>
                  <td className="td-value">8 200 €</td>
                  <td><span className="badge badge-success">Payé</span></td>
                </tr>
                <tr>
                  <td className="td-main">Élec Pro 93</td>
                  <td>Électricité</td>
                  <td className="td-value">5 800 €</td>
                  <td><span className="badge badge-warning">Facturé</span></td>
                </tr>
                <tr>
                  <td className="td-main">Martin Plomberie</td>
                  <td>Plomberie</td>
                  <td className="td-value">4 200 €</td>
                  <td><span className="badge badge-warning">En cours</span></td>
                </tr>
                <tr>
                  <td className="td-main">SDB Concept</td>
                  <td>Salle de bain</td>
                  <td className="td-value">6 200 €</td>
                  <td><span className="badge badge-muted">Devis signé</span></td>
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
              <span className="demo-alert-text">Facture Élec Pro 93 à régler</span>
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
              <span className="demo-alert-text">Fin estimée chantier</span>
              <span className="demo-alert-bien">T3 Bagnolet</span>
              <span className="badge badge-sage">Jalon</span>
            </div>
          </div>

          {/* Upgrade Banner */}
          <div className="demo-upgrade-banner dark demo-anim demo-anim-d5">
            <div className="demo-upgrade-text">
              <strong>Passez en Expert (59€/mois)</strong> pour débloquer le pipeline d&apos;acquisition,
              la commercialisation, les scénarios et gérer un nombre illimité de biens.
            </div>
            <button className="demo-upgrade-btn">Découvrir le plan Expert →</button>
          </div>

        </div>
      </div>
    </div>
  );
}
