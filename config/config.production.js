const config = {
  env: "production",
  microserviceName: process.env.MICROSERVICE_NAME || "M++",
  secret: process.env.APP_SECRET || "0amtrVMbucMKCzlc",
  microserviceURL: process.env.MICROSERVICE_URL,
  port: process.env["PORT"] || 8080,
  db: {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  },
  pubsubDriver: process.env["PUB_SUB_DRIVER"] || "redis", //{SNS}
};

module.exports = Object.assign({}, config, require("./base"));
