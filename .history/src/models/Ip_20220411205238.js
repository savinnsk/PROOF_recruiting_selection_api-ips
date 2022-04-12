const db = require("../config/db");

module.exports = {
  getAllIps(data, callback) {
    const query = `
    INSERT INTO ips (
        ip
    ) VALUES ($1)
    RETURNING id`;

    const values = [data.ip];
  },
};
