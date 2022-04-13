import {Ip} from "../models/Ip"




interface InterfaceIpDB {

    getAllIps(ip : Ip ) : void,
    getAllIpsUpdated(data : any ) : void
    remove(ip : Ip) : void,
   
    
}


export {InterfaceIpDB}