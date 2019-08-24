var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;

var PatientQuery = require('./Patient/PatientQuery');
var PatientMutations = require('./Patient/PatientMutations');

// var PatientLabQuery = require('./PatientLab/PatientLabQuery');
// var PatientLabMutations = require('./PatientLab/PatientLabMutations');

var AllergyQuery = require('./Allergy/AllergyQuery');
var AllergyMutations = require('./Allergy/AllergyMutations');

var EncounterQuery = require('./Encounter/EncounterQuery');
var EncounterMutations = require('./Encounter/EncounterMutations');

var EncounterTypeQuery = require('./EncounterType/EncounterTypeQuery');
var EncounterTypeMutations = require('./EncounterType/EncounterTypeMutations');

var ReferralQuery = require('./Referral/ReferralQuery');
var ReferralMutations = require('./Referral/ReferralMutations');

var VitalSignTypeQuery = require('./VitalSignType/VitalSignTypeQuery');
var VitalSignTypeMutations = require('./VitalSignType/VitalSignTypeMutations');

var VitalSignQuery = require('./VitalSign/VitalSignQuery');
var VitalSignMutations = require('./VitalSign/VitalSignMutations');

var PatientDiagnosisQuery = require('./PatientDiagnosis/PatientDiagnosisQuery');
var PatientDiagnosisMutations = require('./PatientDiagnosis/PatientDiagnosisMutations');

var PatientVisitNoteQuery = require('./PatientVisitNotes/PatientVisitNoteQuery');
var PatientVisitNoteMutations = require('./PatientVisitNotes/PatientVisitNoteMutations');
// var LabQuery = require('./Lab/LabQuery');
// var LabMutations = require('./Lab/LabMutations');


module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => {
            return Object.assign({},
                PatientQuery,
                AllergyQuery,
                EncounterQuery,
                EncounterTypeQuery,
                ReferralQuery,
                VitalSignTypeQuery,
                VitalSignQuery,
                PatientDiagnosisQuery,
                PatientVisitNoteQuery
            );
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: Object.assign({},
            PatientMutations,
            AllergyMutations,
            EncounterMutations,
            EncounterTypeMutations,
            ReferralMutations,
            VitalSignTypeMutations,
            VitalSignMutations,
            PatientDiagnosisMutations,
            PatientVisitNoteMutations)
    })
});