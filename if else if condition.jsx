var a=77;
// check number is divisiable by 2
if(a%2==0){
    console.log("Number  is divisiablle by 2");
}
//check number is divisiable by 3
else if(a%3==0){
    console.log("Number is divisiable by 3");
}
// check number is divisiable by 5
else if(a%5==0){
    console.log("Number is divisiable by 5");
}else{
    console.log("Number is not divisiable");
}
console.log((a%2==0)?"Number  is divisiablle by 2":(a%3==0)?"Number is divisiable by 3":(a%5==0)?"Number is divisiable by 5":"Number is not divisiable");