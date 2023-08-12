const movie = require("../models/movie.js");
const MovieService = require("../services/movieServices.js");

class MoviesController {
    // read all
    static findAll = async (req, res, next) => {
        try {
            // panggil movieservices
            const movies = await MovieService.findAll(req.query);
            res.status(200).json(movies);
        } catch (err) {
            next(err);
        }
    };
    // read by id
    static findOne = async (req, res, next) => {
        try {
            const movie = await MovieService.findOne(req.params);

            if (!movie) {
                throw { name: "ErrorNotFound" };
            }
            return res.status(200).json(movie);
        } catch (err) {
            next(err);
        }
    };
    // create or post
    static create = async (req, res, next) => {
        try {
            // req.file => file images
            // req.body => data movies
            console.log(req.file, req.body);

            const movie = await MovieService.create(req.file, req.body);
            res.status(201).json({ message: "Movie created successfully" });
        } catch (err) {
            next(err);
        }
    };
    // Update Movie
    static update = async (req, res, next) => {
        try {
            const movie = await MovieService.update(
                req.params,
                req.file,
                req.body
            );
            res.status(200).json({ message: "Movie updated successfully" });
        } catch (err) {
            next(err);
        }
    };
    //  Delete Movie
    static destroy = async (req, res, next) => {
        try {
            const movie = await MovieService.destroy(req.params);

            if (!movie) {
                throw { name: "ErrorNotFound" };
            }

            res.status(200).json({ message: "Movie deleted successfully" });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = MoviesController;
