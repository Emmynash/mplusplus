var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLDate = require('graphql').GraphQLString;
var PatientGraphQLType = require('../Doctor/DoctorType').DoctorType;
var PatientModel = require('../../models/Doctor');
const _ = require('lodash');
const config = require('../../config');
const moment = require('moment-timezone');

var ArgFieldTypes = {
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
    employer_name: {
        type: GraphQLString
    },
    employer_address: {
        type: GraphQLString
    },
    employer_phone: {
        type: GraphQLString
    },
    emergency_contact_name: {
        type: GraphQLString
    },
    emergency_contact_phone: {
        type: GraphQLString
    },
    emergency_contact_address: {
        type: GraphQLString
    },
    country: {
        type: GraphQLString
    },
    billing_profile_id: {
        type: GraphQLString
    },
    billing_profile_name: {
        type: GraphQLString
    },
    insurance_scheme_id: {
        type: GraphQLString
    },
    insurance_scheme_policy_number: {
        type: GraphQLString
    },
    insurance_scheme_name: {
        type: GraphQLString
    },
    preferred_notification_language: {
        type: GraphQLString
    },
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.DoctorType = new GraphQLObjectType({
    name: 'Doctor',
    fields: () => {
        return Object.assign({}, ArgFieldTypes, {
            id: {
                type: new GraphQLNonNull(GraphQLID)
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
            employer_name: {
                type: GraphQLString
            },
            employer_address: {
                type: GraphQLString
            },
            employer_phone: {
                type: GraphQLString
            },
            emergency_contact_name: {
                type: GraphQLString
            },
            emergency_contact_phone: {
                type: GraphQLString
            },
            emergency_contact_address: {
                type: GraphQLString
            },
            country: {
                type: GraphQLString
            },
            billing_profile_id: {
                type: GraphQLString
            },
            billing_profile_name: {
                type: GraphQLString
            },
            insurance_scheme_id: {
                type: GraphQLString
            },
            insurance_scheme_policy_number: {
                type: GraphQLString
            },
            insurance_scheme_name: {
                type: GraphQLString
            },
            preferred_notification_language: {
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