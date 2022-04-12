import { router } from "./routers";
const express = require("express");
const app = express();


app.use(express.json());
app.use(router);

app.listen(3000, console.log("server is running"));
