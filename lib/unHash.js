const {createHmac} = require('crypto');
const fs = require('fs');
const readline = require('readline');
var db = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function hash(text){
	var a = createHmac('sha256', text).digest('hex');
	return a;
}


rl.question("Target ", (a) => {

	rl.question("WordList ", (b) => {
		var c = `${__dirname}/${b}`;
		fs.readFileSync(c)
		.toString()
		.split('\n')
		.map(i => db.push(i.replace(/\r/gi,'')));
		var d = unHash(a, db);
		console.log(d);
		rl.close();
	});

});



function unHash(targetHash, wordlist){
	var b;
	for(let w in wordlist){
		var a = hash(wordlist[w]);
		if(targetHash === a){
			b = {
				found: true,
				target: wordlist[w]
			};
			return b;
		} else {
			b = {
				found: false
			}
		}
	}
	return b;
}
