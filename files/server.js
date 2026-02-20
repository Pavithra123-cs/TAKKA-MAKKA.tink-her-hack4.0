const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS middleware - allow frontend requests
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// FIX: removed pool-only options (waitForConnections, connectionLimit, queueLimit)
// those only belong on mysql.createPool(), not createConnection()
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Pavithra2006",
  database: "crisis_connect"
});

db.connect(err => {
  if (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  }
  console.log("MySQL Connected ✓");
});

// Keep connection alive (prevent timeout drops)
setInterval(() => {
  db.query("SELECT 1", err => {
    if (err) console.error("Keep-alive query failed:", err.message);
  });
}, 30000);

// ── Health check ─────────────────────────────────────────────
app.get("/health", (req, res) => {
  res.json({ status: "Server running", db: "Connected" });
});

// ── POST /report — insert into database ──────────────────────
app.post("/report", (req, res) => {
  console.log("Report received:", req.body);

  const { type, name, phone, description, time, location } = req.body;

  if (!type || !description || !time) {
    return res.status(400).json({ success: false, error: "Missing required fields: type, description, time" });
  }

  const sql = `INSERT INTO reports (crisis_type, name, phone, description, incident_time, location)
               VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [type, name || "Anonymous", phone || "N/A", description, time, location || "Not provided"],
    (err, result) => {
      if (err) {
        console.error("DB Insert Error:", err.message);
        return res.status(500).json({ success: false, error: err.message });
      }
      res.json({ success: true, id: "CR-" + (10000 + result.insertId) });
    }
  );
});

// ── GET /seen — fetch all reports ────────────────────────────
app.get("/seen", (req, res) => {
  const sql = "SELECT * FROM reports ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("DB Query Error:", err.message);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
  console.log("Test: curl http://localhost:3000/health");
});
