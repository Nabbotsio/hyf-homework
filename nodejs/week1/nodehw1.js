
class StudentsBook{
    constructor(students){
        this.students = students;
    }

    addStudent(student){    // adding or pushing a new student to the students book
        this.students.push(student)
    }

    getList(){ // gives the list of all students
       return this.students.map((student)=>{
            const Name = student.name;
            const Email = student.email;
            return{Name, Email};
        })
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



/***************************************************************
 Step 1: Write a method that can return list is all HYF students
************************************************************** */
console.log(hyf_students.getList());

/** 
Sample Result:
[
  {
    name: 'Natalia'
    email: 'natalia@mail.com'
  },
  {
    name: 'Omit'
    email: 'omit@mail.com'
  },
  {
    name: 'Yana'
    email: 'yana@mail.com'
  },
  {
    name: 'Hema Gunti'
    email: 'hema@mail.com'
  }
]
*/

/********************************************************************************
 Step 2: Write a method that can return a filtered list of students by class name
****************************************************************************** */
hyf_students.getListByClass('08');

/** 
Sample Result:
[
  {
    name: 'Natalia'
    classId: '08'
  },
  {
    name: 'Keerthika devi'
    classId: '08'
  },
  {
    name: 'Kseniia'
    classId: '08'
  },
  
]
*/


/*************************************************************************
 Step 3: Write a method that can return one student’s detailed information
************************************************************************ */
hyf_students.getStudentDetailByName('Sheila');

/** 
Sample Result:
 {
       'name': 'Sheila',
       'classId': '08',
       'email': 'sheilaqasemi @mail.com',
       'telephone': '3333333'
}
*/

// No result found
hyf_students.getStudentDetailByName('zzzzz'); // if the student name not exits in the list should reult the below message

/** 
Sample Result: 
    
    No match found

*/

/*****************************************************************************
 Step 4: Write a method that can add a new student to HYF 
 which receive the below person object as an input and store to existing list
*************************************************************************** */
const newStudent1 =  {
    'name': 'Afshin Heidari',
    'class': '08',
    'email': 'afshin@mail.com',
    'telephone': '11110000'
};
hyf_students.addNewStudent(newStudent1); // this method should add the new student in the list if not exits


hyf_students.getList(); // Verify the student added to the list

/** 
Sample Result:
[
    {
    name: 'Afshin Heidari'
    email: 'natalia@mail.com'
  },
  {
    name: 'Natalia'
    email: 'natalia@mail.com'
  },
  {
    name: 'Omit'
    email: 'omit@mail.com'
  },
  {
    name: 'Yana'
    email: 'yana@mail.com'
  },
  {
    name: 'Hema Gunti'
    email: 'hema@mail.com'
  },
]
*/


/*****************************************************************
 Step 5: Write a method that can edit existing student information
*************************************************************** */

// Look at Sheila's classId has changed to '07'
const studentInfo =  {
    'name': 'Sheila',
    'classId': '07',
    'email': 'sheila@mail.com',
    'telephone': '11110000'
};
hyf_students.editStudentInfo(studentInfo); // this method should modify student info

hyf_students.getStudentDetailByName('Sheila'); // to verify
/** 
Sample Result:
 {
       'name': 'Sheila',
       'classId': '07',
       'email': 'sheilaqasemi @mail.com',
       'telephone': '3333333'
}
*/
