'use strict';
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        name: DataTypes.STRING,
        SkillId: DataTypes.INTEGER,
        skillValue: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                User.belongsTo(models.Skill);
            }
        }
    });
    return User;
};
