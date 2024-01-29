const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());


app.post('/api/statistics', (req, res) => {
  const { digit } = req.body;

  console.log(`Přidáno: ${digit}`);
  res.json({ success: true });
});
  
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});
