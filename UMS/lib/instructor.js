import { Person } from "./person.js";
export class Instructor extends Person {
    salary;
    instructor_department;
    constructor(name, cnic, salary, departement) {
        super(name, cnic);
        this.salary = salary;
        this.instructor_department = departement;
    }
}
