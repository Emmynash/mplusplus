const GraphQLEnumType = require('graphql').GraphQLEnumType;

const statusEnumType = new GraphQLEnumType({
    name: 'StatusEnum',
    values: {
        acute: {
            differential: 0,
        },
        confirmed: {
            value: 1,
        },
        history: {
            value: 2,
        },
        query: {
            value: 3,
        }
    },
});

module.exports = statusEnumType;