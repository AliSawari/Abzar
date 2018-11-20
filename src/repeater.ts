/**
* @author AliSawari <github.com/AliSawari>
* @param {Number} n how many times to repeat the code
* @param {Function} toBeCalled function which contains the code to run 
* @description repeats a code in a specified times to
* @license MIT
*/

export default function repeater(n:number, toBeCalled:Function):void{
	var q = n;
	if(q){
		toBeCalled();
		console.log("RUNS: ", q);
		q--;
		return repeater(q, toBeCalled);
	} else {
		return console.log("-- BOTTOM --");
	}	
}