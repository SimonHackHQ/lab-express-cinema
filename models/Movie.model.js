const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title:          String,
    director:       String,
    stars:          [String],
    image:          String,
    description:    String,
    showtimes:      [String]
});

const Movies = mongoose.model("Movies", schema);

module.exports = Movies;