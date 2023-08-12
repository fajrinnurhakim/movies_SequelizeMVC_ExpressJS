const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/moviesController");
const upload = require("../middlewares/multer.js");

router.get("/", MoviesController.findAll);
router.get("/:id", MoviesController.findOne);
router.post("/", upload.single("photo"), MoviesController.create);
router.put("/:id", upload.single("photo"), MoviesController.update);
router.delete("/:id", MoviesController.destroy);

module.exports = router;
