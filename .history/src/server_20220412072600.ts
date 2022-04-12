const express = require("express");
const app = express();
import { router } from "./routers";

app.use(express.json());
app.use(router);

app.listen(3000, console.log("server is running"));
