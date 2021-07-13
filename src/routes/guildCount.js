/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const express = require("express");
const mongoose = require("mongoose");

const Stats = mongoose.model("Stats").schema;
const router = express.Router();
router.get("/", async (req, res) => {
    const servers = await require("../utils/getStats")("Welcome-Bot")
        .guildCount;
    res.status(200).send(servers);
    res.end();
});
module.exports = router;
