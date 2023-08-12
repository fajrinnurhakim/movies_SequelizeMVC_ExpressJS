// manggil repositories
const MovieRepository = require("../repositories/movieRepository");
// menjalankan business logic
class MovieService {
    static findAll = async (params) => {
        try {
            // panggil movies Repository
            const movies = await MovieRepository.findAll(params);
            return movies;
        } catch (err) {
            console.log(err, "<<<<<");
        }
    };
    static findOne = async (params) => {
        try {
            const { id } = params;

            const movie = await MovieRepository.findOne(id);

            return movie;
        } catch (err) {
            console.log(err, "<<<<<");
        }
    };
    static create = async (fileImage, params) => {
        try {
            const { title, genres, year } = params;
            let payload = {
                title,
                genres,
                year,
            };
            if (fileImage) {
                let linkImage = `http://localhost:3000/${fileImage.filename}`;
                payload.photo = linkImage;
            }
            const movie = await MovieRepository.create(payload);
            return movie;
        } catch (err) {
            console.log(err, "<<<<<");
        }
    };
    static update = async (pathParams, fileImage, params) => {
        try {
            const { id } = pathParams;

            const { title, genres, year } = params;
            let payload = {
                title,
                genres,
                year,
            };
            console.log(fileImage, "<<<<<<<<<<<<<");
            if (fileImage) {
                let linkImage = `http://localhost:3000/${fileImage.filename}`;
                payload.photo = linkImage;
            }

            const movie = await MovieRepository.update(id, payload);

            return movie;
        } catch (err) {
            console.log(err);
        }
    };
    static destroy = async (params) => {
        try {
            const { id } = params;

            const movie = await MovieRepository.destroy(id);

            return movie;
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = MovieService;
