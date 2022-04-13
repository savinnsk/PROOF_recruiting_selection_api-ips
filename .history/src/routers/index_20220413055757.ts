import { Router } from "express";
//const ipController = require("../controllers/ipControllerPostgres");
import { getAllIps} from "../IpUseCases/"

const router : any = Router();

router.get("/", ipController.getAllIps);

//router.post("/remove/", ipController.remove);

//router.get("/ips", ipController.getAllIpsUpdated);

export { router };
