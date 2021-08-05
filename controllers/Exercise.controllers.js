const Exercise = require("../models/Exercise");
const db = require('../models/index');
user = db.user;



exports.register_exercise = async (req, res) => {

    const { id_prof, IDGroupe, description, duration, date } = await req.body;
    console.log(id_prof)
    const USER = await user.findById(id_prof)
    durationn = Number(duration);
    console.log(USER)
    datee = Date.parse(date);
    try {
        const newExercise = new Exercise({
            id_prof,
            IDGroupe,
            matieres: USER.Specialite,
            description,
            durationn,
            datee
        })
        newExercise.save();
        //res.json("Exercise added!")
        res.send(newExercise)
    } catch (error) {
        res.status(400).json(error);
    }

}
exports.get_exercise = async (req, res) => {

    try {
        await Exercise.find();
        res.json(exercices)
    } catch (error) {
        res.status(400).json(error)
    }

}

exports.fet_one_exercise = async (req, res) => {

    try {
        const ex = await Exercise.findById(req.params.id)
        res.send(ex);
    } catch (error) {
        res.status(400).json(error)
    }

}

exports.delete_exercise = async (req, res) => {

    try {
        await Exercise.findByIdAndDelete(req.params.id)
        res.json("Exercise deleted.");
    } catch (error) {
        res.status(400).json(error);
    }

}

exports.update_exercise = async (req, res) => {
    try {
        const ex_update = await Exercise.findById(req.parms.id,
            { ...req.body },
            { new: true });
        res.send(ex_update);
    } catch (error) {
        res.send(error)
    }
}

exports.get_Teacher_exercise = async (req, res) => {
    console.log(req.params.teacherid)
    try {
        exercise = await Exercise.find({ "id_prof": req.params.teacherid });

        const GRP = [];
        for await (let i of exercise) {
            var L = {};
            const docs = await user.findById(i.id_prof, function (err, docs) {
                if (err) {
                    return res.status(500).json(err)
                }
                else {
                    console.log(docs);
                    L.Prof = (`${docs.username}  ${docs.lastname}`);


                }
            })
            L.description = i.description
            L._id = i._id
            L.Name_Groupe = i.Name_Groupe
            console.log(i.matieres);
            await Matieres.findById(i.matieres, function (err, docs) {
                if (err) {
                    console.log(err);
                    return res.status(500).json(error)
                }
                else {
                    L.matieres = (docs.name);

                }
            })

            GRP.push(L)
        }
        res.send(GRP)

    } catch (error) {
        res.status(400).json(error)
    }

}