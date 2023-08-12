"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // One To Many
            Movie.hasMany(models.UserMovie, { foreignKey: "movie_id" });
            // Setting Agar Movie bisa akses ke user
            // Many To Many
            Movie.belongsToMany(models.User, {
                foreignKey: "movie_id",
                through: models.UserMovie,
            });
        }
    }
    Movie.init(
        {
            title: DataTypes.STRING,
            genres: DataTypes.STRING,
            year: DataTypes.INTEGER,
            photo: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Movie",
        }
    );
    return Movie;
};
