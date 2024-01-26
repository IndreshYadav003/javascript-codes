//we store drtails of that person
//create object
const admin_credentails={
    email:"acb@student.study.com",
    password:"admin@5423abc"
}
// create function of login
function login(email,password){
    if(email==admin_credentails.email&&password==admin_credentails.password){
        return "Login complete";
    }
    else if(email==admin_credentails.email&&password==admin_credentails.password){
        return "password not match";
    }
    else
    return "Involid Credentails";
}
  
    console.log(login("acb@student.study.com","admin@5423abc"));
    console.log(login("acb@student.study.com","dmin@5423abc"));
    console.log(login("b@student.study.com","admin@5423abc"));
/**
 * output of my code
 * Login complete
Involid Credentails
Involid Credentails
 */