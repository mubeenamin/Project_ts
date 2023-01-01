import { Person } from "./person.js";

export class Instructor extends Person {
  salary: number;
  instructor_department: string[];
  constructor(
    name: string,
    cnic: number,
    salary: number,
    departement: string[]
  ) {
    super(name, cnic);
    this.salary = salary;
    this.instructor_department = departement;
  }
}
