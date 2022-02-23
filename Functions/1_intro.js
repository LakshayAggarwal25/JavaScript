/*
    A function can be defined by:

    function functionName(parameter){
        return x;
    }
    This is known as function definition. In JS it also not required define the type of parameters or type to return.
    Now in this function definition parameter and return are not compulsory.

    To run a function we need to call it first :
    
    let returnValue = functionName("ABC");
    This is know as function invocation it will pass "ABC" as the parameter.
    Here returnValue will receive x, since that was returned from the function.

    Suppose if a function doesn't return then ->
    Eg. 
    function temp(x){
        console.log(x+10);
    }
    let returnValue = temp(10);
    In this returnValue we will get undefined since function temp doesn't return anything


    When we don't call a function and just print it will give [Function : functionName]
    Eg:
    
    function functionName(parameter){
        return x;
    }
    console.log(functionName);

    //Output
    [Function : fun]

*/



function fun1(name){
    console.log("Hello",name);
}
fun1("lakshay");
/*
    Output
    Hello Lakshay
*/


let returnValue = fun1("lakshay");
console.log(returnValue);
/*
    Output
    Hello lakshay
    undefined
*/

fun1();
/*
    Output
    undefined
*/

console.log(fun1);
/*
    Output
    [Function: fun1]
*/

console.log(fun1("lakshay"));