'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  });
  Subject.associate = function(model){
    Subject.hasMany(model.Teacher);
  }
  return Subject;
};