const axios = require("axios");
const fs = require("fs");
const database = require("../../database.json");

let databaseO = {};

module.exports = {
  async getAllIps(req, res) {
    async function fetchIps() {
      let ipsArray = [];

      const fetch = await axios.get(
        "https://onionoo.torproject.org/summary?limit=5000"
      );
      const all = await fetch.data.relays;
      all.map((ip) => ipsArray.push(ip.a[0]));
      return ipsArray;
    }

    const ips = await fetchIps();
    database = ips;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
      if (err) return res.send("write file error");
    });

    res.status(201).send(database);
  },
};
