function Student(fname, lname){
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function(){
  return this.fname + " " + this.lname;
};

Student.prototype.enroll = function(course){
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    return true;
  }
  return false;
};

Student.prototype.courseLoad = function(){
  let load = {};
  this.courses.forEach((course) => {
    load[course.department] ? load[course.department] += course.credits : load[course.department] = course.credits;
  });
  return load;
};

function Course(courseName, department, credits){
  this.courseName = courseName;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.addStudent = function(student){
  if (student.enroll(this)) {
    this.students.push(student);
  }
};

let student1 = new Student("Ranelle", "Reyes");
let student2 = new Student("Sam", "Faber-Manning");
let student3 = new Student("Jeff", "Fiddler");

let science1 = new Course('Bio1', 'Science', 2);
let science2 = new Course('Bio2', 'Science', 3);
let math1 = new Course('Calc1', 'Math', 4);
let math2 = new Course('Calc2', 'Math', 5);
let cs1 = new Course('App Academy', 'CS', 20);
let cs2 = new Course('Dev Boot Camp', 'CS', 10);

student1.enroll(science1);
student1.enroll(cs1);
student1.enroll(cs2);
student2.enroll(math1);
student3.enroll(science2);
student3.enroll(math2);

console.log(student1.courseLoad());
