const express = require('express');
const cors = require('cors');
const { startJobs } = require('./jobs/scheduler');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json({ ok: true }));

app.use('/api/politicos', require('./routes/politicos'));
app.use('/api/noticias', require('./routes/noticias'));
app.use('/api/busca', require('./routes/busca'));

if (startJobs) startJobs();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
