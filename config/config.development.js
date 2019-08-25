require("dotenv").config({ path: __dirname + "/../.env" });

const config = {
    env: "development",
    microserviceName: process.env.MICROSERVICE_NAME || "M++ CoreMX",
    secret: process.env.APP_SECRET || "0amtrVMbucMKCzlc",
    microserviceURL: process.env.MICROSERVICE_URL,
    port: process.env["PORT"] || 4000,

    db: {
        "url": process.env.DATABASE_URL,
        options: {
            timeout: 50000,
            "dialect": 'mysql' || 'sqlite' || 'postgres' || 'mssql'
        }
    },
    pubsubDriver: process.env["PUB_SUB_DRIVER"] || "redis", //{SNS}
};

module.exports = Object.assign({}, config, require("./base"));