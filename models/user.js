const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
        type: String,
        required: [true, "please provide your firstname"],
    },
    lastname: {
        type: String,
        required: [true, "please provide your lastname"],
    },
    email: {
        type: String,
        required: [true, "please provide your email"],
    },
    password: {
        type: String,
        required: [true, "please provide a password"],
        minlength: 8,
    },
    phone: {
        type: String,
        required: [true, "please provide your phone"],
    },
    date_birth: {
        type: Date,
    },
    photo: {
        type: String,
    },
    countery: {
        type: String,
    },
    level: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LevelS"
        }
    ],
    Specialite: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Matieres"
        },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ]



});
module.exports = mongoose.model("user", UserSchema);