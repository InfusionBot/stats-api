/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const express = require("express");
const mongoose = require("mongoose");

const Stats = mongoose.model("Stats").schema;
const router = express.Router();
let servers;
Guild.where({}).count((err, count) => {
    if (err) {
        console.error(err);
    } else {
        servers = count;
    }
});
router.get("/", (req, res) => {
    console.log(servers);
    res.status(200).send("This API is coming soon");
    res.end();
});
