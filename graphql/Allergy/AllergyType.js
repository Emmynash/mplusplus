var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLDate = require('graphql').GraphQLString;
var PatientGraphQLType = require('../Patient/PatientType').PatientType;
var PatientModel = require('../../models/Patient');
const _ = require('lodash');
const config = require('../../config');
const moment = require('moment-timezone');

var ArgFieldTypes = {
    emr_id: {
        type: new GraphQLNonNull(GraphQLString)
    },
    description: {
        type: new GraphQLNonNull(GraphQLString)
    },
    user_name: {
        type: GraphQLString
    },
    user_id: {
        type: GraphQLString
    },
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.AllergyType = new GraphQLObjectType({
    name: 'Allergy',
    fields: () => {
        return Object.assign({}, ArgFieldTypes, {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            patient: {
                type: PatientGraphQLType,
                async resolve(parent, args) {
                    // if(_.isObject(parent.patient)){
                    //     return parent.patient;
                    // }
                    return await PatientModel.findOne({ emr_id: parent.emr_id });
                }
            },
            legacy_emr_id: {
                type: GraphQLString
            },
            first_name: {
                type: GraphQLString
            },
            last_name: {
                type: GraphQLString
            },
            other_names: {
                type: GraphQLString
            },
            patient_name: {
                type: GraphQLString
            },
            dob: {
                type: GraphQLDate,
                resolve(parent, args) {
                    if (!_.isNull(parent.dob)) {
                        return moment.tz(parent.dob, config.timeZone).format('YYYY-MM-DD');
                    }
                }
            },
            marital_status: {
                type: GraphQLString
            },
            sex: {
                type: GraphQLString
            },
            place_of_birth: {
                type: GraphQLString
            },
            city: {
                type: GraphQLString
            },
            state: {
                type: GraphQLString
            },
            occupation: {
                type: GraphQLString
            },
            primary_phone: {
                type: GraphQLString
            },
            work_phone: {
                type: GraphQLString
            },
            email: {
                type: GraphQLString
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