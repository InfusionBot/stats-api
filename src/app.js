/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
require("dotenv").config();
const express = require("express");

require("./controllers/apiLimiter");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/serverCount", require("nocache")());

app.use("/serverCount", require("./routes/serverCount"));

app.use(function (req, res, next) {
    console.log("Wrong ping 404");
    res.status(404).send("Sorry can't find that!");
    res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Running on port ${port}...`);
});
