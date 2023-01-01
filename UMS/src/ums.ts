import { Courses } from "./courses.js";
import { Instructor } from "./instructor.js";
import { Student } from "./student.js";

export class UMS {
  static _getid = 0;
  name: string;
  courses = new Map<string, Courses>();
  student = new Map<number, Student>();
  instructor = new Map<string, Instructor>();
  constructor(name: string) {
    this.name = name;
  }
  addStudent(name: string, rollNo: string, cnic: number) {
    const studentID = ++UMS._getid;
    const student = new Student(name, rollNo, cnic);
    this.student.set(studentID, student);
    return { id: studentID };
  }
  addCourse(name: string) {
    const courses = new Courses(name);
    this.courses.set(name, courses);
  }
  addInstuctor(
    name: string,
    cnic: number,
    salary: number,
    departement: string[]
  ) {
    const instructor = new Instructor(name, cnic, salary, departement);
    this.instructor.set(name, instructor);
  }
}
