import { Courses } from "./courses.js";
import { Person } from "./person.js";

export class Student extends Person {
  student_rollNo: string;
  student_Id?: number;
  constructor(name: string, rollNo: string, cnic: number) {
    super(name, cnic);
    this.student_rollNo = rollNo;
  }
}
