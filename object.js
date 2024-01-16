//first we create object in which first term represent key and sceond represent value
const person={
    name:'Indresh Yadav',
    age:20,
    city:'Basti',
    hobby:'cricket',
    salary:450000
}
//we print preson all value
console.log(person);
/**
out put of my code
{
  name: 'Indresh Yadav',
  age: 20,
  city: 'Basti',        
  hobby: 'cricket',     
  salary: 450000        
}
*/


//first way of creating object
const user={
    name:"abc",
    age:21,
    greet:function(){
        console.log("hellow every one");
    }
}
console.log(user)
/* output of my upper code
{ name: 'abc', age: 21, greet: [Function: greet] }
*/


//secon way of creating  object
const obj=new Object();
console.log(obj)
//that is empty object {}



// 3rd way of creating object using function
function emp(id,name,department,salary,age,city){
    this.id=id;
    this.age=age;
    this.department=department;
    this.salary=salary;
    this.city=city;
}
//puting value in the object
const emobt=new emp(23,"acb","cse",234543,21,"basti");// new is keyward and emp is the function
console.log(emobt)
/*
output of this code
emp {
  id: 23,
  age: 21,
  department: 'cse',
  salary: 234543,
  city: 'basti'
}
*/


// Read object 
const  student={
    name:"Indresh Yadav",
    age:32,
    city:"basti"
}
//I would like to read the property of student
console.log(student.age);//   32
console.log(student.name);// Indresh Yadav
console.log (student.city);//basti

// new notation of read
console.log(student["name"]);//Indresh Yadav
console.log(student["city"]);//basti
console.log(student["age"])//32

// I would like to insert the new field 
const person1={}//null object create
person1.age=21;
person1.city="seerr";
person1.id=244;
person1.name="indresh Yadav"

//print value
console.log(person1);
/*
outputof my code
{ age: 21, city: 'seerr', id: 244, name: 'indresh Yadav' }
*/


//update person name
person1.name="kgf";
console.log(person1);
/**
 *{ age: 21, city: 'seerr', id: 244, name: 'kgf' }
 */


/**
 * Inbuilt method in js of object
 */
const person2={
    name:"RCB",
    age:12,
    salary:3432,
    address:{
city:"Basti",
countery:"india",
    }
}
//List of all the key of that object
console.log(Object.keys(person2));//[ 'name', 'age', 'salary', 'address' ]
//List of all the value in that object
console.log(Object.values(person2));//[ 'RCB', 12, 3432, { city: 'Basti', countery: 'india' } ]
//List of the all keys and value pairs
console.log(Object.entries(person2));
/**
 * output of my code
 * [
  [ 'name', 'RCB' ],
  [ 'age', 12 ],
  [ 'salary', 3432 ],
  [ 'address', { city: 'Basti', countery: 'india' } ]
]

 */


//assign the value in the new objectc
new_obj=Object.assign({},{person2});
console.log(new_obj);
/**
 * output of my code
 * {s
  person2: {
    name: 'RCB',
    age: 12,
    salary: 3432,
    address: { city: 'Basti', countery: 'india' }
  }
}
 */

//new method to assign

Object.freeze(person2);//object is not freezed and it can not be changed ,assign,delete



//to check our object change or not

console.log(Object.isFrozen(person2));//true


// seal function used
Object.seal(person2);
console.log(person2);
/**
 * output{
  name: 'RCB',
  age: 12,
  salary: 3432,
  address: { city: 'Basti', countery: 'india' }
}

 */



const person3={
    name:"kopal",
    age:34,
    salary:2345
}
// to check a particular key present in that object
console.log(Object.hasOwn(person3,"name"));//true
console.log(Object.getOwnPropertyNames(person3));//[ 'name', 'age', 'salary' ]
console.log(Object.getOwnPropertyDescriptor(person3));//undefined
console.log(Object.getOwnPropertySymbols(person3))//[]

// print value iterative form
for(k in person3){
    console.log(k);
}
/**
 * output
 * name
age
salary
 */
// to private any key
Object.defineProperties(person3,{
    salary:{
        value:2345,
        Enumerator:false
    }
})
for(k in person3){
    console.log(k);
}



// delete
const person4={
    name:"kopal",
    age:34,
    salary:2345
}
delete-person4["name"];
console.log(person4);
/**output of my cose
 * { name: 'kopal', age: 34, salary: 2345 }
 * 
*/