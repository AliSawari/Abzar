/**
* @author AliSawari <github.com/AliSawari>
* @description This is a small Paginator function 
* @license MIT
* @param {Array} arr the array that you want to paginate
* @param {Number} pageSize in what size you want your list paginated? 
* @example Paginator([1,2,3], 2).then(x => )
**/
export default function Paginator(arr:any[], pageSize:number){
  return new Promise((resolve, reject) => {
    var pages = 0;
    var indexer = {};

    arr.map((x,d) => {
      if(d % pageSize == 0){
        pages = pages + 1;
      }
    })

    if(pages>0){
      var counter = 0;
      indexer[`page${1}`] = arr.slice(0, pageSize);
      counter = pageSize;
      for(let x=2;x<=pages;x++){
          indexer[`page${x}`] = arr.slice(counter, counter + pageSize);
          counter = counter + pageSize;
      }
    } else {
      indexer['page1'] = arr;
    }

    resolve(indexer)
  });
}
