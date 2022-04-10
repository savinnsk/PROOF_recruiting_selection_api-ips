const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
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


module.exports{router}