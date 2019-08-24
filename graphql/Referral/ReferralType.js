var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLGraphQLDate = require('graphql').GraphQLString;
var GraphQLBoolean = require('graphql').GraphQLBoolean;
var GraphQLDate = require('graphql').GraphQLString;
var PatientGraphQLType = require('../Patient/PatientType').PatientType;
var PatientModel = require('../../models/Patient');
var EncounterGraphQLType = require('../Encounter/EncounterType').EncounterType;
var EncounterTypeGraphQLType = require('../EncounterType/EncounterTypeType').EncounterTypeType;
const _ = require('lodash');
const config = require('../../config'); 
const moment = require('moment-timezone'); 

var ArgFieldTypes = {
        emr_id: {
            type: new GraphQLNonNull(GraphQLString)
        },
      clinical_finding: {
        type: GraphQLString,
      },
      investigation: {
        type: GraphQLString,
      },
      provisional_diagnoses: {
        type: GraphQLString
      },
      cancelled: {
        type: GraphQLBoolean,
      },
            cancelled_date: {
                type: GraphQLDate,
                resolve(parent, args){
                    if(!_.isNull(parent.cancelled_date)){
                        return moment.tz(parent.cancelled_date, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            },
            cancelled_by: {
                type: GraphQLString,
            },
            cancelled_by_id: {
                type: GraphQLString,
            },
      reason: {
        type: new GraphQLNonNull(GraphQLString)
      },
      sensitivity: {
        type: GraphQLString, //{Low, Medium, High}
      },
      facility_name: {
        type: GraphQLString,
      },
      facility_id: {
        type: GraphQLString,
      },
      specialization_name: {
        type: GraphQLString,
      },
      specialization_id: {
        type: GraphQLString,
      },
      department_name: {
        type: GraphQLString,
      },
      department_id: {
        type: GraphQLString,
      },
      user_id: {
        type: GraphQLString,
      },
      user_name: {
        type: GraphQLString,
      },

      encounter_id: {
        type: new GraphQLNonNull(GraphQLString),
      },
     
       encounter_type_id: {
        type: new GraphQLNonNull(GraphQLString),
      },
};

module.exports.ArgFieldTypes = ArgFieldTypes;

module.exports.ReferralType = new GraphQLObjectType({
    name: 'Referrals',
    fields:  () =>{
        return Object.assign({}, ArgFieldTypes, {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            patient: {
                type: PatientGraphQLType,
                async resolve(parent, args){
                    // if(_.isObject(parent.patient)){
                    //     return parent.patient;
                    // }
                    return await PatientModel.findOne({emr_id: parent.emr_id}); 
                }
            },
            encounter: {
                type: EncounterGraphQLType,
                async resolve(parent, args){
                    // if(_.isObject(parent.encounter)){
                    //     return parent.encounter;
                    // }
                    return await EncounterModel.findById(parent.encounter_id); 
                }
            },
            encounter_type: {
                type: EncounterTypeGraphQLType,
                async resolve(parent, args){
                    // if(_.isObject(parent.encounter_type)){
                    //     return parent.encounter_type;
                    // }
                    return await EncounterTypeModel.findById(parent.encounter_type_id); 
                }
            },
            encounter_type_name: {
                type: GraphQLString,
            },
            legacy_emr_id: {
                type: GraphQLString,
              },
              first_name: {
                type: GraphQLString,
              },
              last_name: {
                type: GraphQLString,
              },
              other_names: {
                type: GraphQLString,
              },
              patient_name: {
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
              sex: {
                type: GraphQLString,
              },
              place_of_birth: {
                type: GraphQLString,
              },
              city: {
                type: GraphQLString,
              },
              state: {
                type: GraphQLString,
              },
              occupation: {
                type: GraphQLString,
              },
              primary_phone: {
                type: GraphQLString,
              },
              work_phone: {
                type: GraphQLString,
              },
              email: {
                type: GraphQLString,
              },
              billing_profile_id: {
                type: GraphQLString,
              },
              billing_profile_name: {
                type: GraphQLString,
              },
              insurance_scheme_id: {
                type: GraphQLString,
              },
              insurance_scheme_policy_number: {
                type: GraphQLString,
              },
              insurance_scheme_name: {
                type: GraphQLString,
              },
            created_at: {
                type: GraphQLGraphQLDate,
                resolve(parent, args){
                    if(!_.isNull(parent.created_at)){
                        return moment.tz(parent.created_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            },
            updated_at: {
                type: GraphQLGraphQLDate,
                resolve(parent, args){
                    if(!_.isNull(parent.updated_at)){
                        return moment.tz(parent.updated_at, config.timeZone).format('YYYY-MM-DD HH:mm');
                    }
                }
            }
        })
    }
});
