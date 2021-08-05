const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupeSchema = new Schema({
    Id_prof: {
        type: String,
        required: true
    },
    Name_Groupe: {
        type: String,
        required: true
    },
    student: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
    , matieres: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Matieres"
    },
    Level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Level"
    }



})
module.exports = mongoose.model("Groupe", GroupeSchema);