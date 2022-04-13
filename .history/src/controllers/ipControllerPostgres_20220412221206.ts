import axios from "axios";
import {IpDB} from "../repositories/IpDB";
import {Ip} from "../models/Ip"
import {InterfaceIpDB} from "../repositories/InterfaceIpDB"

class IpController  {

  constructor(private ipDB : InterfaceIpDB  ){}

  async getAllIps(req, res) {
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

    dataToPostgres.ips.forEach((ip : Ip) => {
      this.ipDB.getAllIps(ip);
    });

    this.ipDB.getAllIpsUpdated((data : Ip[]) => {
      res.status(200).send({
        message :"Ips stored inside database",
        data: data
      
      });
    });
  }

  remove(req, res) {
    const {ip} = req.body;
    this.ipDB.remove(ip);

    res.status(200).send({
      message :`ip : ${ip}  removed`
    });
  }

  getAllIpsUpdated(req, res) {
    IpDB.getAllUpdated((data) => {
      res.status(200).send(data);
    });
  }
};
