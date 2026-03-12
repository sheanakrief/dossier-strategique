export default function DemoFreemium() {
  return (
    <div className="demo-container">
      {/* ── SIDEBAR ── */}
      <aside className="demo-sidebar">
        <div className="demo-sidebar-nav">
          <div className="demo-sidebar-logo">
            <span className="park">PARK</span>
            <span className="immo">IMMO</span>
          </div>
          <div className="demo-plan-badge">Gratuit</div>

          <div className="demo-sidebar-item active">
            <span>📊</span> Dashboard
          </div>

          <div className="demo-section-title">Patrimoine</div>
          <div className="demo-sidebar-item">
            <span>🏠</span> Mes biens
          </div>
          <div className="demo-sidebar-item active">
            <span>🏦</span> Prêts actifs
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>📁</span> Documents
            <span className="lock-icon">🔒</span>
          </div>

          <div className="demo-section-title">Gestion locative</div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>🏘️</span> Mes locations
            <span className="lock-icon">🔒</span>
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>📝</span> Baux
            <span className="lock-icon">🔒</span>
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>💰</span> Encaissements
            <span className="lock-icon">🔒</span>
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>🧾</span> Quittances
            <span className="lock-icon">🔒</span>
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>📈</span> Révisions IRL
            <span className="lock-icon">🔒</span>
          </div>

          <div className="demo-section-title">Travaux</div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>🔨</span> Chantiers
            <span className="lock-icon">🔒</span>
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>🔧</span> Interventions
            <span className="lock-icon">🔒</span>
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>👷</span> Prestataires
            <span className="lock-icon">🔒</span>
          </div>

          <div className="demo-section-title">Acquisition</div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>🎯</span> Pipeline
            <span className="lock-icon">🔒</span>
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>📢</span> Commercialisation
            <span className="lock-icon">🔒</span>
          </div>
          <div className="demo-sidebar-item locked" title="Disponible avec le plan Essentiel">
            <span>🧮</span> Scénarios
            <span className="lock-icon">🔒</span>
          </div>

          <div className="demo-section-title">Commun</div>
          <div className="demo-sidebar-item">
            <span>📇</span> Annuaire
          </div>
          <div className="demo-sidebar-item">
            <span>📅</span> Événements
          </div>
          <div className="demo-sidebar-item">
            <span>🔔</span> Alertes
          </div>
          <div className="demo-sidebar-item">
            <span>⚙️</span> Paramètres
          </div>
        </div>

        <div className="demo-sidebar-footer">
          Parkimmo v1.0 · Gratuit · Sheana K.
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="demo-main">
        {/* Header */}
        <header className="demo-header">
          <div className="demo-header-left">
            <span className="demo-header-title">Dashboard</span>
            <span className="demo-header-badge">Gratuit</span>
          </div>
          <div className="demo-header-right">
            <button className="demo-search-btn" type="button">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <div className="demo-avatar">SK</div>
          </div>
        </header>

        {/* Content */}
        <div className="demo-content">
          {/* Stats Grid */}
          <div className="demo-stats-grid demo-anim demo-anim-d1">
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--sage)' }}>
              <div className="demo-stat-label">Biens</div>
              <div className="demo-stat-value">2 / 2 max</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--info)' }}>
              <div className="demo-stat-label">Valeur estimée</div>
              <div className="demo-stat-value">385 000 €</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--warning)' }}>
              <div className="demo-stat-label">Prêts en cours</div>
              <div className="demo-stat-value">2</div>
              <div className="demo-stat-sub">Capital restant : 245 800 €</div>
            </div>
            <div className="demo-stat-card" style={{ borderLeftColor: 'var(--muted)', opacity: 0.5 }}>
              <div className="demo-stat-label">Loyers</div>
              <div className="demo-stat-value">🔒</div>
              <div className="demo-stat-sub">Module Essentiel requis</div>
            </div>
          </div>

          {/* Table: Mes biens */}
          <div className="demo-card demo-anim demo-anim-d2">
            <h3>🏠 Mes biens</h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Adresse</th>
                  <th>Type</th>
                  <th>Valeur</th>
                  <th>Prêt actif</th>
                  <th>Statut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Résidence principale</td>
                  <td className="td-sub">12 rue des Lilas, Paris 11e</td>
                  <td className="td-muted">Appartement T3 · 68m²</td>
                  <td className="td-value">295 000 €</td>
                  <td className="td-muted">Oui — CRD 189 200 €</td>
                  <td><span className="badge badge-info">Résidence</span></td>
                </tr>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td className="td-sub">8 av. de la Résistance, 93100</td>
                  <td className="td-muted">Studio · 24m²</td>
                  <td className="td-value">90 000 €</td>
                  <td className="td-muted">Oui — CRD 56 600 €</td>
                  <td><span className="badge badge-muted">Non loué</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table: Prêts actifs */}
          <div className="demo-card demo-anim demo-anim-d3">
            <h3>💶 Prêts actifs</h3>
            <table>
              <thead>
                <tr>
                  <th>Bien</th>
                  <th>Banque</th>
                  <th>Capital emprunté</th>
                  <th>CRD</th>
                  <th>Mensualité</th>
                  <th>Taux</th>
                  <th>Fin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-main">Résidence principale</td>
                  <td className="td-muted">Crédit Mutuel</td>
                  <td className="td-value">240 000 €</td>
                  <td className="td-value">189 200 €</td>
                  <td className="td-value">1 050 €</td>
                  <td className="td-muted">1,45%</td>
                  <td className="td-muted">Sept 2041</td>
                </tr>
                <tr>
                  <td className="td-main">Studio Montreuil</td>
                  <td className="td-muted">BNP Paribas</td>
                  <td className="td-value">72 000 €</td>
                  <td className="td-value">56 600 €</td>
                  <td className="td-value">380 €</td>
                  <td className="td-muted">1,80%</td>
                  <td className="td-muted">Mars 2038</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Upgrade Banner */}
          <div className="demo-upgrade-banner demo-anim demo-anim-d4">
            <div className="demo-upgrade-icon">🚀</div>
            <div className="demo-upgrade-text">
              Passez en <strong>Essentiel</strong> (19€/mois) pour débloquer la gestion locative, le coffre-fort documentaire, les alertes et gérer jusqu&apos;à 3 biens.
            </div>
            <button className="demo-upgrade-btn" type="button">
              Découvrir le plan Essentiel →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
