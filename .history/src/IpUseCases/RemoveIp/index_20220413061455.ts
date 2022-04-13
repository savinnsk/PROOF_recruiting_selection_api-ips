import { RemoveIpUseCase } from "./RemoveIpUseCase";
import { IpDB } from "../../repositories/IpDB";

const ipDB = new IpDB()
const removeIpUseCase = new RemoveIpUseCase(ipDB);