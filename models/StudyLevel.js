const mongoose = require("mongoose");

const StudyLevel = mongoose.model(
  "LevelS",
  new mongoose.Schema({
    name: String
  })
);

module.exports = StudyLevel;