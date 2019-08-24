var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLDate = require('graphql').GraphQLString;
var _ = require('lodash');
var config = require('../../config');
const moment = require('moment-timezone'); 

var ArgFieldTypes = {
    name: { type: new GraphQLNonNull(GraphQLString) },
    service_request_id: { type: GraphQLString },
    encounter_id: { type: GraphQLString },
    service_id: { type: GraphQLString },
    emr_id: { type: GraphQLString },
    legacy_emr_id: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    other_names: { type: GraphQLString },
    dob: { type: GraphQLString },
    marital_status: { type: GraphQLString },
    sex: { type: GraphQLString },
    place_of_birth: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    local_government: { type: GraphQLString },
    occupation: { type: GraphQLString },
    country: { type: GraphQLString },
    billing_profile_id: { type: GraphQLString },
    billing_profile_name: { type: GraphQLString },
    insurance_scheme_id: { type: GraphQLString },
    insurance_scheme_policy_number: { type: GraphQLString },
    insurance_scheme_name: { type: GraphQLString },
    pathologist_user_id: { type: GraphQLString },
    pathologist_user_name: { type: GraphQLString },
    physician_user_id: { type: GraphQLString },
    physician_user_name: { type: GraphQLString },
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.PatientLabType = new GraphQLObjectType({
    name: 'PatientLab',
    fields:  () =>{
        return Object.assign({}, ArgFieldTypes, {
            name: { type: new GraphQLNonNull(GraphQLString) },
            service_request_id: { type: GraphQLString },
            encounter_id: { type: GraphQLString },
            service_id: { type: GraphQLString },
            emr_id: { type: GraphQLString },
            legacy_emr_id: { type: GraphQLString },
            first_name: { type: GraphQLString },
            last_name: { type: GraphQLString },
            other_names: { type: GraphQLString },
            dob: { type: GraphQLString },
            marital_status: { type: GraphQLString },
            sex: { type: GraphQLString },
            place_of_birth: { type: GraphQLString },
            address: { type: GraphQLString },
            city: { type: GraphQLString },
            state: { type: GraphQLString },
            local_government: { type: GraphQLString },
            occupation: { type: GraphQLString },
            country: { type: GraphQLString },
            billing_profile_id: { type: GraphQLString },
            billing_profile_name: { type: GraphQLString },
            insurance_scheme_id: { type: GraphQLString },
            insurance_scheme_policy_number: { type: GraphQLString },
            insurance_scheme_name: { type: GraphQLString },
            pathologist_user_id: { type: GraphQLString },
            pathologist_user_name: { type: GraphQLString },
            physician_user_id: { type: GraphQLString },
            physician_user_name: { type: GraphQLString },
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
