const express=require('express');
const { createGroupe, request_add, get_all_groupes, get_teacher_groupe, get_Student_groupe } = require('../controllers/Groupes.controllers');
const router = express.Router();

router.post('/add',createGroupe)
router.put('/requestadd/:id',request_add)
router.get('/',get_all_groupes)
router.get('/mygroupe/:teacherid',get_teacher_groupe)
router.get('/insgroupe/:studentid',get_Student_groupe)
module.exports = router;