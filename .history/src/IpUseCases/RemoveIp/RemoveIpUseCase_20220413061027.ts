import { InterfaceIpDB } from "../../repositories/InterfaceIpDB";

class RemoveIpUseCase {
    constructor (private IpDB : InterfaceIpDB){}

    execute(req, res) {
        const {ip} = req.body;
        this.ipDB.remove(ip);
    
        res.status(200).send({
          message :`ip : ${ip}  removed`
        });
      }

}

export { RemoveIpUseCase}