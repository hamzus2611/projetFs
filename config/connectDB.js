const mongoose = require('mongoose')
const config = require('config');
const db = config.get('db');
database = require('../models/index')
user = database.user;
Role = database.role;
level = database.LevelS;
Matieres = database.Matieres;
const connectDB = async () => {


    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connected to Database....');
        initial();

    } catch (error) {
        console.log(error);
    }

}
module.exports = connectDB;

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "Student"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'Student' to roles collection");
            });

            new Role({
                name: "Teacher"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'Teacher' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
    LevelS.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new LevelS({
                name: "7th_Year_of_base"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "8th_Year_of_base"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "9th_Year_of_base"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "1st_Year_Secondary"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "2nd_Year_Secondary_Eco"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "2nd_Year_Secondary_Info"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "2nd_Year_Secondary_Math"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "2nd_Year_Secondary_Sc"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "2nd_Year_Secondary_Lettre"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "3rd_Year_Secondary_Eco"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "3rd_Year_Secondary_Info"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "3rd_Year_Secondary_Math"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "3rd_Year_Secondary_Sc"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "3rd_Year_Secondary_Lettre"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "3rd_Year_Secondary_TECH"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "BAC_Eco"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "BAC_Info"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "BAC_Math"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "BAC_Sc"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "BAC_Tech"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new LevelS({
                name: "BAC_Lettre"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });

        }
    });
    Matieres.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Matieres({
                name: "Anglais"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new Matieres({
                name: "French"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new Matieres({
                name: "Mathematics"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new Matieres({
                name: "Informatics"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new Matieres({
                name: "Physical_Chemistry"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new Matieres({
                name: "Sciences"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });
            new Matieres({
                name: "technology"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

            });

        }
    });
}