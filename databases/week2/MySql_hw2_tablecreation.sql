use mysql_hw2_creatnedittables;
SET NAMES utf8mb4;

 CREATE TABLE `students` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;	

CREATE TABLE `courses`(
`id` int(10) unsigned not null auto_increment primary key,
`name` varchar (255) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table `students_courses`(
`students_id` int (10) not null,
`courses_id` int (10) not null,
primary key (`students_id`, `courses_id`),
constraint `fk_students_courses_students` foreign key (`students_id`) references `students` (`id`) on delete cascade on update cascade,
constraint `fk_students_courses_courses` foreign key (`courses_id`) references `courses` (`id`) on delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
