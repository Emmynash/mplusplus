const config = {
    env: "production",
    microserviceName: process.env.MICROSERVICE_NAME || "M++",
    secret: process.env.APP_SECRET || "0amtrVMbucMKCzlc",
    // microserviceURL: process.env.MICROSERVICE_URL,
    microserviceURL: 'mysql://b8cb1fe21a847a:11f5b200@us-cdbr-iron-east-02.cleardb.net/heroku_0db1e198211f64f?reconnect=true',
    port: process.env["PORT"] || 8080,
    db: {
        // "username": process.env.DATABASE_USERNAME,
        // "password": process.env.DATABASE_PASSWORD,
        // "database": process.env.DATABASE_NAME,
        // "host": process.env.DATABASE_HOST,
        // "dialect": 'mysql'
        "username": "b8cb1fe21a847a",
        "password": "11f5b200",
        "database": "heroku_0db1e198211f64f",
        "host": "us-cdbr-iron-east-02.cleardb.net",
        "dialect": 'mysql'
    },
    pubsubDriver: process.env["PUB_SUB_DRIVER"] || "redis", //{SNS}
};

module.exports = Object.assign({}, config, require("./base"));