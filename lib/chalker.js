"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
/**
* @author AliSawari <github.com/AliSawari>
* @description This module is just a syntactic sugar for the module chalk
* @license MIT
* @param {String} arguments input chalk properties here
* @example chalker('red','bgWhite')('Hello', 'World')
**/
function chalker() {
    // let args:string[] = arguments
    let chain = ['chalk'];
    let args = [];
    for (let x in arguments) {
        args.push(arguments[x]);
    }
    args.map((a) => {
        if (chalk[a]) {
            chain.push(a);
        }
        else {
            console.log(chalk['yellow'](`'${a}' is not defined in chalk`));
        }
    });
    let newChain = chain.join('.');
    /**@param {String} arguments input the output text here*/
    return function () {
        let kargs = [];
        for (let x in arguments) {
            kargs.push(arguments[x]);
        }
        let pet = '(';
        kargs.map((k, d) => {
            if (d === kargs.length) {
                pet += `'${k}'`;
            }
            else {
                pet += `'${k}',`;
            }
        });
        newChain += pet + ')';
        return eval(newChain);
    };
}
exports.default = chalker;
