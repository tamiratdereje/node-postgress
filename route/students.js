const express = require("express");

//Router
const router = express.Router();

const {getAllStudents, getStudents, updateStudents, createStudents, deleteStudents} = require('../controller/students')


router.route("/")
.get(getAllStudents)
.post(createStudents)

router.route("/:id")
.get(getStudents)
.put(updateStudents)
.delete(deleteStudents)

module.exports = router;