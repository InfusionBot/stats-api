/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const express = require("express");
const mongoose = require("mongoose");

const Stats = mongoose.model("Stats").schema;
const router = express.Router();
const servers = require("../utils/getStats")("Welcome-Bot").guildCount;
router.get("/", (req, res) => {
    console.log(servers);
    res.status(200).send("This API is coming soon");
    res.end();
});
