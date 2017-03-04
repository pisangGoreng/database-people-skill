'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        // return queryInterface.bulkInsert('Users', [{
        //         name: 'erin',
        //         skillValue: 1,
        //         SkillId: 1,
        //         createdAt: new Date(),
        //         updatedAt: new Date()
        //     },
        //     {
        //         name: 'erin',
        //         skillValue: 2,
        //         SkillId: 1,
        //         createdAt: new Date(),
        //         updatedAt: new Date()
        //     },
        //     {
        //         name: 'ruth',
        //         skillValue: 1,
        //         SkillId: 1,
        //         createdAt: new Date(),
        //         updatedAt: new Date()
        //     },
        //     {
        //         name: 'ruth',
        //         skillValue: 3,
        //         SkillId: 1,
        //         createdAt: new Date(),
        //         updatedAt: new Date()
        //     }
        // ], {});
    },

    down: function (queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
