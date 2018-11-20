import Copy from './copy'

/**
* @author AliSawari <github.com/AliSawari>
* @param {Object} origin The original object to Exclude properties from
* @param {String[]} toExclude array of the properties you want to be Excluded
* @description Excludes specified properties from the object
* @license MIT
*/

export default function Exclude(origin:object, toExclude:string[]):object{
  let temp = Copy(origin)
  let final = {}
  toExclude.map(a => temp[a] = undefined)
  for(let x in temp){
    if(temp[x]){
      final[x] = temp[x]
    }
  }

  return final
}