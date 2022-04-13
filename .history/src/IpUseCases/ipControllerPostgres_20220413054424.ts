import axios from "axios";
import {IpDB} from "../repositories/IpDB"; //needs initializate
import {Ip} from "../models/Ip"
import {InterfaceIpDB} from "../repositories/InterfaceIpDB"

class IpController  {

  constructor(private ipDB : InterfaceIpDB  ){}

  
  remove(req, res) {
    const {ip} = req.body;
    this.ipDB.remove(ip);

    res.status(200).send({
      message :`ip : ${ip}  removed`
    });
  }

  getAllIpsUpdated(req, res) {
    this.ipDB.getAllIpsUpdated((data) => {
      res.status(200).send(data);
    });
  }
};


export {IpController}