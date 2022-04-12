const Pool = require("pg");

export default new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "ipsdb",
});
