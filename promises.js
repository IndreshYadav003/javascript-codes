//construct of promise
const promise=new  Promise(function(resolve,reject){// only first parameter is nesscery
    //we call any api
if(Math.random()>0.5){
    resolve("Success full work");//data
}else{
    reject("Fail your work");//error
}
});
//console.log(JSON.stringify(promise));


//method of promise
promise.then(response=>console.log(response));//when run case is true


//  method of promise 
promise.catch(error=>console.log(error));//when run case is false


// chaning method
//all promises
promise
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(()=>{
    console.log("hellow")
});


//method
promise.finally((data)=>{
    console.log("hellow")
})




//we add  all promise in array
const promise1=new Promise(function(resolve){
    resolve("first");
})
const promise2=new Promise(function(resolve){
    resolve("second");
})
const promise3=new Promise(function(resolve){
    resolve("third");
})
const allpromise=[promise1,promise2,promise3];
Promise.all(allpromise)
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(()=>{
    console.log("stop loader")
});