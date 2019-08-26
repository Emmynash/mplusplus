require("dotenv").config({ path: __dirname + "/../.env" });

const config = {
    env: "development",
    microserviceName: process.env.MICROSERVICE_NAME || "M++ CoreMX",
    secret: process.env.APP_SECRET || "0amtrVMbucMKCzlc",
    microserviceURL: process.env.MICROSERVICE_URL,
    // microserviceURL: 'mysql://b8cb1fe21a847a:11f5b200@us-cdbr-iron-east-02.cleardb.net/heroku_0db1e198211f64f?reconnect=true',
    port: process.env["PORT"] || 4000,

    db: {
        "url": process.env.DATABASE_URL,
        options: {
            timeout: 50000,
            "dialect": 'mysql'
        }
    },
    pubsubDriver: process.env["PUB_SUB_DRIVER"] || "redis", //{SNS}
};

module.exports = Object.assign({}, config, require("./base"));