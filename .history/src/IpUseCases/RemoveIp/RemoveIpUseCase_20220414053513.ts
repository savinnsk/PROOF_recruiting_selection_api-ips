import { InterfaceIpDB } from "../../repositories/InterfaceIpDB";
import {Request , Response} from "express"

class RemoveIpUseCase {
    constructor (private ipDB : InterfaceIpDB){}

    execute(req : Request, res : Response) {
      try{  
        const {ip} = req.body;
        this.ipDB.remove(ip);
      
          res.status(200).send({
            message :`ip : ${ip}  removed`
        });
      }catch(error){
        res.status(500).send()
        console.log(`${error}`)
      }
      }

}

export { RemoveIpUseCase}