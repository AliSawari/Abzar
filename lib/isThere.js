"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isThere(target) {
    let body = {
        in: function () {
            let result = {};
            return result;
        }
    };
    return body;
}
exports.default = isThere;
