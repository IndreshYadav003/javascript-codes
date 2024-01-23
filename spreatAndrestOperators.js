// 1.Creating a copy of an existing Array
const TeachStack=["HTML","CSS","JAVASCRIPT","REACT","NODE","EXPRESS","MANGODB","GIT"];
const newArrayCreate=[...TeachStack];
console.log(newArrayCreate);
/**output
 * [
  'HTML',       'CSS',    
  'JAVASCRIPT', 'REACT',  
  'NODE',       'EXPRESS',
  'MANGODB',    'GIT'     
]

 */

//2.Adding new value in  array
const array1=["HTML","CSS","JAVASCRIPT","REACT","NODE","EXPRESS","MANGODB"];
const newArray1=[...array1,"Git"];
/**
 * output
 * [
  'HTML',       'CSS',
  'JAVASCRIPT', 'REACT',
  'NODE',       'EXPRESS',
  'MANGODB',    'GIT'
]

 */

const obj={
    name:"Indresh Yadav",
    course:"Full stack web"
};
const newobject={...obj,rataing:2333};
console.log(newobject);
/**output
 * { name: 'Indresh Yadav', course: 'Full stack web', rataing: 2333 }
 * 
 */


//3. Cocatenating two array
const arr1=[1,2,3,4];
const arr2=[5,6,7,8];
const newarr=[...arr1,...arr2];
console.log(newarr);
/**
 * output
 * [
  1, 2, 3, 4,
  5, 6, 7, 8
]

 */


//4. spread an arrY OF ARGUMENT TO BE PASSED AS INDIVIDUAL PARAMS
function maxOfNumber(num1,num2,num3,num4){
    return Math.max(num1,num2,num3,num4);
}
const ourarray=[1,56,87,3];
console.log(maxOfNumber(...ourarray));//87


//5.using with string
const name="Indresh Yadav";
const  nameofcharacters=[...name];
console.log(nameofcharacters);
/**output of my code
 * [
  'I', 'n', 'd', 'r',
  'e', 's', 'h', ' ',
  'Y', 'a', 'd', 'a',
  'v'
]
 */



//7.spread operation with object
const obj1={
    name:"Indresh Yadav",
    study:"B.Tech",
       rank:23
}
const obj2={
    rataing:21,
    future:"Software engineer"
}
const newobject3={...obj1,...obj2}
console.log(newobject3);
/**output
 * {
  name: 'Indresh Yadav',
  study: 'B.Tech',
  rank: 23,
  rataing: 21,
  future: 'Software engineer'
}
 */

const obj8={
    name:"Indresh Yadav",
    study:"B.Tech",
       rank:23,
       rataing:43
}
const obj9={
    name:"bola",
    rataing:21,
    future:"Software engineer"
}
const newobject0={...obj8,...obj9}
console.log(newobject3);
/**output 
 * {
  name: 'Indresh Yadav',
  study: 'B.Tech',
  rank: 23,
  rataing: 21,
  future: 'Software engineer'
}

*/
const newobject12={...obj9,...obj8}
console.log(newobject12);
/**output of mycode
 * {
  name: 'Indresh Yadav',
  rataing: 43,
  future: 'Software engineer',
  study: 'B.Tech',
  rank: 23
}

 */


                      //*************Rest Operator ***************/
//1.resting collecting all remaining parameter in function 
function sumofAllNumbera(...numbers122){
    return numbers122.reduce((sum,curr)=>sum+curr);
}                       
console.log(sumofAllNumbera(32,64,76,34,64,34))//304


//2.  Desteucting
const arr121=["HTML","CSS","JAVASCRIPT","REACT","NODE","EXPRESS","MANGODB","GIT"];
const [element1,element2,...remaining]=arr121;
console.log(element1);//"HTMl"
console.log(element2);//"CSS"
console.log(remaining);//["JAVASCRIPT","REACT","NODE","EXPRESS","MANGODB","GIT"];



const obj1211={
    name:"Indresh yadav",
    course:"Full stack",
    rataing:32
}
const{name219,...Properties}=obj1211;
console.log(name219)//"Indresh Yadav"
console.log(Properties);
/**
 * output
 * { name: 'Indresh yadav', course: 'Full stack', rataing: 32 }
 */

