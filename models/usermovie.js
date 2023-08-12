"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserMovie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Many to One
            UserMovie.belongsTo(models.User, { foreignKey: "user_id" });
            UserMovie.belongsTo(models.Movie, { foreignKey: "movie_id" });
        }
    }
    UserMovie.init(
        {
            user_id: DataTypes.INTEGER,
            movie_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "UserMovie",
        }
    );
    return UserMovie;
};
