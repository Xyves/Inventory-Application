const { Pool } = require("pg");
module.exports = new Pool({
  url: process.env.DB_URL,
  max: 20, // maximum number of connections in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // how long to wait for a connection to be established
});
