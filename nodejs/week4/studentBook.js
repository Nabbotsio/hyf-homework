
class StudentsBook{
    constructor(students){
        this.students = students;
    }

    addStudent(student){    // adding or pushing a new student to the students book
        this.students.push(student);
    }

 //Step 1: method that can return list is all HYF students
    getList(){ 
       return this.students.map((student)=>{
            const Name = student.name;
            const Email = student.email;
            return{Name, Email};
        });
    }

/********************************************************************************
 //Step 2: method that can return a filtered list of students by class name
****************************************************************************** */
    getListByClass(classId){  
       let classList = this.students.filter((student)=>{
            return student.classId === classId;    
        });
            let listByClass = classList.map((student)=>{
                const name = student.name;
                const classId = student.classId;
                return {name, classId};
            });
            return listByClass;
    }

/*************************************************************************
 Step 3: method that can return one student’s detailed information
************************************************************************ */
    getStudentDetailByName(nameToFind){
        let studentInfo = this.students.filter((student)=>{
            return student.name.toLowerCase()==nameToFind.toLowerCase();
        });

        if (studentInfo.length>0){ 
          return studentInfo;
        }
        else{
          return "match  not found";
        }
    }

/*****************************************************************************
 Step 4: method that can add a new student to HYF 
 which receive the below person object as an input and store to existing list
*************************************************************************** */    
    addNewStudent(newStudent){
        let checkStudent = this.students.filter((student)=>{
            return student.name.toLowerCase()== newStudent.name.toLowerCase();
        });

        if (checkStudent.length>0){ 
          return true;
        }
        else{
            this.students.push(newStudent);
            return false;
        }
    }


/*****************************************************************
 Step 5: method that can edit existing student information
*************************************************************** */
    editStudentInfo(studentInfo){
      return this.students.forEach((student) => {
        if(student.name===studentInfo.name){
          student.classId=studentInfo.classId;
          student.email=studentInfo.email;
          student.telephone=studentInfo.telephone;
        }
      });
    }

// method to delete student from the list.
    deleteStudent(studentToDelete){
            const indexToDelete = this.students.indexOf(studentToDelete);
            console.log(indexToDelete);
            this.students.splice(indexToDelete,1);
    }  

}



class Student {
    constructor(name, classId, email, telephone){
        this.name = name;
        this.classId = classId;
        this.email = email;
        this.telephone = telephone;
    }

}

//creating students information
const marcellus = new Student("Marcellus", "08", "mar@hyf.com","12345678");
const sheila = new Student("Sheila","09", "sheilaqasemi @mail.com", "33333333");
const natalia = new Student("Natalia","08", "natalia@mail.com", "22222222");
const omit = new Student("Omit","07", "omit @mail.com", "44444444");
const yana = new Student("Yana","06", "yana @mail.com", "55555555");
const hema = new Student("Hema","09", "hema @mail.com", "66666666");



const hyf_students = new StudentsBook([]); // creats new instance of StudentBook class

// adding students to hyf_students
hyf_students.addStudent(marcellus);
hyf_students.addStudent(sheila);
hyf_students.addStudent(natalia);
hyf_students.addStudent(omit);
hyf_students.addStudent(yana);
hyf_students.addStudent(hema);




/* modified student information 
const studentInfo =  {
'name': 'Sheila',
'classId': '07',
'email': 'sheila@mail.com',
'telephone': '11110000'
};
hyf_students.editStudentInfo(studentInfo); // this method modify student info
*/


module.exports.studentsBook = StudentsBook;
module.exports.student = Student;
module.exports.hyfStudents = hyf_students;

