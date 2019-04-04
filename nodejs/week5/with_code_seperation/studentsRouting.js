
const express = require("express");

const students_Book = require("./studentBook");
let hyf_students = new students_Book.studentsbook();


const router = express.Router();

router.route("/students/:studentName")
  .get((req, res) => {
      console.log(req.params);
      const student = hyf_students.getStudentDetailByName(req.params.studentName);
      console.log(student);

      if (student.length > 0) {
        res.status(201);
        res.send(JSON.stringify(student));
      } else {
        res.status(404);
        res.send("student Not found ");
      }
    })
      

router.route("/students")
  .get((req, res) => {
    if (req.query.name) {
      console.log(req.query.name);
      const student = hyf_students.getStudentDetailByName(req.query.name);
      console.log(student);

      if (student.length > 0) {
        res.status(201);
        res.send(JSON.stringify(student));
      } else {
        res.status(404);
        res.send("Not found ");
      }
    } else if (req.query.classId) {
      const classList = hyf_students.getListByClass(req.query.classId);
      if (classList.length > 0) {
        res.status(201);
        res.send(JSON.stringify(classList));
      } else {
        res.status(404);
        res.send("No list found for the class ");
      }
    } else {
      res.status(202);
      res.send(JSON.stringify(hyf_students.getList()));
    };
  })

  .post((req, res) => {
    const newStudent = hyf_students.addNewStudent(req.body);
    if (!newStudent) {
      res.status(201);
      res.send("Details added " + JSON.stringify(req.body));
    } else {
      res.status(401);
      res.send("Student already exist ");
    }
  })

  .put((req, res) => {
    const newStudent = hyf_students.editStudentInfo(req.body);
    if (newStudent) {
      res.status(201);
      res.send("Student details edited succusfully");
    } else {
      res.status(401);
      res.send("Student does not exist ")
    }
  })

  .delete((req, res) => {
    const newStudent = hyf_students.deleteStudent(req.body);
    if (newStudent) {
      res.status(201);
      res.send("student details succesfully deleted  " + JSON.stringify(req.body));
    } else {
      res.status(404);
      res.send("Student does not exist ");
    }
  });

  module.exports = router;