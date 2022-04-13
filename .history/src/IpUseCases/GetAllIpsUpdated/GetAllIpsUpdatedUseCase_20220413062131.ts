import { InterfaceIpDB } from "../../repositories/InterfaceIpDB";

class getAllIpsUpdatedUseCase {

    constructor (private ipDB : InterfaceIpDB ){}

    execute(req, res) {
        this.ipDB.getAllIpsUpdated((data) => {
          res.status(200).send(data);
        });
      }
}