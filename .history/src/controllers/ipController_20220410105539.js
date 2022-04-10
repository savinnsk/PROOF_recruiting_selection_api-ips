const axios = require("axios");
const fs = require("fs");
const data = require("../../data.json");

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

    data = ips;

    fs.writeFile("data.json", JSON.stringify(data, null, 2));

    res.status(201).send(databaseToUp);
  },
};
