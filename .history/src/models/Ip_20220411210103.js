const db = require("../config/db");

module.exports = {
  getAllIps(data, callback) {
    const query = `
    INSERT INTO ips (
        ip
    ) VALUES ($1)
    RETURNING id`;

    const values = [data.ip];

    db.query(query, values, function (err, results) {
      if (err) console.log(`Database error ${err}`);
      //callback(results.rows[0]);
    });
  },
};
