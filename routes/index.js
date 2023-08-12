const express = require("express");
const router = express.Router();
const moviesRouter = require("./movies.js");
const usersRouter = require("./users.js");

// terima request dari postman
router.use("/movies", moviesRouter);
router.use("/users", usersRouter);

module.exports = router;
