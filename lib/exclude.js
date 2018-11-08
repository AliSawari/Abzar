
function exclude(obj, arr){
    var o = {};
    var q = {};
    for(let z in obj){
      o[z] = obj[z];
    }
    for(let x in arr){
      o[arr[x]] = undefined;
    }
    for(let y in o){
      if(o[y]){
        q[y] = o[y];
      }
    }
    return q;
}


// ******* EXAMPLES: ******* ->

var person = {
  name: "Ali",
  age: 19,
  bd: '1st of may, 1998',
  facebookPassword: '123456789',
  twitterPassword: 'abcdefg'
};

var securePerson = exclude(person, ['twitterPassword','facebookPassword']);

console.log(securePerson);
console.log(person);
