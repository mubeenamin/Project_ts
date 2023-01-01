import { Person } from "./person.js";
export class Student extends Person {
    student_rollNo;
    student_Id;
    constructor(name, rollNo, cnic) {
        super(name, cnic);
        this.student_rollNo = rollNo;
    }
}
