/**
* @param {Array} arr - the array which should be paginated.
* @param {Number} pageSize - the size of each page
* @param {Number} next - the page number, use this if you want to get a specific page.
* @param {Function} cb - the callback function
*/

function Paginator(arr, pageSize, next, cb){
  var pages = 0;
  var indexer = {};
  for(let x in arr){
    if(x % pageSize == 0){
      pages = pages + 1;
    }
  }

  if(pages>0){
    var counter = 0;
    for(let x=1;x<=pages;x++){
      if(x===1){
        indexer[`page${x}`] = arr.slice(0, pageSize);
        counter = pageSize;
      } else {
        indexer[`page${x}`] = arr.slice(counter, counter + pageSize);
        counter = counter + pageSize;
      }
    }
  } else {
    indexer['page1'] = arr;
  }

  if(next){
    cb(indexer[`page${next}`], indexer);
  } else {
    cb(indexer);
  }
}

module.exports = Paginator;
