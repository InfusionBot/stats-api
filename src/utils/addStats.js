/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const Stats = require("../models/statsSchema");

module.exports = (botName) => {
    return new Promise((resolve, reject) => {
        Stats.where({ bot: botName }).findOne((err, stats) => {
            if (err) {
                return reject(err);
            } else if (stats) {
                return reject("Stats for " + botName + " already added");
            } else {
                stats = new Stats({
                    bot: botName,
                });
                stats.save((err) => {
                    if (err) {
                        return reject(err);
                    } else {
                        return resolve(true);
                    }
                });
            }
        });
    });
};
