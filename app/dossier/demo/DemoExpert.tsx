export default function DemoExpert() {
  return (
    <div className="demo-container">
      {/* ── SIDEBAR ── */}
      <aside className="demo-sidebar">
        <div className="demo-sidebar-nav">
          <div className="demo-sidebar-logo">
            <span className="park">PARK</span>
            <span className="immo">IMMO</span>
          </div>
          <div className="demo-plan-badge">Expert &middot; 59&euro;</div>

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
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Interventions
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Prestataires
          </div>

          <div className="demo-section-title">Acquisition</div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Pipeline
            <span className="item-badge">2</span>
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Commercialisation
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Sc&eacute;narios
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
            <span className="item-badge">5</span>
          </div>
          <div className="demo-sidebar-item">
            <span>&middot;</span> Param&egrave;tres
          </div>
        </div>

        <div className="demo-sidebar-footer">
          Parkimmo v1.0 &middot; Expert &middot; Thomas B.
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="demo-main">
        {/* Header */}
        <header className="demo-header">
          <div className="demo-header-left">
            <span className="demo-header-title">Dashboard</span>
            <span className="demo-header-badge">Expert</span>
          </div>
          <div className="demo-header-right">
            <button className="demo-search-btn" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <div className="demo-avatar">TB</div>
          </div>
        </header>

        {/* Content */}
        <div className="demo-content">
          {/* Stats Grid */}
          <div className="demo-stats-grid demo-anim demo-anim-d1">
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--forest)' }}>
              <div className="demo-stat-label">Patrimoine total</div>
              <div className="demo-stat-value">1,42M &euro;</div>
              <div className="demo-stat-sub">8 biens &middot; 3 structures</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--success)' }}>
              <div className="demo-stat-label">Loyers mensuels</div>
              <div className="demo-stat-value">4 590 &euro;</div>
              <div className="demo-stat-sub">5 biens lou&eacute;s &middot; Rendement 6,1%</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--purple)' }}>
              <div className="demo-stat-label">Pipeline acquisition</div>
              <div className="demo-stat-value">2 projets</div>
              <div className="demo-stat-sub">1 offre, 1 visite &middot; Budget 620K &euro;</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--success)' }}>
              <div className="demo-stat-label">Cash-flow net</div>
              <div className="demo-stat-value" style={{ color: 'var(--success)' }}>+2 140 &euro;/mois</div>
              <div className="demo-stat-sub">Apr&egrave;s charges, pr&ecirc;ts, travaux</div>
            </div>
          </div>

          {/* Table 1: Patrimoine consolidé */}
          <div className="demo-card demo-anim demo-anim-d2">
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Patrimoine consolid&eacute;
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Adresse</th>
                  <th>Type</th>
                  <th>Statut</th>
                  <th>Loyer</th>
                  <th>Structure</th>
                  <th style={{ textAlign: 'right' }}>Valeur</th>
                  <th>Gestionnaire</th>
                  <th>Assurance</th>
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
                  <td className="td-value" style={{ textAlign: 'right' }}>295 000 &euro;</td>
                  <td className="td-muted">Gestion directe</td>
                  <td className="td-muted">PNO MAIF</td>
                </tr>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td className="td-sub">8 av. R&eacute;sistance, 93100</td>
                  <td className="td-muted">Studio &middot; 24m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">650 &euro;</td>
                  <td className="td-muted">Nom propre</td>
                  <td className="td-value" style={{ textAlign: 'right' }}>90 000 &euro;</td>
                  <td className="td-muted">Gestion directe</td>
                  <td className="td-muted">PNO+GLI AXA</td>
                </tr>
                <tr>
                  <td className="td-main">T2 Vincennes</td>
                  <td className="td-sub">34 rue Fontenay, 94300</td>
                  <td className="td-muted">T2 &middot; 42m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">890 &euro;</td>
                  <td className="td-muted">SCI Jade</td>
                  <td className="td-value" style={{ textAlign: 'right' }}>175 000 &euro;</td>
                  <td className="td-muted">Gestion directe</td>
                  <td className="td-muted">PNO MAIF</td>
                </tr>
                <tr>
                  <td className="td-main">T3 Bagnolet</td>
                  <td className="td-sub">15 rue Robespierre, 93170</td>
                  <td className="td-muted">T3 &middot; 62m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">950 &euro;</td>
                  <td className="td-muted">SCI Jade</td>
                  <td className="td-value" style={{ textAlign: 'right' }}>185 000 &euro;</td>
                  <td className="td-muted">Cabinet Martin</td>
                  <td className="td-muted">PNO+GLI AXA</td>
                </tr>
                <tr>
                  <td className="td-main">Maison Nantes</td>
                  <td className="td-sub">22 bd Jules Verne, 44000</td>
                  <td className="td-muted">Maison &middot; 95m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">1 100 &euro;</td>
                  <td className="td-muted">SCI Jade</td>
                  <td className="td-value" style={{ textAlign: 'right' }}>220 000 &euro;</td>
                  <td className="td-muted">Cabinet Martin</td>
                  <td className="td-muted">PNO MAIF</td>
                </tr>
                <tr>
                  <td className="td-main">Local commercial</td>
                  <td className="td-sub">5 rue du Commerce, 75015</td>
                  <td className="td-muted">Commerce &middot; 55m&sup2;</td>
                  <td><span className="badge badge-success">Lou&eacute;</span></td>
                  <td className="td-value">1 800 &euro;</td>
                  <td className="td-muted">SNC Pierre</td>
                  <td className="td-value" style={{ textAlign: 'right' }}>280 000 &euro;</td>
                  <td className="td-muted">Gestion directe</td>
                  <td className="td-muted">RC Pro ALLIANZ</td>
                </tr>
                <tr>
                  <td className="td-main">Immeuble Lille</td>
                  <td className="td-sub">78 rue Nationale, 59000</td>
                  <td className="td-muted">Immeuble &middot; 6 lots</td>
                  <td><span className="badge badge-purple">Acquisition</span></td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-muted">SNC Pierre</td>
                  <td className="td-value" style={{ textAlign: 'right' }}>&mdash;</td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-muted">&mdash;</td>
                </tr>
                <tr>
                  <td className="td-main">Terrain Bordeaux</td>
                  <td className="td-sub">Lot 14, ZAC Euratlantique</td>
                  <td className="td-muted">Terrain</td>
                  <td><span className="badge badge-warning">Prospection</span></td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-value" style={{ textAlign: 'right' }}>&mdash;</td>
                  <td className="td-muted">&mdash;</td>
                  <td className="td-muted">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2: Prêts multi-biens */}
          <div className="demo-card demo-anim demo-anim-d3">
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
              Pr&ecirc;ts multi-biens
            </h3>
            <div style={{ fontSize: '10px', fontStyle: 'italic', color: 'var(--muted)', marginBottom: '10px', marginTop: '-4px' }}>
              Un m&ecirc;me pr&ecirc;t peut financer plusieurs biens
            </div>
            <table>
              <thead>
                <tr>
                  <th>Pr&ecirc;t</th>
                  <th>Banque</th>
                  <th>Capital</th>
                  <th>CRD</th>
                  <th>Mensualit&eacute;</th>
                  <th>Taux</th>
                  <th>Biens rattach&eacute;s</th>
                  <th>Assurance empr.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Pr&ecirc;t SCI Jade</td>
                  <td className="td-muted">LCL</td>
                  <td className="td-value">450 000 &euro;</td>
                  <td className="td-value">320 000 &euro;</td>
                  <td className="td-value">1 850 &euro;</td>
                  <td className="td-muted">1,65%</td>
                  <td className="td-sub">T2 Vincennes + T3 Bagnolet + Maison Nantes</td>
                  <td className="td-sub">DC+PTIA+IPT &mdash; 42 &euro;/mois &mdash; CARDIF</td>
                </tr>
                <tr>
                  <td className="td-main">Pr&ecirc;t SNC Pierre</td>
                  <td className="td-muted">BNP</td>
                  <td className="td-value">250 000 &euro;</td>
                  <td className="td-value">195 000 &euro;</td>
                  <td className="td-value">1 120 &euro;</td>
                  <td className="td-muted">1,80%</td>
                  <td className="td-sub">Local commercial</td>
                  <td className="td-sub">DC+PTIA &mdash; 35 &euro;/mois &mdash; CARDIF</td>
                </tr>
                <tr>
                  <td className="td-main">Pr&ecirc;t RP</td>
                  <td className="td-muted">Cr&eacute;dit Mutuel</td>
                  <td className="td-value">240 000 &euro;</td>
                  <td className="td-value">189 200 &euro;</td>
                  <td className="td-value">1 050 &euro;</td>
                  <td className="td-muted">1,45%</td>
                  <td className="td-sub">R&eacute;sidence principale</td>
                  <td className="td-sub">DC+PTIA &mdash; 28 &euro;/mois &mdash; CNP</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 3: Pipeline acquisition */}
          <div className="demo-card demo-anim demo-anim-d4">
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              Pipeline acquisition
            </h3>
            <div className="demo-kanban">
              {/* Prospection */}
              <div className="demo-kanban-col">
                <div className="demo-kanban-header h-muted">Prospection</div>
                <div className="demo-kanban-card">
                  <div className="demo-kanban-card-title">Terrain Bordeaux</div>
                  <div className="demo-kanban-card-meta">
                    Budget : 200K&euro;<br />
                    Rdt est. : 7,5%
                  </div>
                </div>
              </div>
              {/* Offre faite */}
              <div className="demo-kanban-col">
                <div className="demo-kanban-header h-info">Offre faite</div>
                <div className="demo-kanban-card">
                  <div className="demo-kanban-card-title">Immeuble Lille</div>
                  <div className="demo-kanban-card-meta">
                    Offre : 395K&euro;<br />
                    6 lots &middot; Rdt est. : 8,2%
                  </div>
                </div>
              </div>
              {/* Sous compromis */}
              <div className="demo-kanban-col">
                <div className="demo-kanban-header h-purple">Sous compromis</div>
                <div className="demo-kanban-empty">(vide)</div>
              </div>
              {/* Acte signé */}
              <div className="demo-kanban-col">
                <div className="demo-kanban-header h-success">Acte sign&eacute;</div>
                <div className="demo-kanban-empty">(vide)</div>
              </div>
            </div>

            {/* Détail projets */}
            <div className="demo-sub-heading" style={{ marginTop: '16px' }}>D&eacute;tail projets</div>
            <table>
              <thead>
                <tr>
                  <th>Projet</th>
                  <th>Statut</th>
                  <th>Prix acquisition</th>
                  <th>Frais notaire</th>
                  <th>Budget travaux</th>
                  <th>Rendement est.</th>
                  <th>Marge est.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Terrain Bordeaux</td>
                  <td><span className="badge badge-muted">Prospection</span></td>
                  <td className="td-value">200 000 &euro;</td>
                  <td className="td-muted">~15 000 &euro;</td>
                  <td className="td-value">80 000 &euro;</td>
                  <td className="td-value">7,5%</td>
                  <td className="td-muted">&mdash;</td>
                </tr>
                <tr>
                  <td className="td-main">Immeuble Lille</td>
                  <td><span className="badge badge-info">Offre faite</span></td>
                  <td className="td-value">395 000 &euro;</td>
                  <td className="td-muted">~30 000 &euro;</td>
                  <td className="td-value">120 000 &euro;</td>
                  <td className="td-value">8,2%</td>
                  <td className="td-value">~85 000 &euro;</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 4: Vue par structure */}
          <div className="demo-card demo-anim demo-anim-d5">
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Vue par structure
            </h3>
            <div className="demo-structure-grid">
              {/* Nom propre */}
              <div className="demo-structure-card">
                <div className="demo-structure-card-header">
                  <div className="demo-structure-card-title">Nom propre</div>
                  <div className="demo-structure-card-count">2 biens</div>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Valeur</span>
                  <span className="demo-structure-row-value">385 000 &euro;</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Loyer</span>
                  <span className="demo-structure-row-value">650 &euro;/mois</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Charges/an</span>
                  <span className="demo-structure-row-value">4 390 &euro;</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">CRD</span>
                  <span className="demo-structure-row-value">245 800 &euro;</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Cash-flow</span>
                  <span className="demo-structure-row-value danger">-780 &euro;/mois</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Rdt brut</span>
                  <span className="demo-structure-row-value">3,8%</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Rdt net</span>
                  <span className="demo-structure-row-value">1,2%</span>
                </div>
              </div>

              {/* SCI Jade */}
              <div className="demo-structure-card">
                <div className="demo-structure-card-header">
                  <div className="demo-structure-card-title">SCI Jade</div>
                  <div className="demo-structure-card-count">3 biens</div>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Valeur</span>
                  <span className="demo-structure-row-value">580 000 &euro;</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Loyer</span>
                  <span className="demo-structure-row-value">2 940 &euro;/mois</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Charges/an</span>
                  <span className="demo-structure-row-value">9 200 &euro;</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">CRD</span>
                  <span className="demo-structure-row-value">320 000 &euro;</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Cash-flow</span>
                  <span className="demo-structure-row-value success">+1 540 &euro;/mois</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Rdt brut</span>
                  <span className="demo-structure-row-value">6,1%</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Rdt net</span>
                  <span className="demo-structure-row-value">4,5%</span>
                </div>
              </div>

              {/* SNC Pierre */}
              <div className="demo-structure-card">
                <div className="demo-structure-card-header">
                  <div className="demo-structure-card-title">SNC Pierre</div>
                  <div className="demo-structure-card-count">1 bien actif + 1 acquisition</div>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Valeur</span>
                  <span className="demo-structure-row-value">280 000 &euro;</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Loyer</span>
                  <span className="demo-structure-row-value">1 800 &euro;/mois</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Charges/an</span>
                  <span className="demo-structure-row-value">5 400 &euro;</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">CRD</span>
                  <span className="demo-structure-row-value">195 000 &euro;</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Cash-flow</span>
                  <span className="demo-structure-row-value success">+680 &euro;/mois</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Rdt brut</span>
                  <span className="demo-structure-row-value">7,7%</span>
                </div>
                <div className="demo-structure-row">
                  <span className="demo-structure-row-label">Rdt net</span>
                  <span className="demo-structure-row-value">5,3%</span>
                </div>
                <div className="demo-structure-note">Pipeline : 1 offre (Lille)</div>
              </div>
            </div>
          </div>

          {/* Table 5: Travaux en cours */}
          <div className="demo-card demo-anim" style={{ animationDelay: '1.5s' }}>
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              Travaux en cours
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Chantier</th>
                  <th>Bien</th>
                  <th>Budget</th>
                  <th>D&eacute;pens&eacute;</th>
                  <th>Reste</th>
                  <th>Statut</th>
                  <th>Devis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">R&eacute;novation &eacute;nerg&eacute;tique</td>
                  <td className="td-sub">T2 Vincennes</td>
                  <td className="td-value">15 000 &euro;</td>
                  <td className="td-value">8 200 &euro;</td>
                  <td className="td-value">6 800 &euro;</td>
                  <td><span className="badge badge-warning">En cours</span></td>
                  <td className="td-muted">3 devis / 2 accept&eacute;s</td>
                </tr>
                <tr>
                  <td className="td-main">Rafra&icirc;chissement</td>
                  <td className="td-sub">Studio Montreuil</td>
                  <td className="td-value">3 500 &euro;</td>
                  <td className="td-value">3 500 &euro;</td>
                  <td className="td-value">0 &euro;</td>
                  <td><span className="badge badge-success">Termin&eacute;</span></td>
                  <td className="td-muted">1 devis / 1 factur&eacute;</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 6: Commercialisation (empty state) */}
          <div className="demo-card demo-anim" style={{ animationDelay: '1.8s' }}>
            <h3>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Commercialisation
            </h3>
            <div className="demo-empty-state">
              <div className="demo-empty-state-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
              Aucun bien en commercialisation actuellement. Lancez la mise en vente depuis la fiche bien.
            </div>
          </div>

          {/* GA Banner */}
          <div className="demo-ga-banner demo-anim" style={{ animationDelay: '2.1s' }}>
            <div className="demo-ga-banner-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="demo-ga-banner-title">Gestion Assist&eacute;e</div>
              <div className="demo-ga-banner-text">
                Gagnez du temps avec la Gestion Assist&eacute;e Parkimmo. Un charg&eacute; d&apos;affaires d&eacute;di&eacute; g&egrave;re vos quittances, relances, r&eacute;visions IRL, encaissements et suivi mensuel. Il acc&egrave;de &agrave; vos donn&eacute;es en temps r&eacute;el via l&apos;Espace Partenaire. &Agrave; partir de 69&euro;/mois.
              </div>
              <div className="demo-ga-banner-link">En savoir plus &rarr;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
