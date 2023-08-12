"use strict";
const {Movie} = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const users = await queryInterface.bulkInsert(
            "Users",
            [
                {
                    email: "oainger0@craigslist.org",
                    gender: "Female",
                    password: "rahasiadong1",
                    role: "Engineer",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    email: "hblything1@de.vu",
                    gender: "Male",
                    password: "rahasiadong2",
                    role: "Electrician",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    email: "sivermee2@vkontakte.ru",
                    gender: "Female",
                    password: "rahasiadong3",
                    role: "Admin",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    email: "agreenan3@barnesandnoble.com",
                    gender: "Male",
                    password: "rahasiadong4",
                    role: "User",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    email: "sthirst4@blog.com",
                    gender: "Female",
                    password: "rahasiadong5",
                    role: "Architect",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ],
            { returning: true }
        );

        const oainger = users[0];
        const hblything1 = users[1];
        const sivermee2 = users[2];
        const agreenan3 = users[3];
        const sthirst4 = users[4];

        const movies = await Movie.findAll();
        const reckless = movies[0];
        const creature = movies[1];
        const beijing = movies[2];
        const gang = movies[3];
        const party = movies[4];

        await queryInterface.bulkInsert(
            "UserMovies",
            [
                {
                    movie_id: reckless.id,
                    user_id: oainger.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    movie_id: reckless.id,
                    user_id: hblything1.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    movie_id: reckless.id,
                    user_id: sivermee2.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    movie_id: creature.id,
                    user_id: oainger.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    movie_id: creature.id,
                    user_id: sivermee2.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    movie_id: beijing.id,
                    user_id: agreenan3.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    movie_id: beijing.id,
                    user_id: sthirst4.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    movie_id: gang.id,
                    user_id: agreenan3.id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    movie_id: gang.id,
                    user_id: sthirst4.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    movie_id: party.id,
                    user_id: agreenan3.id,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    movie_id: party.id,
                    user_id: oainger.id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ],
            {}
        );
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", null, {});
        await queryInterface.bulkDelete("UserMovies", null, {});

        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
