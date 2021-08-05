const db = require('../models/index');

Groupe = db.Groupe;
LevelS = db.LevelS;
LEVEL = db.LEVEL;
Matieres = db.Matieres;
user = db.user





exports.createGroupe = async (req, res) => {

    const { Id_prof, Name_Groupe, matieres, Level } = await req.body;
    console.log(req.body)
    try {
        let newGroupe = await new Groupe({
            Id_prof,
            Name_Groupe,
            matieres,
            Level
        })


        console.log(Level)
        console.log(matieres)
        lvl = await LevelS.findOne({ name: { $in: Level } })

        newGroupe.Level = await lvl._id

        mtr = await Matieres.findOne({ name: { $in: matieres } })
        console.log(mtr)
        newGroupe.matieres = await mtr._id


        newGroupe.save();
        res.send(newGroupe)


    }
    catch (error) {
        return res.status(500).send({ message: error });
    }
}

exports.request_add = async (req, res) => {

    const { iduser } = req.body;
    console.log({ $in: iduser })
    let Student = await user.findById({ $in: iduser })
    console.log(Student)
    try {
        let groupe = await Groupe.findById(req.params.id);
        console.log(req.params.id)
        if (groupe) {
            // const vfu = await groupe.find({
            //     student: {
            //         $in: Student._id
            //     }
            // });
            for await (let i of groupe.student) {
                if (i == Student._id) {
                    return res.status(500).json("User is already a member")
                }
            }
            groupe.student.push(Student._id);;
            console.log(groupe);
            groupe.save();
            return res.status(200).send("add user");



        }
        return res.status(500).json("erreur")

    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.get_all_groupes = async (req, res) => {
    try {
        let groupes = await Groupe.find();
        console.log(groupes)
        const GRP = [];
        for await (let i of groupes) {
            var L = {};
            await user.findById(i.Id_prof, function (err, docs) {
                if (err) {
                    console.log(err);
                    return res.status(500).json(err)
                }
                else {
                    L.Prof = (`${docs.username}  ${docs.lastname}`);


                }
            })
            L._id = i._id
            L.students_number = i.student.length
            L.Name_Groupe = i.Name_Groupe
            await Matieres.findById(i.matieres._id, function (err, docs) {
                if (err) {
                    console.log(err);
                    return res.status(500).json(error)
                }
                else {
                    L.matieres = (docs.name);

                }
            })
            await LevelS.findById(i.Level._id, function (err, docs) {
                if (err) {
                    console.log(err);
                }
                else {
                    L.Level = (docs.name.toUpperCase());
                }
            })
            GRP.push(L)
        }
        res.send(GRP)
    }
    catch (error) {
        res.status(500).json(error)
    }
}



exports.get_teacher_groupe = async (req, res) => {
    console.log(req.params.teacherid)
    try {
        let groupes = await Groupe.find({ "Id_prof": req.params.teacherid });
        console.log(groupes)
        const GRP = [];
        for await (let i of groupes) {
            var L = {};
            await user.findById(i.Id_prof, function (err, docs) {
                if (err) {
                    console.log(err);
                    return res.status(500).json(err)
                }
                else {
                    L.Prof = (`${docs.username}  ${docs.lastname}`);


                }
            })
            L._id = i._id
            L.students_number = i.student.length
            L.Name_Groupe = i.Name_Groupe
            await Matieres.findById(i.matieres._id, function (err, docs) {
                if (err) {
                    console.log(err);
                    return res.status(500).json(error)
                }
                else {
                    L.matieres = (docs.name);

                }
            })
            await LevelS.findById(i.Level._id, function (err, docs) {
                if (err) {
                    console.log(err);
                }
                else {
                    L.Level = (docs.name.toUpperCase());
                }
            })
            GRP.push(L)
        }
        res.send(GRP)
    }
    catch (error) {
        res.status(500).json(error)
    }
}





exports.get_Student_groupe = async (req, res) => {
    try {
        let groupes = await Groupe.find();
        
        const GRP = [];
        for await (let i of groupes) {
            var L = {};
            for await (let j of i.student) {
                console.log(j)
                console.log(req.params.studentid)
                if (j == req.params.studentid) {
                    var L = {};
                    await user.findById(i.Id_prof, function (err, docs) {
                        if (err) {
                            console.log(err);
                            return res.status(500).json(err)
                        }
                        else {
                            L.Prof = (`${docs.username}  ${docs.lastname}`);


                        }
                    })
                    L._id = i._id
                    L.students_number = i.student.length
                    L.Name_Groupe = i.Name_Groupe
                    await Matieres.findById(i.matieres._id, function (err, docs) {
                        if (err) {
                            console.log(err);
                            return res.status(500).json(error)
                        }
                        else {
                            L.matieres = (docs.name);

                        }
                    })
                    await LevelS.findById(i.Level._id, function (err, docs) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            L.Level = (docs.name.toUpperCase());
                        }
                    })
                    GRP.push(L)
                }
            }
        }
        res.send(GRP)



    }
    catch (error) {
        res.status(500).json(error)
    }
}