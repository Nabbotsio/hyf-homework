var http = require("http");

var studentsBook = require("./studentBook")

var server = http.createServer(function(req, res){
    //console.dir(req, {depth:0})


    var url = req.url;
    const hyf_students = studentsBook.hyfStudents;
    
    if (url==="/getList"){
      res.end(JSON.stringify(hyf_students.getList()));
    } 

    else if (url==="/getListByClass"){
      res.end(JSON.stringify(hyf_students.getListByClass("08")));
    } 

    else if (url==="/getStudentDetailByName"){
      res.end(JSON.stringify(hyf_students.getStudentDetailByName("sHeIla")));
    } 

    else {
      res.end("URL not found");
    }


   // res.end("you are done. wow success!!")
    
})

server.listen(8080, function( ) {
    console.log("server is running on 8080")
})

