const mongoose = require("mongoose");

const Matieres = mongoose.model(
  "Matieres",
  new mongoose.Schema({
    name: String
  })
);

module.exports = Matieres;
