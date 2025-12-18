// server-database.js
import express from 'express';
import cors from 'cors';
import pg from 'pg';

const { Pool } = pg;

const app = express();

// Простейший CORS
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'misha2005',
  port: 5432,
});

// Только три рабочих endpoints
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'OK' });
  } catch (err) {
    res.status(500).json({ status: 'ERROR', error: err.message });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT "номер_телефона", "имя" 
      FROM public."nonьзователь"
      ORDER BY "номер_телефона" ASC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Корневой маршрут
app.get('/', (req, res) => {
  res.json({ 
    app: 'StoreAuto API',
    version: '1.0.0',
    endpoints: ['/api/health', '/api/users', '/api/test']
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});