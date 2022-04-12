const { Router } = require("express");
const ipControllerPostgres = require("../controllers/ipControllerPostgres");

const router = Router();

router.get("/", ipController.getAllIps);

router.post("/remove/", ipController.remove);

router.get("/ips", ipController.getAllIpsUpdated);

module.exports = { router };
