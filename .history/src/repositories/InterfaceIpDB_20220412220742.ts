import {Ip} from "../models/Ip"




interface InterfaceIpDB {

    getAllIps(ip : Ip ) : void,
    remove(ip : Ip) : void,
    getAllIpsUpdated(data : Ip[]) : void
    
}


export {InterfaceIpDB}