/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const Stats = require("../models/statsSchema");

module.exports = (botName, property, value) => {
    return new Promise((resolve, reject) => {
        Stats.where({ bot: botName }).updateOne(
            { [property]: value },
            (err) => {
                if (err) {
                    console.log(err);
                    return reject("Could not update stats");
                } else {
                    return resolve("Stats Updated");
                }
            }
        );
    });
};
