
const jsonfile = require("jsonfile");
let hyf_studentsJson = jsonfile.readFileSync("students.json");

class StudentsBook {
    constructor() {
        this.students = hyf_studentsJson;
    }

    addStudent(student) { // adding or pushing a new student to the students book
        this.students.push(student);
    }

    //Step 1: method that can return list is all HYF students
    getList() {
        return this.students
       
    }

    /********************************************************************************
     //Step 2: method that can return a filtered list of students by class name
    ****************************************************************************** */
    getListByClass(classId) {
        let classList = this.students.filter((student) => {
            return student.classId === classId;
        });
        let listByClass = classList.map((student) => {
            const name = student.name;
            const classId = student.classId;
            return {
                name,
                classId
            };
        });
        return listByClass;
    }

    /*************************************************************************
     Step 3: method that can return one student’s detailed information
    ************************************************************************ */
    getStudentDetailByName(nameToFind) {
        let studentInfo = this.students.filter((student) => {
            return student.name.toLowerCase() == nameToFind.toLowerCase();
        });

        if (studentInfo.length > 0) {
            return studentInfo;
        } else {
            return false;
        }
    }

    /*****************************************************************************
     Step 4: method that can add a new student to HYF 
     which receive the below person object as an input and store to existing list
    *************************************************************************** */
    addNewStudent(newStudent) {
        let checkStudent = this.students.filter((student) => {
            return student.name.toLowerCase() == newStudent.name.toLowerCase();
        });

        if (checkStudent.length > 0) {
            return true;
        } else {
            this.students.push(newStudent);  
            jsonfile.writeFile("students.json", this.students, (err)=>{ // the next 3 line writes the students info to the Json file.
                if (err) throw err;
                console.log("Data written to file");
            })
            return false;
        }
    }


    /*****************************************************************
     Step 5: method that can edit existing student information
    *************************************************************** */
    editStudentInfo(studentInfo) {
        //return
        let isStudentExist = false;
        let editedStudentList = this.students.forEach((student) => {
            if (student.name.toLowerCase() === studentInfo.name.toLowerCase()) {
                student.classId = studentInfo.classId;
                student.email = studentInfo.email;
                student.telephone = studentInfo.telephone;
                
                isStudentExist = true;
            }
        });
            jsonfile.writeFile("students.json", this.students, (err)=>{
                if (err) throw err;
                console.log("Data deleted from file");
            })
        return isStudentExist;
    }

    // method to delete student from the list.
    deleteStudent(studentToDelete) {
        let studentExistCheck = this.getStudentDetailByName(studentToDelete.name)
        if (studentExistCheck.length > 0) {
            const indexToDelete = this.students.findIndex(student => student.name.toLowerCase() === studentToDelete.name.toLowerCase());
            console.log(indexToDelete);
            this.students.splice(indexToDelete, 1);
            let data = JSON.stringify(this.students, null, 2)
            fs.writeFile("students.json", data, (err)=>{
                if (err) throw err;
                console.log("Data deleted from file");})
            return true;
        } else {
            return false;
        }

    }

}

module.exports.studentsbook = StudentsBook;