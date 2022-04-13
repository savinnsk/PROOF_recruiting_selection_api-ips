import { Router } from "express";
//const ipController = require("../controllers/ipControllerPostgres");
import { getAllIps} from "../IpUseCases/FecthAllIps"
import { removeIpUseCase } from "../IpUseCases/RemoveIp";

const router : any = Router();

router.get("/", (req ,res) => {
    getAllIps.execute(req , res)
});

router.post("/remove/", (req , res) => {
    removeIpUseCase.execute(req , res)
});

//router.get("/ips", ipController.getAllIpsUpdated);

export { router };
