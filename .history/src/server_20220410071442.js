const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", async (req, res) => {});

app.use(express.json);

app.listen(3000, console.log("server is running"));
