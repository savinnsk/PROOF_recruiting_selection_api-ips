const db = require("../config/db");

class IpDB  {
  
  getAllIps(data) {
    const query = `
    INSERT INTO ips (
        ip
    ) VALUES ($1)
    RETURNING id`;

    const values = [data];

    db.query(query, values, function (err) {
      if (err) console.log(`Database error ${err}`);
    });
  },

  delete(ip) {
    db.query(`DELETE FROM ips WHERE ip = $1`, [ip], function (err) {
      if (err) throw `Database error ${err}`;
    });
  },

  getAllUpdated(callback) {
    db.query(`SELECT ip from ips`, function (err, results) {
      if (err) return res.send(`Database error ${err}`);

      callback(results.rows);
    });
  },
};
