const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware pro zpracování JSON
app.use(bodyParser.json());

// Endpoint pro ukládání statistiky
app.post('/api/statistics', (req, res) => {
  const { digit } = req.body;
  // Zde byste měli uložit statistiku do databáze (MongoDB, MySQL, atd.)
  console.log(`Přidáno: ${digit}`);
  res.json({ success: true });
});

// Spuštění serveru
app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});
