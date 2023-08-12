"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.UserMovie, { foreignKey: "user_id" });
            // Setting Agar User bisa akses ke Movie
            User.belongsToMany(models.Movie, {
                foreignKey: "user_id",
                through: models.UserMovie,
            });
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            gender: DataTypes.STRING,
            password: DataTypes.STRING,
            role: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
