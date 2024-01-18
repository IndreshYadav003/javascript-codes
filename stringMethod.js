const hellow="hollow every one";
console.log(hellow);//hollow every one
//index wise o base
console.log(hellow[0]);//h
console.log(hellow[7]);//e
//index wise -1 base
console.log(hellow[-1]);
console.log(hellow[-3]);
/**
 * undefined
undefined
 */



// length of string
console.log(hellow.length);//16

//assign value in string
hellow[0]='r'
console.log(hellow)//hollow every one



//method   charAt()=>by index we find th
//at speciveice element
console.log(hellow.charAt(3));//l  holloe[3] same
console.log(hellow.charAt(-3));

//method at()=>this metod used to  negatitve index
console.log(hellow.at(-7))//e


// endwith method
console.log(hellow.endsWith(6))//false
console.log(hellow.endsWith("one"))//ture
console.log(hellow.endsWith(hellow.length-1));//false



//include method
console.log(hellow.includes("e"));//true
//strating index 3
console.log(hellow.includes("e",3));//true

//padend method
console.log(hellow.padStart(32,"."))//................hollow every one
console.log(hellow.padEnd(21,"?"))//hollow every one?????

//repead method
console.log(hellow.repeat("e"))//ture

//replase method
console.log(hellow.replace("e","gffr"));//hollow gffrvery one
console.log(hellow)//hollow every one

//method replece all
console.log(hellow.replaceAll('e',"L"));//hollow LvLry onL


//search method
console.log(hellow.search("e"))//7


//indexOfmethod
console.log(hellow.indexOf('e',5));//7


//slice method
console.log(hellow.slice(3))//low every one
console.log(hellow.slice(3,8))//low e


//split method
console.log(hellow.split(" "));//[ 'hollow', 'every', 'one' ]
console.log(hellow.split(''))/** [
    'h', 'o', 'l', 'l',
    'o', 'w', ' ', 'e',
    'v', 'e', 'r', 'y',
    ' ', 'o', 'n', 'e'
  ]*/



  //startwith
  console.log(hellow.startsWith("h"))//true

  // substr
  console.log(hellow.substring(3,8))//low e

