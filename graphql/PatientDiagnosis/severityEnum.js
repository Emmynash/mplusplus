const GraphQLEnumType = require('graphql').GraphQLEnumType;

const severityEnumType = new GraphQLEnumType({
    name: 'SeverityEnum',
    values: {
        acute: {
            value: 0,
        },
        chronic: {
            value: 1,
        },
        recurrent: {
            value: 2,
        },
    },
});

module.exports = severityEnumType;