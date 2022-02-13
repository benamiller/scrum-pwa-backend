const express = require("express");
const router = express.Router();
const supabaseProvider = require("./provider");
const scrumsProvider = supabaseProvider.from("scrums");
const scrumsRouter = require("./routes/scrums.js");

app.use("/scrums", scrumsRouter);
