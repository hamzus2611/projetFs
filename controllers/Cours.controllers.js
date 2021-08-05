const db = require('../models/index');
user = db.user;
Cours = db.Cours


exports.register_cours = async (req, res) => {

    const { id_prof, IDGroupe, description, lienYTB, date } = await req.body;
    User = user.findById(id_prof)
    datee = Date.parse(date);
    try {
        const newCours = new Cours({
            id_prof,
            IDGroupe,
            matieres: User.Specialite,
            description,
            lienYTB,
            datee
        })
        newCours.save();
        //res.json("Exercise added!")
        res.send(newCours)
    } catch (error) {
        res.status(400).json(error);
    }

}
exports.get_cours = async (req, res) => {

    try {
        await Cours.find();
        res.json(cours)
    } catch (error) {
        res.status(400).json(error)
    }

}

exports.get_one_cours = async (req, res) => {

    try {
        const ex = await Cours.findById(req.params.id)
        res.send(ex);
    } catch (error) {
        res.status(400).json(error)
    }

}

exports.delete_cours = async (req, res) => {

    try {
        await Cours.findByIdAndDelete(req.params.id)
        res.json("Cours deleted.");
    } catch (error) {
        res.status(400).json(error);
    }

}

exports.update_cours = async (req, res) => {
    try {
        const ex_update = await Cours.findById(req.parms.id,
            { ...req.body },
            { new: true });
        res.send(ex_update);
    } catch (error) {
        res.send(error)
    }
}



exports.get_teacher_cours = async (req, res) => {
    const { teacherid } = req.body;
    try {
        await Cours.find({ id_prof: { $in: (teacherid) } });
        res.json(cours)
    } catch (error) {
        res.status(400).json(error)
    }

}