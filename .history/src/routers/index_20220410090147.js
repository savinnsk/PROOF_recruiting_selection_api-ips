const { Router } = require("express");
const axios = require("axios");

const router = Router();

let database = {};

router.get("/", async (req, res) => {
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
  res.send(database);
});

router.post("/remove/", (req, res) => {
  let listIps = [];

  const { ip } = req.body;

  console.log(ip);

  listIps = database.filter((e) => ip.includes(e) !== true);

  database = listIps;
  res.send(database);
});

router.get("/ips", (req, res) => {
  res.send(database);
});

module.exports = { router };
