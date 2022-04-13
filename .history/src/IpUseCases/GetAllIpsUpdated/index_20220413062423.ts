import { GetAllIpsUpdatedUseCase } from "./GetAllIpsUpdatedUseCase";
import { IpDB} from "../../repositories/IpDB";

const ipDB = new IpDB();
const getAllIpsUpdated = new GetAllIpsUpdatedUseCase(ipDB);