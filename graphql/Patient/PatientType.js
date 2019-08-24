var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLDate = require('graphql').GraphQLString;
var _ = require('lodash');
var config = require('../../config');
const moment = require('moment-timezone'); 

var ArgFieldTypes = {
    parent_emr_id: {
        type: GraphQLString,
    },
    legacy_emr_id: {
        type: GraphQLString,
    },
    first_name: {
        type: new GraphQLNonNull(GraphQLString),
    },
    last_name: {
        type: new GraphQLNonNull(GraphQLString),
    },
    other_names: {
        type: GraphQLString,
    },
    dob: {
        type: GraphQLDate,
        resolve(parent, args){
            if(!_.isNull(parent.dob)){
                return moment.tz(parent.dob, config.timeZone).format('YYYY-MM-DD');
            }
        }
    },
    marital_status: {
        type: GraphQLString,
    },
    user_id: {
        type: GraphQLString,
    },
    user_name: {
        type: GraphQLString,
    },
    sex: {
        type: new GraphQLNonNull(GraphQLString),
    },
    place_of_birth: {
        type: GraphQLString,
    },
    address: {
        type: GraphQLString,
    },
    city: {
        type: GraphQLString,
    },
    state: {
        type: GraphQLString,
    },
    local_government: {
        type: GraphQLString,
    },
    occupation: {
        type: GraphQLString,
    },
    primary_phone: {
        type: GraphQLString,
    },
    secondary_phone: {
        type: GraphQLString,
    },
    work_phone: {
        type: GraphQLString,
    },
    email: {
        type: GraphQLString,
    },
    state: {
        type: GraphQLString,
    },
    employer_name: {
        type: GraphQLString,
    },
    employer_address: {
        type: GraphQLString,
    },
    employer_phone: {
        type: GraphQLString,
    },
    emergency_contact_name: {
        type: GraphQLString,
    },
    emergency_contact_phone: {
        type: GraphQLString,
    },
    emergency_contact_address: {
        type: GraphQLString,
    },
    country: {
        type: GraphQLString,
    },
    billing_profile_id: {
        type: new GraphQLNonNull(GraphQLString),
    },
    billing_profile_name: {
        type: GraphQLString,
    },
    insurance_scheme_id: {
        type: new GraphQLNonNull(GraphQLString),
    },
    insurance_scheme_policy_number: {
        type: GraphQLString,
    },
    insurance_scheme_name: {
        type: GraphQLString,
    },
    preferred_notification_language: {
        type: GraphQLString,
    },
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.PatientType = new GraphQLObjectType({
    name: 'Patient',
    fields:  () =>{
        return Object.assign({}, ArgFieldTypes, {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            emr_id: {
                type: GraphQLString
            },
            name: {
                type: GraphQLString,
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
