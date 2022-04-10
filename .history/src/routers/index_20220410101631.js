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
  res.status(201).send(database);
});

router.post("/remove/", (req, res) => {
  let listIps = [];

  const { ip } = req.body;

  listIps = database.filter((e) => ip.includes(e) !== true);

  database = listIps;
  res.status(200).send(database);
});

router.get("/ips", (req, res) => {
  res.status(200).send(database);
});

module.exports = { router };
