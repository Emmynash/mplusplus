var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLNumber = require('graphql').GraphQLFloat;
var GraphQLDate = require('graphql').GraphQLString;
const _ = require('lodash');
const config = require('../../config');
const moment = require('moment-timezone'); 

var ArgFieldTypes = {
    unit: {
        type: GraphQLString,
    },
    name: {
        type: GraphQLString,
    },
    min_value: {
        type: GraphQLNumber,
    },
    max_value: {
        type: GraphQLNumber,
    },
    regex: {
        type: new GraphQLNonNull(GraphQLString),
    },
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.VitalSignTypeType = new GraphQLObjectType({
    name: 'VitalSignType',
    fields:  () =>{
        return Object.assign({}, ArgFieldTypes, {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            created_at: {
                type: GraphQLDate,
                resolve(parent, args){
                    if(!_.isNull(parent.created_at)){
                        return moment.tz(parent.created_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            },
            updated_at: {
                type: GraphQLDate,
                resolve(parent, args){
                    if(!_.isNull(parent.updated_at)){
                        return moment.tz(parent.updated_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            }
        })
    }
});
