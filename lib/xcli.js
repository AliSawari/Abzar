const {createInterface} = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const commands = ['echo','help','exit','ls'];

function execute(cmd) {
	switch(cmd) {
		case 'echo':
			return function(arg){
				return arg;
			}
		case 'help':
			return function(){
				return "Commands available:\necho <expression> - outputs a text\nexit - exits the program";
			}
		case 'exit':
		 return function(){
		 		console.log("GoodBye!");
		 		return process.exit(0);
		 }
		case 'ls':
			return function(){
				
			}
	}
}

function argGen(ans) {
	var a = ans.split(' ');
	a.splice(0,1);
	var x = a.toString().replace(/,/gi,' ');
	return x;
}

function main(a=null) {
	if(a){
		console.log(a);
		main();
	} else {
		var user = process.env.USER || process.env.USERDOMAIN;
		rl.question(`$ ${user} Xcli>`, (answer) => {
			var o;
			var args = argGen(answer);
			var ansArr = answer.split(' ');
			for(let x in commands) {
				if(commands[x] === ansArr[0]) {
					let f = execute(ansArr[0]);
					o = f(args);
					return main(o);
				}
			}
			if(!o) return main("Command Not Found!");
		});
	}
}

main();
