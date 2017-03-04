var db = require('./models');

// Create models & seed data:
// sequelize model:create --name User --attributes 'name:string, SkillId:integer, skillValue:integer'
// sequelize model:create --name Skill --attributes 'name:string'
// sequelize seed:generate --name seed-user
// sequelize seed:generate --name seed-skill

// 1 User can have many skill (one to many)
// 1 skill, can add to many user
// user can add skillValue into their skill
// skill must have unique name


// Query to insert new skill
// Skill is uniqe
db.Skill
    .findOrCreate({
        where: {
            name: 'lord of vermillion'
        }
    })
    .spread(function (user, created) {
        console.log(user.get({
            plain: true
        }))
        console.log(created)
    })

// Query to insert new user
db.User.create({
        name: 'endy',
        SkillId: 1,
        skillValue: 2
    })
    .then(function (task) {
        console.log("Insert new user");
    })
