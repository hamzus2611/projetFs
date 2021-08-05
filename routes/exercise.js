const express = require("express");
const {register_exercise, get_exercise, fet_one_exercise, delete_exercise, update_exercise, get_Teacher_exercise} = require('../controllers/Exercise.controllers')
const router = express.Router();

router.post("/add",register_exercise);
router.get("/",get_exercise);
router.get("/Myexercise/:teacherid",get_Teacher_exercise);
router.get("/:id",fet_one_exercise);
router.delete("/delete/:id",delete_exercise);
router.put("/update/:id",update_exercise);

module.exports = router;