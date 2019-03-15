var http = require("http");

var studentsBook = require("./studentBook")

var server = http.createServer(function (req, res) {
  //console.dir(req, {depth:0})


  var url = req.url;
  const hyf_students = studentsBook.hyfStudents;

  if (url === "/getList" && req.method === "GET") {
    res.end(JSON.stringify(hyf_students.getList()));
  }

  else if (url === "/getListByClass" && req.method === "GET") {
    res.end(JSON.stringify(hyf_students.getListByClass("08")));
  }

  else if (url === "/getStudentDetailByName" && req.method === "GET") {
    res.end(JSON.stringify(hyf_students.getStudentDetailByName("sHeIla")));
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
      hyf_students.editStudentInfo(studentInfo)
    res.end(JSON.stringify(studentInfo.name+ "'s info has been edited"));
  }

  else {
    res.end("URL not found");
  }


  // res.end("you are done. wow success!!")

})

server.listen(8080, function () {
  console.log("server is running on 8080")
})

