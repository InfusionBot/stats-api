/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const mongoose = require("mongoose");

const stats = new mongoose.Schema({
    bot: {
        type: String,
        required: true,
        trim: true,
        default: "Welcome-Bot",
    },
    guildCount: {
        type: Number,
        required: true,
        trim: true,
        default: 0,
    },
    shardCount: {
        type: Number,
        required: true,
        trim: true,
        default: 0,
    },
});

module.exports = new mongoose.model("Stats", stats);
