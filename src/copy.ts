/**
* @author AliSawari <github.com/AliSawari>
* @param {Object} origin - The original object to be copied from
* @param {Object} toChange - {optional} Apply the changes to the new copy
* @description returns a new object copy from another object
* @license MIT
*/
export default function Copy(origin:object, toChange?:object):object{
  let c:object = {}
  for(let x in origin){
    c[x] = origin[x]
  }
  if(toChange){
    for(let x in toChange){
      c[x] = toChange[x] 
    }
    return c
  } else {
    return c
  }
}

