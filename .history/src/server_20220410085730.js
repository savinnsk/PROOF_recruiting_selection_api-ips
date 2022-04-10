const express = require("express");
const app = express();
const axios = require("axios");
const { router } = require("./routers");

app.use(express.json());
app.use(router());

app;

app.listen(3000, console.log("server is running"));
