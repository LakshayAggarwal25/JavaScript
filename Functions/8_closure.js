/*
    Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned(i.e it has been removed from the call stack).
*/


function outer(first) {
    let a = 10;
    return function inner() {
        return first*a;
    }
}
let returnValueOfOuter = outer(100);
let returnValueOfInner = returnValueOfOuter();
console.log(returnValueOfInner);

/*

    Output
    1000


    How this code works ?
    When we call the function in line no.12 and pass 100 as a parameter, then an execution context will be created in the call stack. And now function inner will be created inside heap and its address will be returned. Then the execution context of the function outer will be destroyed but inner function will have access to all variables and parameters of outer function in its closure. And whenever inner function is called we can use the values contained inside its closure.
*/