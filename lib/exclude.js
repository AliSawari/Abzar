"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const copy_1 = require("./copy");
/**
* @author AliSawari <github.com/AliSawari>
* @param {Object} origin The original object to Exclude properties from
* @param {String[]} toExclude array of the properties you want to be Excluded
* @description Excludes specified properties from the object
* @license MIT
*/
function Exclude(origin, toExclude) {
    let temp = copy_1.default(origin);
    let final = {};
    toExclude.map(a => temp[a] = undefined);
    for (let x in temp) {
        if (temp[x]) {
            final[x] = temp[x];
        }
    }
    return final;
}
exports.default = Exclude;
