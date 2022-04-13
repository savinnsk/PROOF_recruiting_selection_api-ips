import {Ip} from "../models/Ip"




interface InterfaceIpDB {

    getAllIps(ip : Ip ) : void,
    getAllIpsUpdated(data : Ip[] , callback ) : any
    remove(ip : Ip) : void,
   
    
}


export {InterfaceIpDB}