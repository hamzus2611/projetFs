//const user = require("../models/user");
const bc = require('bcrypt');
const nodemailer = require('nodemailer');
const db = require('../models/index');
user = db.user
Role = db.role
roles = db.ROLES,
  matieres = db.Matieres
MATIERES = db.MATIERES
//------------nodemailer Configuration--------//
transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "E-learning-tn@outlook.fr",
    pass: "hamza123456"
  }
})


// register USER

exports.register = async (req, res) => {

  const { username, lastname, email, password, phone, date_birth, countery } = req.body;
  let roles = await "Student"
  try {
    let User = await user.findOne({ email });
    if (User) return res.status(400).json('user already exists');
    let newuser = await new user({
      username,
      lastname,
      email,
      password,
      phone,
      date_birth,
      countery,
      

    });
    var slat = await bc.genSalt(10);
    var hash = await bc.hash(password, slat);
    newuser.password = hash;
    const options = {
      from: "E-learning-tn@outlook.fr",
      to: email,
      subject: "Email de bienvenue",
      text: `Hi ${username},
      
      Thanks for joining  E-Etude.
      
      We built service to To help her study and excel in class.
                
      Your feedback will really help us improve our products, as we always aim to deliver exactly what our customers want. 
      
      Share your thoughts by replying to this email.
      
      Over the next few weeks, you can expect a few more emails from us. All these messages will help you get the most out of service. 
      
        We’ll also share our tips and tricks on how we use service.
        
        Thanks!
        
        E-Etude`
    };
    let LEVEL = await req.body.level
    //await newuser.save();
    console.log(LEVEL)

    await Role.findOne({ name: { $in: roles } }, (err, role) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      newuser.roles = role._id
    }
    );
    console.log(newuser.roles)
    await LevelS.findOne({name: {$in :LEVEL}  }, (err, lvl) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      console.log(lvl)
      newuser.level = lvl._id
    }
    );
    console.log(newuser)
    await newuser.save();
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err)
      }
      //console.log(info.response);
    })
    req.session.isAuth = true;
    const usersend = ({
      _id: newuser._id,
      username: newuser.username,
      lastname: newuser.lastname,
      email: newuser.email,
      phone: newuser.phone,
      date_birth: newuser.date_birth,
      countery: newuser.countery,
      level: newuser.level,
      roles: roles
    });
    console.log(res.session)
    req.session.user = usersend;
    return res.send(req.session.user);
    //res.redirect('/user/singin')
  } catch (error) {
    res.status(400).json({ msg: "password or mail invalide" });
  }

}






// -------------- register Teacher -------------//

exports.register_teacher = async (req, res) => {

  const { username, lastname, email, phone, specialite, date_birth, countery } = req.body;
  let roles = await "Teacher";
  const password = await strRandom({
    includeUpperCase: true,
    includeNumbers: true,
    length: 10
  });
  const passwordM = password;
  console.log(passwordM)
  try {
    let User = await user.findOne({ email });
    if (User) return res.status(400).json('user already exists');
    let newteacher = await new user({
      username,
      lastname,
      email,
      password,
      phone,
      date_birth,
      countery,
      roles

    });
    var slat = await bc.genSalt(10);
    var hash = await bc.hash(password, slat);
    newteacher.password = hash;
    //await newuser.save();
    const options = await {
      from: "E-learning-tn@outlook.fr",
      to: email,
      subject: "Email de bienvenue",
      text: `Dear ${username},
      
      Teacher Subscription
      
      Congratulations! You have subscribed to Teacher-community of platform
      
      - Email:  ${email}
      - Password:  ${passwordM}
      
      Thanks!
      
      E-Etude`
    };
    //let Matiere = await req.body.level
    //console.log(passwordM)
    //console.log(specialite)


    await Role.findOne({ name: { $in: roles } }, (err, roles) => {
      if (err) { return res.status(500).send({ message: err }); }
      newteacher.roles = roles._id;
    });
    await matieres.findOne({ name: { $in: specialite } }, (err, Mtr) => {
      if (err) { return res.status(500).send({ message: err }); }
      newteacher.Specialite = Mtr._id
      console.log(Mtr._id)
    });

    console.log(newteacher);
    await newteacher.save();



    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err)
      }
      console.log(info.response);
    })
    const usersend = ({
      _id: newteacher._id,
      username: newteacher.username,
      lastname: newteacher.lastname,
      email: newteacher.email,
      phone: newteacher.phone,
      date_birth: newteacher.date_birth,
      countery: newteacher.countery,
      SPECIALITE: newteacher.Specialite,
      roles: roles
    });
    req.session.user = usersend;
    return res.send(req.session);
    //res.redirect('/user/singin')
  } catch (error) {
    res.status(400).json({ msg: "password or mail invalide" });
  }

}




///--------------------------------register admin -------/////

exports.register_admin = async (req, res) => {

  const { username, lastname, email, phone, date_birth, countery } = req.body;
  const roles = await "admin";
  const password = await strRandom({
    includeUpperCase: true,
    includeNumbers: true,
    length: 10
  });
  const passwordM = password;
  console.log(passwordM)
  try {
    let User = await user.findOne({ email });
    if (User) return res.status(400).json('user already exists');
    let newuser = await new user({
      username,
      lastname,
      email,
      password,
      phone,
      date_birth,
      countery,

    });
    console.log(newuser);
    var slat = await bc.genSalt(10);
    var hash = await bc.hash(password, slat);
    newuser.password = hash;
    //await newuser.save();
    const options = await {
      from: "E-learning-tn@outlook.fr",
      to: email,
      subject: "Email de bienvenue",
      text: `Dear ${username},

      Teacher Subscription
      
      Congratulations! You have subscribed to Admin-community of platform

                - Email:  ${email}
                - Password:  ${passwordM}
      
      Thanks!
      
      E-Etude`
    };
    await newuser.save((err, newuser) => {
      if (err) {
        return res.status(500).json({ message: err });
      }

      if (roles) {
        Role.find(
          {
            name: { $in: roles }
          },
          (err, roles) => {
            if (err) {
              return res.status(500).send({ message: err });
            }

            newuser.roles = roles.map(role => role);
            newuser.save(err => {
              if (err) {
                return res.status(500).send({ message: err });
              }

              // res.send({ message: "User was registered successfully!" });
            });
          }
        );
      }
    });
    transporter.sendMail(options, function (err, info) {
      if (err) {
        console.log(err)
      }
      console.log(info.response);
    })
    req.session.isAuth = true;
    const usersend = ({
      _id: newuser._id,
      username: newuser.username,
      lastname: newuser.lastname,
      email: newuser.email,
      phone: newuser.phone,
      date_birth: newuser.date_birth,
      countery: newuser.countery,
      roles: roles
    });
    req.session.user = usersend;
    return res.send(req.session);
    //res.redirect('/user/singin')
  } catch (error) {
    res.status(400).json({ msg: "password or mail invalide" });
  }

}










// LOGIN USER

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const User = await user.findOne({ email });
  if (User) {
    const validpassword = await bc.compare(password, User.password)
    if (!validpassword) {
      console.log(User)
      req.session.error = "mail ou password incorrect";
      return res.status(400).send({ error: req.session.error });
    }
    var authorities = [];

    for await (let i of User.roles) {
      await Role.findById(i, function (err, docs) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(docs.name)
          authorities.push("ROLE_" + docs.name.toUpperCase());
          console.log(authorities)
        }
      })

    }
    req.session.isAuth = true;
    const usersend = ({
      _id: User._id,
      username: User.username,
      lastname: User.lastname,
      email: User.email,
      phone: User.phone,
      date_birth: User.date_birth,
      countery: User.countery,
      level: User.level,
      roles: authorities
    });
    console.log(authorities);
    req.session.user = usersend;
    return res.send({
      user: usersend,
      isAuth: req.session.isAuth,
      id: req.sessionID
    })
    //res.redirect("/")

  }
  //req.session.error = "Invalid Credentials";
  return res.status(400).send({ error: 'mail ou password incorrect' })
}


//---------EDIT USER ---------//
exports.Edit_user = async (req, res) => {
  const { username, lastname, email, phone } = await req.body;
  const USER = {
    username,
    lastname,
    email,
    phone
  }
  try {
    User = await user.findById(req.params.id)
    console.log(USER)
    User_modifier = await user.findByIdAndUpdate(req.params.id, { username: USER.username, lastname: USER.lastname, email: USER.email, phone: USER.phone },
      function (err, docs) {
        if (err) {
          console.log(err)
        }
        else {
          console.log("Updated User : ", docs);
          return res.send(docs)
        }
      }
    )
  } catch (error) {
    return res.status(500).send({ error })
  }
}







// get User role = Students

exports.get_all_students = async (req, res) => {
  try {
    const roleid = await Role.findOne({ "name": "Student" })

    const Student = await user.find({ "roles": roleid._id })
    //console.log(Student)
    const Students = []
    for await (let i of Student) {
      const Stud = {
        _id: i._id,
        name: i.username,
        lastname: i.lastname,
        email: i.email,
        phone: i.phone,
        date_birth: i.date_birth,
        countery: i.countery,
        level: i.level

      }
      Students.push(Stud)
    }
    return res.send(Students)

  } catch (error) {
    console.log(error)
    return res.status(400).send({ error });


  }

}



// get all Teacher:
exports.get_all_teacher = async (req, res) => {
  try {
    const roleid = await Role.findOne({ "name": "Teacher" })

    const Teacher = await user.find({ "roles": roleid._id })
    //console.log(Student)
    const Teachers = []
    for await (let i of Teacher) {
      const teach = {
        _id: i._id,
        name: i.username,
        lastname: i.lastname,
        email: i.email,
        phone: i.phone,
        date_birth: i.date_birth,
        countery: i.countery,


      }
      Teachers.push(teach)
    }
    return res.send(Teachers)

  } catch (error) {
    return res.status(400).send({ error });

  }

}



// modifie passowrd User
exports.modif_passwort = async (req, res) => {
  const { password, newPassword } = req.body;
  console.log(password)
  console.log(newPassword)
  let User = await user.findById(req.params.id);
  console.log(User)
  const validpassword = await bc.compare(password, User.password)
  console.log(validpassword);
  try {

    if (validpassword) {
      var slat = await bc.genSalt(10);
      var hash = await bc.hash(newPassword, slat);
      await user.findByIdAndUpdate(User._id, { password: hash }, function (err, docs) {
        if (err) {
          console.log(err)
        }
        else {
          console.log("Updated User : ", docs);
          return res.send(User)
        }
      }
      )
    }
    else {
      res.status(400).json({ error: 'Password incorrect' });


    }


  } catch (error) {
    res.status(400).json(error)

  }


}






function strRandom(o) {
  var a = 10,
    b = 'abcdefghijklmnopqrstuvwxyz',
    c = '',
    d = 0,
    e = '' + b;
  if (o) {

    if (o.length) {
      a = o.length;
    }
    if (o.includeUpperCase) {
      e += b.toUpperCase();
    }
    if (o.includeNumbers) {
      e += '1234567890';
    }
  }
  for (; d < a; d++) {
    c += e[Math.floor(Math.random() * e.length)];
  }
  return c;
}