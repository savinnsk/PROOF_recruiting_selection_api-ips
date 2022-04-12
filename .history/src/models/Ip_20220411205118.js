const db = require("../config/db");

module.exports = {
  getAllIps(data, callback) {
    const query = `
    INSERT INTO ips (
        ips
    ) VALUES ($1)
    RETURNING id`;
  },
};
