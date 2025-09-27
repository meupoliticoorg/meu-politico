const express = require('express');
const router = express.Router();
const path = require('path');
const { readJSON } = require('../utils/cacheFile');
const DATA_FILE = path.join(__dirname, '..', 'data', 'noticias.json');
router.get('/', (req, res) => {
  const data = readJSON(DATA_FILE) || [];
  res.json({ total: data.length, results: data });
});
module.exports = router;
