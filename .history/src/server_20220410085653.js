const express = require("express");
const app = express();
const axios = require("axios");
const { router } = require("./routers");

app.use(express.json());
app.use(router());

let database = {};

async function fetchIps() {
  let ipsArray = [];

  const fetch = await axios.get(
    "https://onionoo.torproject.org/summary?limit=5000"
  );
  const all = await fetch.data.relays;
  all.map((ip) => ipsArray.push(ip.a[0]));
  return ipsArray;
}

app;

app.listen(3000, console.log("server is running"));
