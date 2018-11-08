function copy(origin, toChange){
  var c = {};
  for(let x in origin){
    c[x] = origin[x];
  }
  for(let y in toChange){
    c[y] = toChange[y];
  }
  return c;
}

var person = {
  name: 'defaultName',
  age: 0,
  bDay: 0
}

var ali = copy(person, {
  name: 'Ali',
  age: 19
});

console.log(person.name); // OUTPUT : defaultName
console.log(ali.name); // OUTPUT : Ali
