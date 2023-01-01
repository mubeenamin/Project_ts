import inquirer from "inquirer";
import { Courses } from "./courses.js";
import { Student } from "./student.js";
import { UMS } from "./ums.js";

const ums1 = new UMS("Mubeen");
ums1.addStudent("Mubeen", "22", 11223456456454);
ums1.addCourse("metaverse");
ums1.addCourse("Blockchain");
ums1.addCourse("Cloud Computing");
ums1.addInstuctor("Zia",112233444556,50000,["Computer Science"]);
const ums2 = new UMS("waheed");
ums2.addStudent("waheed", "30", 1231231231231);

console.log(ums1.student);
console.log(ums1.courses);
console.log(ums1.instructor);


// console.log(ums2);