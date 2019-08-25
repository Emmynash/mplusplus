const env = process.env.NODE_ENV || "development";

module.exports = require(`./config.${process.env.NODE_ENV}`);

// module.exports = require('./config.production');