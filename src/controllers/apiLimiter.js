/**
 * Copyright (c) 2021 The Welcome-Bot Team and Contributors
 * Licensed under Lesser General Public License v2.1 (LGPl-2.1 - https://opensource.org/licenses/lgpl-2.1.php)
 */
const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 60
});
