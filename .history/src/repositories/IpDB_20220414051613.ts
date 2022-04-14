const db = require("../config/db");
import { Ip } from "../models/Ip";

class IpDB  {
  
  getAllIps(ip : Ip) {
    const query = `
    INSERT INTO ips (
        ip
    ) VALUES ($1)
    RETURNING id`;

    const values = [ip];

    db.query(query, values, function (err) {
      if (err) console.log(`Database error ${err}`);
    });
  }

  remove(ip : Ip ) {
    db.query(`DELETE FROM ips WHERE ip = $1`, [ip], function (err) {
      if (err) throw `Database error ${err}`;
    });
  }

  getAllIpsUpdated(callback) {
    db.query(`SELECT ip from ips`, function (err, results) {
      if (err)  throw (`Database error ${err}`);

      callback(results.rows);
    });
  }
};

export {IpDB}
