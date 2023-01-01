export class Courses {
    course_name;
    course_dis;
    constructor(name) {
        this.course_name = name;
    }
    getCourse() {
        return this.course_name;
    }
}
