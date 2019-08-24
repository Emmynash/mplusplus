const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema');
require('dotenv').config();
const app = express();
const cors = require('cors');

const log = require('./utils/Logger');
const config = require('./config');

app.use(cors());
app.options('*', cors());

log.info(`🚀  Starting the ${config.microserviceName} microservice`);

app.use(
    "/graphql",
    cors(),
    graphqlHTTP({
        schema,
        graphiql: true,
        pretty: true
    })
);

app.listen(config.port, () => {
    log.info(`🚀  ${config.microserviceName} Started on ${config.port}.`);
});

require("./models").sequelize.sync({
    logging: process.env.NODE_ENV !== "production" ? console.log : false
}).then(() => {
    log.info(`DB Synced.... ${config.microserviceName} 🚀 running at http://${process.env.DATABASE_HOST}:${config.port}/graphql`);
}).catch((err) => console.log(err));