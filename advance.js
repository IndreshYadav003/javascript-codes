// basic code of promise
/** 
const simranPromise=new Promise((resolve,reject)=>{
    let paresntDecesion=true;
    if(paresntDecesion){
        resolve("Yaay abi shadi ki tayyari karo");
    }else{
        reject("papa ne IAS dhoond liya hai")
    }
});
simranPromise.then((message)=>{
    console.log("Simara message ",message)
    console.log("let books the wedding card")
}).catch((message)=>{
    console.log("Simara message ",message)
    console.log("tinder hai yar")
}).finally(()=>console.log("chololiye means mil gaya"));

*/

//advance code of promise
const promise1=new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(n=Math.random>.05){
        resolve(" frend1 :hellow i am go to gao")
    }else{
        reject("sorry neha is not come");
    }
},3000)
});
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(n=Math.random>.05){
            resolve("friend 2 :hellow i am go to gao")
        }else{
            reject("sorry mansi is not come");
        }
    },2000)
    });
    const promise3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(n=Math.random>.05){
                resolve(" friend 3:hellow i am go to gao")
            }else{
                reject("sorry aashi is not come");
            }
        },1000)
        });


        Promise.all([promise1,promise2,promise3])
        .then((message)=>{
        console.log(message)
        console.log("my work is sorted")})
        .catch((message)=>{
            console.log(message)
            console.log("my friend come my home")})


        Promise.any([promise1,promise2,promise3])
        .then((message)=>{
        console.log(message)
        console.log("my work is sorted")})
        .catch((message)=>{
            console.log(message)
            console.log("my friend come my home")})
      
