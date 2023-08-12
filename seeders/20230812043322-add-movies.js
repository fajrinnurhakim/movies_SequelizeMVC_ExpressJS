"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Movies",
            [
                {
                    title: "Reckless",
                    genres: "Comedy",
                    year: 2001,
                    photo: "",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "Creature",
                    genres: "Documentary",
                    year: 1997,
                    photo: "",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "Beijing Taxi",
                    genres: "Documentary",
                    year: 1993,
                    photo: "",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "Gang Related",
                    genres: "Crime",
                    year: 1993,
                    photo: "",
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    title: "Party Monster",
                    genres: "Documentary",
                    year: 2009,
                    photo: "",
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
        await queryInterface.bulkDelete("Movies", null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
