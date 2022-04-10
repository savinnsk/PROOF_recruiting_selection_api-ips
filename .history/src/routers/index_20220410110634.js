const { Router } = require("express");
const ipController = require("../controllers/ipController");

const router = Router();

router.get("/", ipController.getAllIps);

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
