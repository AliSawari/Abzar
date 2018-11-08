function repeater(n, toBeCalled) {
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

console.log("-- TOP --");

repeater(100, () => {
	console.log();
});