/*module.exports =*/ function isThere(item){
  var ISTHERE = {
    results: {
      indexedResults: undefined,
      arrayResults: [],
    },
    in: function In(target){
      var t = typeof target;
      var s = [];
      var g = [];
      if(t === 'object' || t === 'array'){
        for(let x in target){
          if(ISTHERE.item === target[x]){
            s.push(target[x]);
            s.push(x);
          }
        }
        if(s.length > 0){
          for(let x in s){
            if(x % 2 == 0){
              g.push(s[x]);
            }
          }
          ISTHERE.results.arrayResults = g;
          ISTHERE.results.indexedResults = s.toString().replace(/,/gi,':');
          return ISTHERE;
        } else {
          console.log(ISTHERE, s, g);
          return false;
        }
      } else {
        throw Error("the target type must be object or array");
      }
    },
    Return: function Return() {
      return ISTHERE.results;
    }
  }


    if(typeof item === 'string' || typeof item === 'number'){
      ISTHERE.item = item;
      return ISTHERE;
    } else {
      throw Error("the type of item should be either string or number");
    }
  }

// MrGhost - too many questions
// MrGhost - light bulb
// MrGhost - DAD
// MrGhost - pain stream
// MrGhost - gears
// MrGhost - 

function n1(val){
  if(val !== [] && val !== {}){
    return true;
  } else {
    return false;
  }
}

// console.log(isThere(44).in([34,55,12,44,78]));


// IS THERE A SPECIFIED PROP IN AN OBJECT THAT EXISTS IN ARRAY OF OBJECTS?
function isThereInArrayOfObjects(arr, target, item, options){
  if(n1(options)) {

  }
  var a;
  for(let x in arr){
    var q = arr[x][target];
    q = q.toString().toLowerCase();
    var item = item.toString().toLowerCase();
    if(q === item){

      a = {
        isExist: true,
        more: function(){
          return {
            IndexInArray: parseInt(x), 
            targetObject: arr[x], 
            targetValue: arr[x][target]
          }
        }
      }

      return a;
    } else {
      a = false;
    }
  }
  return a;
}

var arr = [{
  id:1,
  name: 'Ali'
},{
  id: 2,
  name: 'Ahmad'
},{
  id: 3,
  name: 'Reza'
}
];

var q = isThereInArrayOfObjects(arr, 'name', 'ahmad');
