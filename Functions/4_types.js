/*
    Types of functions,
    Important Questions
*/

/* 
    1. Function Definition
*/
function function_definition(){
    console.log("function definition");
}

function_definition();
/*
    Output
    function definition
*/




/*
    2. Function Expression 
    We can assign a variable to a function as soon as it is defined, this is known as function expression.
    Eg. 
    let x = function y(){
        // body of the function
    }
    Now, we can only call the function by the variable that it is assigned to 
    y(); -> Will not work, it will reference error y is not defined

    So, technically we also do not need to provide function with a name here
    Eg.
    let x = function(){
        //body of the function
    }
    This will work similar to the function written above and in both the cases we can only call the function with x().

    Major difference is that this function cannot be accessed until after expression line, because till then x will contain undefined.
    
    Second code is also known as anonymous function, since we have not provided any name to it.
*/
let fun = function (){
    console.log("Anonymous function expression");
}
fun();
/*
    Output
    Anonymous function expression
*/




/*
    3. Immediately Invoked Function Expression (IIFE)
    Sometimes, there are some functions that we need to run as soon as they are created so we do that with the help of iife, now IIFE is defined as
    Eg.

    (function functionName(){
        // body of the function 
    })(); 
    
    This will run the function as soon as it is created. Now we can not call this function again, if we do so we will get an reference error functionName is not defined. So here IIFE's are also defined anonymously 
*/
(function(){
    console.log("This is known as IIFE");
})();
/*
    Output
    This is known as IIFE
*/