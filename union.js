"use strict";
function combineUn(a, b) {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combineUn(10, 20));
console.log(combineUn('Mazhar', 'khan'));
