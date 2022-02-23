
/*
    var
    -> it has function scope
    -> can be redeclared
    -> can be used before initialization

    let 
    -> it has a block scope
    -> can not redeclared
    -> it cannot be accessed before initialization => this is know as temporal dead zone
*/




console.log(a);
var a;
a = 10;
var a = 100;
console.log(a);
/*
    Output
    undefined
    100
*/




// console.log(x);
let x = 10;
x = 100;
// let x = 4;
console.log(x);


/*
    Output
    100
*/
