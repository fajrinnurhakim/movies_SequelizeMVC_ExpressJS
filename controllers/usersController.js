const UserService = require("../services/userServices.js");

class UserController {
    static findAll = async (req, res, next) => {
        try {
            // panggil userservices
            const users = await UserService.findAll(req.query);
            res.status(200).json(users);
        } catch (err) {
            next(err);
        }
    };
    // read by id
    static findOne = async (req, res, next) => {
        try {
            const user = await UserService.findOne(req.params);

            if (!user) {
                throw { name: "ErrorNotFound" };
            }
            return res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    };
    // Create User
    static create = async (req, res, next) => {
        try {
            const user = await UserService.create(req.body);

            res.status(201).json({ message: "User created successfully" });
        } catch (err) {
            next(err);
        }
    };
    // Update User
    static update = async (req, res, next) => {
        try {
            const user = await UserService.update(req.params, req.body);
            res.status(200).json({ message: "User updated successfully" });
        } catch (err) {
            next(err);
        }
    };
    //  Delete User
    static destroy = async (req, res, next) => {
        try {
            const user = await UserService.destroy(req.params);

            if (!user) {
                throw { name: "ErrorNotFound" };
            }

            res.status(200).json({ message: "User deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = UserController;
