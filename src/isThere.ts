interface isThereObject {
  in(): object|boolean
}

export default function isThere(target:string|string[]):isThereObject{
  let body:isThereObject = {
    in: function(){
      let result = {}
      return result
    }
  }

  return body
}


