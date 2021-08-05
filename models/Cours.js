const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Cours_Schema = new schema({
    id_prof: {
        type: String,
    },
    matieres: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Matieres"
    },
    IDGroupe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Groupe"
    },

    description: {
        type: String,
        required: true
    },
    lienYTB: {
        type: String
    },
    date: {
        type: Date,
    },

});

module.exports = mongoose.model("Cours", Cours_Schema);