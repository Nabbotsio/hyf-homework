
class StudentsBook{
    constructor(students){
        this.students = students;
    }

    addStudent(student){    // adding or pushing a new student to the students book
        this.students.push(student)
    }

/***************************************************************
 Step 1: method that can return list is all HYF students
************************************************************** */
    getList(){ 
       return this.students.map((student)=>{
            const Name = student.name;
            const Email = student.email;
            return{Name, Email};
        })
    }

/********************************************************************************
 Step 2: method that can return a filtered list of students by class name
****************************************************************************** */
    getListByClass(classId){  
       let classList = this.students.filter((student)=>{
            return student.classId === classId;    
        })
            let listByClass = classList.map((student)=>{
                const name = student.name;
                const classId = student.classId;
                return {name, classId}
            })
            return listByClass;
    }

/*************************************************************************
 Step 3: method that can return one student’s detailed information
************************************************************************ */
    getStudentDetailByName(nameToFind){
      let isNameFound=false
      console.log();
      console.log(`${nameToFind}'s student Infomation`);

      let studentInfo = this.students.filter((student)=>{
        if(student.name.includes(nameToFind)){
          isNameFound=true;
          return student;
        }
      })

        if(isNameFound===true){
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
    addNewStudent(studentInfo){
      this.students.push(studentInfo);
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

}



class Student {
    constructor(name, classId, email, telephone){
        this.name = name;
        this.classId = classId;
        this.email = email;
        this.telephone = telephone;
    }

}
const marcellus = new Student("Marcellus", "08", "mar@hyf.com","12345678");
//console.log(marcellus)

const sheila = new Student("Sheila","09", "sheilaqasemi @mail.com", "33333333");
const natalia = new Student("Natalia","08", "natalia@mail.com", "22222222");
const omit = new Student("Omit","07", "omit @mail.com", "44444444");
const yana = new Student("Yana","06", "yana @mail.com", "55555555");
const hema = new Student("Hema","09", "hema @mail.com", "66666666");




const hyf_students = new StudentsBook([]);
hyf_students.addStudent(marcellus);
hyf_students.addStudent(sheila);
hyf_students.addStudent(natalia);
hyf_students.addStudent(omit);
hyf_students.addStudent(yana);
hyf_students.addStudent(hema)
console.log(hyf_students);




console.log();
console.log("Students List");
console.log(hyf_students.getList());



console.log();
console.log("List by Class");
console.log(hyf_students.getListByClass("08"));


console.log(hyf_students.getStudentDetailByName('Sheila'));


console.log(hyf_students.getStudentDetailByName('zzzzz')); // this returns No result found



const newStudent1 =  {
    'name': 'Afshin Heidari',
    'class': '08',
    'email': 'afshin@mail.com',
    'telephone': '11110000'
};
hyf_students.addNewStudent(newStudent1); // this method add the new student in the list if not exits

console.log();
console.log("Students List");
console.log(hyf_students.getList()); // Verify the student added to the list






// modified student information 
const studentInfo =  {
    'name': 'Sheila',
    'classId': '07',
    'email': 'sheila@mail.com',
    'telephone': '11110000'
};
hyf_students.editStudentInfo(studentInfo); // this method modify student info

console.log(hyf_students.getStudentDetailByName('Sheila')); // to verify

