export class Courses {
  course_name: string;
  course_dis?: string;
  constructor(name: string) {
    this.course_name = name;
  }
  getCourse(){
    return this.course_name;
  }
}
