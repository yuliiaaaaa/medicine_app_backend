require("dotenv").config();
const { Pool } = require("pg");

let pool;

if (process.env.DB_URL) {
  pool = new Pool({
    connectionString: process.env.DB_URL,
  });
} else {
  pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
}
module.exports = pool;
