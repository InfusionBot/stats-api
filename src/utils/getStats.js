  
/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const Stats = require("../models/statsSchema");

module.exports = (botName) => {
    return new Promise((resolve, reject) => {
        Stats.where({ bot: botName }).findOne((err, stats) => {
            if (err) {
                return reject("Error finding stats for " + botName);
            } else if (stats) {
                return resolve(stats);
            } else {
                return reject("No bot with bot name " + botName);
            }
        });
    });
};
