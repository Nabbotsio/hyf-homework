//const http = require("http");
const express = require("express");
const app = express();

const studentsBook = require("./studentBook");
const hyf_students = studentsBook.hyfStudents;

const port = 8080;

//const bodyParser = require("body-parser");
//app.use(bodyParser.json());

app.use(express.json());

//const server = http.createServer(function (req, res) {
//console.dir(req, {depth:0})
//const url = req.url;


app.get("/", (req, res) => res.send("Marcel HYF APP"));
app.get("/getList", (req, res) => {
  const list = hyf_students.getList();
  if (list) {
    res.status(202);
    res.send(JSON.stringify(list));
  }
  else {
    res.status(404);
    res.send("Error. No list found ");
  }
});

app.get("/getListByClass", (req, res) => {
  const classList = hyf_students.getListByClass(req.query.classId);
  if (classList.length > 0) {
    res.status(201);
    res.send(JSON.stringify(classList));
  }
  else {
    res.status(404);
    res.send("No list found for the class ");
  }
});

app.get("/getListByClass", (req, res) => {
  const classList = hyf_students.getListByClass(req.query.classId);
  if (classList.length > 0) {
    res.status(201);
    res.send(JSON.stringify(classList));
  }
  else {
    res.status(404);
    res.send("No list found for the class ");
  }
});

app.get("/getStudentDetailByName", (req, res) => {
  const student = hyf_students.getStudentDetailByName(req.query.name);
  if (student.length > 0) {
    res.status(201);
    res.send(JSON.stringify(student));
  }
  else {
    res.status(404);
    res.send("No found ");
  }
});


app.post("/addNewStudent", (req, res) => {
  const newStudent = hyf_students.addNewStudent(req.body);
  if (!newStudent) {
    res.status(201);
    res.send("Details added " + JSON.stringify(req.body));
  }
  else {
    res.status(401);
    res.send("Student already exist ");
  }
});

app.put("/editStudentInfo", (req, res) => {
  const newStudent = hyf_students.editStudentInfo(req.body);
  //if (newStudent) {
    res.status(201);
    res.send("Student details edited succusfully");
  //}
  //else {
   // res.status(401);
    //res.send("Students already exist ");
  //}
});

app.delete("/deleteStudent", (req, res) => {
  const newStudent = hyf_students.deleteStudent(req.body);
  //if (!newStudent) {
    res.status(201);
    res.send("student details deleted  " + JSON.stringify(req.body));
  //}
 // else {
   // res.status(401);
    //res.send("Student already exist ");
  //}
})



app.listen(port, () => console.log(`Marcel HYF app is listening on port ${port}!`))

/*
  if (url === "/getList" && req.method === "GET") {
    res.end(JSON.stringify(hyf_students.getList()));
  }

  else if (url === "/getListByClass" && req.method === "GET") {
    res.end(JSON.stringify(hyf_students.getListByClass("08")));
  }

  else if (url === "/getStudentDetailByName" && req.method === "GET") {
    res.end(JSON.stringify(hyf_students.getStudentDetailByName("shEilA")));
  }

  else if (url === "/addNewStudent" && req.method === "POST") {

    const newStudent1 = {
      'name': 'Afshin Heidari',
      'class': '08',
      'email': 'afshin@mail.com',
      'telephone': '11110000'
    };

    hyf_students.addNewStudent(newStudent1);
    res.end(JSON.stringify("details added"));
  }

  else if (url === "/editStudentInfo" && req.method === "PUT") {

    const studentInfo =  {
      'name': 'Sheila',
      'classId': '07',
      'email': 'sheila@mail.com',
      'telephone': '11110000'
      };
      hyf_students.editStudentInfo(studentInfo);
    res.end(JSON.stringify(studentInfo.name+ "'s info has been edited"));
  }

  else {
    res.end("URL not found");
  }
//});
///server.listen(8080, function () {
  //console.log("server is running on 8080");
//}); */


