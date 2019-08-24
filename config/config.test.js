const config = {
  env: "test",
  microserviceName: process.env.MICROSERVICE_NAME || "M++",
  secret: process.env.APP_SECRET || "0amtrVMbucMKCzlc",
  microserviceURL: process.env.MICROSERVICE_URL,
  port: process.env["PORT"] || 8080,
  db: {
    url: process.env["DATABASE_URL"],
  },
  pubsubDriver: process.env["PUB_SUB_DRIVER"] || "redis", //{SNS}
};

module.exports = Object.assign({}, config, require("./base"));
