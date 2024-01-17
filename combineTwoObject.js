const object1={name:"gfd",id:87};
const object2={city:"basti",countery:"india"};
const object3=Object.assign(object1,object2);
console.log(object3)// name: 'gfd', id: 87, city: 'basti', countery: 'india' }
const object4=Object.assign({},object1,object2);
console.log(object4)//{ name: 'gfd', id: 87, city: 'basti', countery: 'india' 
const object5={...object1,...object2,...object3,...object4}
console.log(object5)//{ name: 'gfd', id: 87, city: 'basti', countery: 'india' }

