const express = require("express");
const { register_cours, get_cours, get_one_cours, delete_cours, update_cours, get_teacher_cours } = require("../controllers/Cours.controllers");
const router = express.Router();

router.post("/add",register_cours);
router.get("/",get_cours);
router.get("/Mycours",get_teacher_cours);
router.get("/:id",get_one_cours);
router.delete("/delete/:id",delete_cours);
router.put("/update/:id",update_cours);

module.exports = router;