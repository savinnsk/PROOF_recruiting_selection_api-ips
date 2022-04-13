import {Ip} from "../models/Ip"




interface InterfaceIpDB {

    getAllIps(ip : Ip ) : void,
    getAllIpsUpdated(data : Ip[]) : any
    remove(ip : Ip) : void,
   
    
}


export {InterfaceIpDB}