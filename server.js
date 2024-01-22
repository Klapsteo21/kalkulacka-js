const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint pro ukládání statistiky
app.post('/api/statistics', (req, res) => {
  const { digit } = req.body;
  // Zde byste měli uložit statistiku do databáze (MongoDB, MySQL, atd.)
  console.log(`Přidáno: ${digit}`);
  res.json({ success: true });
});

// Endpoint pro servírování statických souborů (HTML, CSS, JS)
app.use(express.static(__dirname));

// Endpoint pro servírování index.html i při GET požadavcích
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});
