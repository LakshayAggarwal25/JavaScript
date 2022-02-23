/*
    *IMP*   In JS if there is something missing or we didn't pass it or we try access out of bound elements in array, then we get it as undefined
    In JS, when calling a function we can pass as many as parameter as we want, for eg.

    function fun(a,b){
        console.log(a,b);
    }

    fun(1,2);
    fun(1);
    fun();

    Now, function fun has only 2 parameter in its definition but we can pass 1,2,3, as many arguments as we want.
    If we pass, less arguments to the function, then it takes rest of the parameters as undefined. Here, when we call fun(1) it will take b as undefined. Similarly when call fun() -> it will take both a and b as undefined.

    *IMP*
    There is an array like object that is automatically passed whenever we call a function that is know as -arguments-, it has indexing, length property like array but it is actually not an array.
    For eg.
    function fun1(a){
        // Body of the function
    }

    fun1("A","B","C")
    
    Here, when we call fun1, inside fun1 function we will get an arguments array like object that will contain 
    "A" at arguments[0]
    "B" at arguments[1]
    "C" at arguments[2]
    
*/



function fun(a,b){
    console.log(a,b);
}

fun(1,2);
fun(1);
fun();

/*
    Output
    1 2
    1 undefined 
    undefined undefined
*/


function fun1(){
    console.log(arguments);
    let argumentsArray = Array.from(arguments);
    argumentsArray.forEach(ele => {
        console.log(ele);
    });
}

fun1("a");
/*
    Output
    [Arguments] { '0': 'a' }
    a
*/

fun1("a","b");
/*
    Output
    [Arguments] { '0': 'a', '1': 'b' }
    a
    b
*/


fun1(1,2,3);
/*
    Output
    [Arguments] { '0': 1, '1': 2, '2': 3 }
    1
    2
    3
*/


fun1("a","bcd",100);
/*
    Output
    [Arguments] { '0': 'a', '1': 'bcd', '2': 100 }
    a
    bcd
    100
*/
