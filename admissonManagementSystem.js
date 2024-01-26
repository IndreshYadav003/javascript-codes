//Array admision mamagementSystem
//store in this part student name
const student=[];
//create function student list
function listOfStudent(){
    return student;
}
//we add student create function
function addStudent(name,CollegeId,department,yearOfAddmision,city){
    //add all details
    student.push(name,CollegeId,department,yearOfAddmision,city);
    return 'student ${name,CollegeId,department,yearOfAddmision,city}are added Successfully';
}
//we remove stucent all details
function removeStudent(id){
    //Task :find the indefx of the element remove=indexOf
    const IndexOfStudent=student.indexOf(id);
    //Tasl 2:to remove the element form the that index =splice
    student.splice(IndexOfStudent-1,5);
    //Task :to print somehing
    return "removed successfully"
}
//we add some student
addStudent("Indresh Yadav",1,"cse",2204,"basti");
addStudent("Gopal",2,"cse",2004,"basti");
console.log(listOfStudent());
//we want to remove gopal
console.log(removeStudent(2));
console.log(listOfStudent());//console.log(listOfStudent());
