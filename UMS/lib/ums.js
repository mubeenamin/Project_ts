import { Courses } from "./courses.js";
import { Instructor } from "./instructor.js";
import { Student } from "./student.js";
export class UMS {
    static _getid = 0;
    name;
    courses = new Map();
    student = new Map();
    instructor = new Map();
    constructor(name) {
        this.name = name;
    }
    addStudent(name, rollNo, cnic) {
        const studentID = ++UMS._getid;
        const student = new Student(name, rollNo, cnic);
        this.student.set(studentID, student);
        return { id: studentID };
    }
    addCourse(name) {
        const courses = new Courses(name);
        this.courses.set(name, courses);
    }
    addInstuctor(name, cnic, salary, departement) {
        const instructor = new Instructor(name, cnic, salary, departement);
        this.instructor.set(name, instructor);
    }
}
