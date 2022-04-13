import {Ip} from "../models/Ip"




interface InterfaceIpDB {

    getAllIps(ip : Ip ) : void,
    remove() : void,
    getAllIpsUpdated() : void
    
}


export {InterfaceIpDB}