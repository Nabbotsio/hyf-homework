use mysql_hw2_creatnedittables;
SET NAMES utf8mb4;

-- creating the students table 
 CREATE TABLE `students` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;	

-- creating the courses table
CREATE TABLE `courses`(
`id` int(10) unsigned not null auto_increment primary key,
`name` varchar (255) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- creating the linking table 
create table `students_courses`(
`students_id` int (10) unsigned not null,
`courses_id` int (10) unsigned not null,
primary key (`students_id`, `courses_id`),
constraint `fk_students_courses_students` foreign key (`students_id`) references `students` (`id`) on delete cascade on update cascade,
constraint `fk_students_courses_courses` foreign key (`courses_id`) references `courses` (`id`) on delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

select *
from courses;

-- Adding or inputing data into the tables
insert into students (id, name, email, phone) values (1,"Marcellus Botsio", "nab@mail.com","1111-2222");
insert into students (id, name, email, phone) values (2,"Adwoba Eliason", "adwo@mail.com","2222-3333");
insert into students (id, name, email, phone) values (3,"Kofi Sey", "kofi@mail.com","3333-4444");
insert into students (id, name, email, phone) values (4,"Araba Eduama", "arabs@mail.com","4444-5555");
insert into students (id, name, email, phone) values (5,"Ewurabena Abokoma", "aboks@mail.com","5555-6666");
insert into students (id, name, email, phone) values (6,"Kwamena Afful", "kwafful@mail.com","6666-7777");

insert into courses (id, name) values (1,"HTML");
insert into courses (id, name) values (2,"CSS");
insert into courses (id, name) values (3,"JS");
insert into courses (id, name) values (4,"Nodejs");
insert into courses (id, name) values (5,"MySql");

insert into students_courses (students_id, courses_id) values (1,4);
insert into students_courses (students_id, courses_id) values (1,3);
insert into students_courses (students_id, courses_id) values (1,5);
insert into students_courses (students_id, courses_id) values (2,4);
insert into students_courses (students_id, courses_id) values (2,5);
insert into students_courses (students_id, courses_id) values (3,3);
insert into students_courses (students_id, courses_id) values (3,1);
insert into students_courses (students_id, courses_id) values (4,3);
insert into students_courses (students_id, courses_id) values (5,2);
insert into students_courses (students_id, courses_id) values (6,1);





