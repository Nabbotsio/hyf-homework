const express = require("express");
const app = express();

const studentsBook = require("./studentBook");
const hyf_students = studentsBook.hyfStudents;

const port = 8080;

//const bodyParser = require("body-parser");
//app.use(bodyParser.json());

app.use(express.json());
const router = express.Router();

//app.use(bodyParser.urlencoded({
//  extended: true
//}));
//app.use(bodyParser.json())

app.get("/", (req, res) => res.send("Marcel HYF APP"));

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
    }
    else if(req.query.classId) {
      const classList = hyf_students.getListByClass(req.query.classId);
      if (classList.length > 0) {
        res.status(201);
        res.send(JSON.stringify(classList));
      } else {
        res.status(404);
        res.send("No list found for the class ");
      }
    }

    else {
      res.status(202);
      res.send(JSON.stringify(hyf_students.getList()));
    };
  })

  .post((req, res) => {
    const newStudent = hyf_students.addNewStudent(req.body);
    if (!newStudent) {
      res.status(201);
      res.send("Details added " + JSON.stringify(req.body));
    }
    else {
      res.status(401);
      res.send("Student already exist ");
    }
  })

  .put( (req, res) => {
    const newStudent = hyf_students.editStudentInfo(req.body);
    if (newStudent) {
      res.status(201);
      res.send("Student details edited succusfully");
    }else {
     res.status(401);
      res.send("Student does not exist ")}
    })

    .delete((req, res) => {
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
  

  


/*

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
*/
app.use('/api', router);

app.listen(port, () => console.log(`Marcel HYF app is listening on port ${port}!`));