const { Pool } = require("pg");
require("dotenv").config();
module.exports = new Pool({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  user: process.env.PGUSER,
  port: 5432,
  ssl: true,
});
