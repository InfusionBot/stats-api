/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
require("dotenv").config();

process.on("unhandledRejection", (error) => {
    if (error.toString().indexOf("No bot with bot name") !== -1) {
        require("./utils/addStats")(
            err.toString().replace("No bot with bot name", "").trim()
        );
    } else {
        console.error("Unhandled promise rejection:", error);
    }
});

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

require("./controllers/apiLimiter");
require("./models/statsSchema");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/guildCount", require("nocache")());

app.use("/guildCount", require("./routes/guildCount"));

app.use(function (req, res, next) {
    console.log("Wrong ping 404");
    res.status(404).send("Sorry can't find that!");
    res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Running on port ${port}...`);
});
