/**kisi object ki properties agar dusare object me one properties or 
 * all properties
 * use karana ho to call()method function
 * ka use karate hai
 */
//simple
const person1={
    firstname:"Indresh",
    lastname:"Yadav",
    village:"dh",
}
person2={
    fullname:function(){
       console.log(this.firstname+" "+this.lastname)
    },
    city:function(){
        console.log("this is my city"+this.village )
    }
}
//we want to fullname of person2
console.log(person2.fullname());//undefind
//when we using call method
person2.fullname.call(person1);//Indresh Yadav

person2.city.call(person1);//this is my city dh

person3={
    address:function(countery,college){
       console.log(this.firstname+" "+ this.lastname+" this is my "+ countery +" kown"+college);
    
    },
    city:function(){
        console.log("this is my city"+this.village )
    }
}


person3.address.call(person1,"India","Gitm")//Indresh Yadav this is my India kownGitm


//apply method  in this method only use array \\apply me only two parameter hota hai
person3.address.call(person1,['new delhi','India'])//Indresh Yadav this is my new delhi,India kownundefined
person3.address.apply(person1,['new delhi','India'])//Indresh Yadav this is my new delhi kownIndia


//bind method
bound=person3.address.bind(person1)
bound("ENgland","dijfg")//Indresh Yadav this is my ENgland kowndijfg
bound("usa","cam")