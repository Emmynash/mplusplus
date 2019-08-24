'use strict';
module.exports = (sequelize, DataTypes) => {
  const EncounterType = sequelize.define('EncounterType', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
    },
    created_at: { type: DataTypes.DATE, default: new Date() },
    updated_at: { type: DataTypes.DATE, default: new Date() },
  }, {
    underscored: true,
  });
  EncounterType.associate = function(models) {
    // associations can be defined here
    EncounterType.hasMany(models.Encounter, {
      // onDelete: "CASCADE",
      as: 'encounters',
    });
  };
  return EncounterType;
};