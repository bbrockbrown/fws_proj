const { Pool } = require("pg");
require("dotenv").config();

if (!process.env.DB_INTERNAL_URL) {
  throw new Error("DATABASE_URL is required.");
}

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

pool.connect()
.then(() => console.log('Connected to database'))
.catch(err => console.error('Database connection error:', err.message));

module.exports = pool;