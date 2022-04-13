import { GetAllIps} from "./GetAllIps"
import {IpDB} from "../repositories/IpDB"

const ipDB = new IpDB()
const getAllIps = new GetAllIps(ipDB)