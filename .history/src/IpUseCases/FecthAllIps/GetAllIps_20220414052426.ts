import axios from "axios"
import { Ip } from "../../models/Ip";
import { InterfaceIpDB } from "../../repositories/InterfaceIpDB"
import {Request , Response} from "express"

class GetAllIps {

    constructor(private ipDB : InterfaceIpDB){}

    async execute(req  : Request, res : Response){
            async function fetchIps() {
              let ipsArray : Ip[] = [];
        
              const fetch = await axios.get(
                "https://onionoo.torproject.org/summary?limit=5000"
              );
              const all = await fetch.data.relays;
              all.map((ip : any) => ipsArray.push(ip.a[0]));
              return ipsArray;
            }
        
            const ips = await fetchIps();
            const dataToPostgres = { ips : [] };
        
            dataToPostgres.ips = ips;
            
            try{
            dataToPostgres.ips.forEach((ip : Ip) => {
              this.ipDB.getAllIps(ip);
            });
        
            this.ipDB.getAllIpsUpdated((data : Ip[]) => {
              res.status(200).send({
                message :"Ips stored inside database",
                data: data
              
              });
            });

            }catch(error){ 
              res.status(400).send({
              message :`Can't get Ip's ${error}`            
            })
          }
          }
    
    


}

export{GetAllIps}