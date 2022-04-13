 
import {Ip} from "../interfaces/Ip"

import axios from "axios";
const IpDB = require("../repositories/IpDB");

module.exports = {

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
      IpDB.getAllIps(ip);
    });

    IpDB.getAllUpdated((data : Ip[]) => {
      res.status(200).send({
        message :"Ips stored inside database",
        data: data
      
      });
    });
  },

  remove(req, res) {
    const {ip} = req.body;
    IpDB.delete(ip);

    res.status(200).send({
      message :`ip : ${ip}  removed`
    });
  },

  getAllIpsUpdated(req, res) {
    IpDB.getAllUpdated((data) => {
      res.status(200).send(data);
    });
  },
};
