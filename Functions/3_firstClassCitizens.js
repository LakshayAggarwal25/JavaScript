/*
    Whenever we pass something to function then the address of the parameters are passed to the function.
    Only int and boolean are passed as absolute values. 

    Functions are also first class citizens in JS, i.e functions are treated similar to variables, hence they can be passed to other functions. We can also assign variables to functions. We can also return a function from another function.
*/
function fun(parameter){
    console.log("Parameter -> ", parameter);
}


fun(1);
/*
    Since this is an int it will passed as value
    Output
    Parameter ->  1
*/

fun(true);
/*
    Since this is a boolean it will passed as value
    Output
    Parameter ->  true
*/


let str= "strings";
fun(str);
/*
    Since strings can be really large they are passed as reference
    Output
    Parameter -> strings
*/

let arr =[1,2,3,4,5];
fun(arr);
/*
    Passed as reference
    Output
    Parameter ->  [ 1, 2, 3, 4, 5 ]

*/

let obj = {name : "Lakshay ", age :21};
fun(obj);
/*
    Passed as reference
    Output
    Parameter ->  { name: 'Lakshay ', age: 21 }
*/


function fun2(){
    console.log("Function 2");
}
fun(fun2);
/*
    Passed as reference
    Output
    Parameter ->  [Function: fun2]
*/

let fun3 = function(){
    console.log("Function 3");
}
fun3();
/*
    Output
    Function 3
*/