let { Pool } = require("pg");

let pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "members",
  password: "1122",
  port: 5432,
});

module.exports = pool;
