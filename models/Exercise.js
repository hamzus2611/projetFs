const mongoose = require('mongoose');
const schema = mongoose.Schema;


const Exercise_Schema = new schema({
    id_prof: {
        type: mongoose.Schema.Types.ObjectId,
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
    duration: {
        type: Number
    },
    date: {
        type: Date,
    },

    timestamps: {
        type: Boolean
    }
});

module.exports = mongoose.model("Exercise", Exercise_Schema);