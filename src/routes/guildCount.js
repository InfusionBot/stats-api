/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const express = require("express");
const mongoose = require("mongoose");

const Stats = mongoose.model("Stats").schema;
const router = express.Router();
router.get("/", async (req, res) => {
    const stats = await require("../utils/getStats")("Welcome-Bot");
    res.send(stats.guildCount.toString());
    res.end();
});
router.post("/:botId", async (req, res) => {
    let botId;
    if (req.params.botId.indexOf("beta") !== -1) {
        botId = "Welcome-Bot (beta)";
    } else {
        botId = "Welcome-Bot";
    }
    if (req.headers.authorization === process.env.authorization) {
        await require("../utils/updateStats")(botId, "guildCount", req.body);
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
    res.end();
});
module.exports = router;
