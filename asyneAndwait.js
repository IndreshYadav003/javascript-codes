// async code 
  async function getMessage(){//this function retrn a promise so that it is important
    return "good moring every one"
}
console.log(getMessage());


getMessage().then(result=>console.log(result));//this is not return a promise so that 


//wait using 
function printafter(){
    console.log("first line")
    setTimeout(()=>{
        console.log("hellow student");
    },3000);
    console.log("this is last line");
}
printafter();



console.log("new method yar");
function printafterall(){
    console.log("first line")
    const data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("hellow student");
    },3000);
})
    console.log("this is last line");
}
printafterall();