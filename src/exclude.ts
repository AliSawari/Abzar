import Copy from "./copy"

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