import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const PORT = 3000

// Liste aller Brief‑IDs
app.get('/api/briefe', (req, res) => {
  res.json(['vorlage']);
});

// Einzelnen Brief holen
app.get('/api/briefe/:id', (req, res) => {
  const { id } = req.params;

  const filePath = path.join(__dirname, 'briefe', `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Brief nicht gefunden' });
  }

  const data = fs.readFileSync(filePath, 'utf8');
  const brief = JSON.parse(data);

  res.json(brief);
});

app.listen(PORT, () => {
    console.log(`Backend läuft auf http://localhost:${PORT}`);
});