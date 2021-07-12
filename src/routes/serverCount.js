/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const express = require("express");
const mongoose = require("mongoose");

// eslint-disable-next-line no-undef
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB: ", err);
    });

const router = express.Router();
router.get("/", (req, res) => {
    res.status(200).send("This API is coming soon");
    res.end();
});
