const { Pool } = require("pg");

module.export = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "ipsdb",
});
