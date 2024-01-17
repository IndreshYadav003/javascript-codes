const mySym=Symbol("Key1");
const person={
    name:"kgr",
    mySym:"GreateDay",
    "firstname":"Indresh ahir",
    lastname:'Yadav',
    city:"basti",
    age:15,
}
console.log(typeof person.Symbol)//undefined
console.log(typeof person.mySym)//string
console.log(typeof mySym);
console.log(person);
/**
 * outputofcode
 *symbol
{
  name: 'kgr',
  mySym: 'GreateDay',       
  firstname: 'Indresh ahir',
  lastname: 'Yadav',        
  city: 'basti',
  age: 15
}
 */

const person1={
    name:"kgr",
    [mySym]:"GreateDay",//sayntax
    "firstname":"Indresh ahir",
    lastname:'Yadav',
    city:"basti",
    age:15,
}
console.log(typeof mySym);
console.log(person1);
/**
 * output
 * symbol
{
  name: 'kgr',
  firstname: 'Indresh ahir', 
  lastname: 'Yadav',
  city: 'basti',
  age: 15,
  [Symbol(Key1)]: 'GreateDay'
}

 */