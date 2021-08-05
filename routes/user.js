const express = require("express");
const { register, login, get_user, modif_passwort, get_all_students, get_all_teacher, register_teacher, Edit_user, getLogin, register_admin } = require("../controllers/user.controllers");
const isAuth = require("../middleware/is.Auth");
const {  validator, registerRules } = require("../middleware/validator");
const router = express.Router();

router.post('/register', register);
router.post('/registerTeacher', register_teacher);
router.post('/registerAdmin', register_admin);
router.post('/login',login);
// router.get('/login',getLogin)
router.put('/parameter/compte/:id',Edit_user)
router.put('/parameter/password/:id',modif_passwort);
router.get('/students',get_all_students);
router.get('/teachers',get_all_teacher);
module.exports = router;