var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLDate = require('graphql').GraphQLString;
const _ = require('lodash');
const config = require('../../config');
const moment = require('moment-timezone');

var ArgFieldTypes = {
    name: {
        type: GraphQLString,
    },
    description: {
        type: GraphQLString,
    },
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.EncounterTypeType = new GraphQLObjectType({
    name: 'EncounterType',
    fields: () => {
        return Object.assign({}, ArgFieldTypes, {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            created_at: {
                type: GraphQLDate,
                resolve(parent, args) {
                    if (!_.isNull(parent.created_at)) {
                        return moment.tz(parent.created_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            },
            updated_at: {
                type: GraphQLDate,
                resolve(parent, args) {
                    if (!_.isNull(parent.updated_at)) {
                        return moment.tz(parent.updated_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            }
        })
    }
});