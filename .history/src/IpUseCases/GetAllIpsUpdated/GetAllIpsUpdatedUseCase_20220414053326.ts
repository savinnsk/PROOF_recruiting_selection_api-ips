import { InterfaceIpDB } from "../../repositories/InterfaceIpDB";

class GetAllIpsUpdatedUseCase {

    constructor (private ipDB : InterfaceIpDB ){}

    execute(req, res) {
      try{
        this.ipDB.getAllIpsUpdated((data) => {
          res.status(200).send(data);
        });

      }catch(error){}
    }
}

export {GetAllIpsUpdatedUseCase}