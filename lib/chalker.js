const chalk = require('chalk');

function chalker(){
  var args = arguments;
  var ret = ['chalk'];
  for(let x in args){
    if(chalk[args[x]]){
      ret.push(args[x]);
    } else {
      console.log(chalk.yellow(`'${args[x]}' is not defined in chalk`));
    }
  }
  ret = ret.join('.');
  return function (exp){
    ret += `("${exp}")`;
    return eval(ret);
  }
}

module.exports = chalker;
