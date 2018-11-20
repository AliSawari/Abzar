"use strict";
/**
* @author AliSawari <github.com/AliSawari>
* @param {Number} n how many times to repeat the code
* @param {Function} toBeCalled function which contains the code to run
* @description repeats a code in a specified times to
* @license MIT
*/
Object.defineProperty(exports, "__esModule", { value: true });
function repeater(n, toBeCalled) {
    var q = n;
    if (q) {
        toBeCalled();
        console.log("RUNS: ", q);
        q--;
        return repeater(q, toBeCalled);
    }
    else {
        return console.log("-- BOTTOM --");
    }
}
exports.default = repeater;
