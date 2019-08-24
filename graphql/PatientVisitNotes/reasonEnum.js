const GraphQLEnumType = require('graphql').GraphQLEnumType;

const reasonEnumType = new GraphQLEnumType({
    name: 'reasonEnum',
    values: {
        normal: {
            value: 0,
        },
        admission: {
            value: 1,
        },
        antenatal: {
            value: 2,
        },
    },
});

module.exports = reasonEnumType;