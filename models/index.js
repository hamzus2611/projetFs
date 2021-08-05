const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role.model");
db.Groupe = require('./Groupe');
db.LevelS = require('./StudyLevel');
db.Matieres = require('./Matieres');
db.Cours=require('./Cours')
db.LEVEL = ["7th_Year_of_base", "8th_Year_of_base", "9th_Year_of_base", "1st_Year_Secondary", "2nd_Year_Secondary_Eco", "2nd_Year_Secondary_Info", "2nd_Year_Secondary_Math", "2nd_Year_Secondary_Sc", "2nd_Year_Secondary_Lettre", "3rd_Year_Secondary_Eco", "3rd_Year_Secondary_Info", "3rd_Year_Secondary_Math", "3rd_Year_Secondary_Sc", "3rd_Year_Secondary_Lettre", "3rd_Year_Secondary_TECH", "BAC_Eco", "BAC_Info", "BAC_Math", "BAC_Sc", "BAC_Tech", "BAC_Lettre"]
db.MATIERS = ["Anglais", "French", "Mathematics", "Informatics", "Physical_Chemistry", "Sciences", "technology "]
db.ROLES = ["Student", "admin", "Teacher"];

module.exports = db;
