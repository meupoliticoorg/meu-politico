const express = require('express');
const router = express.Router();
const path = require('path');
const { readJSON } = require('../utils/cacheFile');
const POLITICOS_FILE = path.join(__dirname, '..', 'data', 'politicos.json');
const NOTICIAS_FILE = path.join(__dirname, '..', 'data', 'noticias.json');
router.get('/', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const politicos = (readJSON(POLITICOS_FILE) || []).filter(p =>
    p.nome.toLowerCase().includes(q) || p.partido.toLowerCase().includes(q)
  );
  const noticias = (readJSON(NOTICIAS_FILE) || []).filter(n =>
    n.titulo.toLowerCase().includes(q)
  );
  res.json({ query: q, politicos, noticias });
});
module.exports = router;
