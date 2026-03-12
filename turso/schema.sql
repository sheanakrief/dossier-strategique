CREATE TABLE IF NOT EXISTS enquete_responses (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  answers      TEXT NOT NULL,
  email        TEXT,
  profile      TEXT,
  free_text    TEXT,
  submitted_at TEXT,
  created_at   TEXT DEFAULT (datetime('now'))
);
