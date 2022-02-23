/*
    call is method on every function that can be used to change the value of "this" that is automatically to a function.
*/

let obj1 = {
    fun : function(){
        console.log(this.name,this.age);
        console.log(arguments);
    },
    name : "Lakshay",
    age : 21
}

obj1.fun("a","b","c");
/*
    Output
    Lakshay 21
    [Arguments] { '0': 'a', '1': 'b', '2': 'c' }    

    Since here address of obj1 is passed as "this" hence, when we do "this.name" it means obj1.name and we get "Lakshay" and so on.
    Now by using call method we can override the default "this"
    Eg:
*/


let obj2 = {
    name : "Aggarwal",
    age : 0
}

obj1.fun.call(obj2,"a","b","c");
/*
    Output
    Aggarwal 0
    [Arguments] { '0': 'a', '1': 'b', '2': 'c' }
    By using call method on function the first object that is passed will be used as "this" for the function. So, here in the function when we do "this.name" it means obj2.name since its address was passed for "this" and so on. And we can also pass more arguments after the obj in call method. 
    We can also do the same thing using apply method, it also works in a similar way only difference is that in apply method arguments after the obj needs to be an array rather than a list.
    Eg:
*/


obj1.fun.apply(obj2,["a","b","c"]);
/*
    Aggarwal 0
    [Arguments] { '0': 'a', '1': 'b', '2': 'c' }
*/


/*
    bind method : It is used to create a bound function, that warps the original function. When we call this bound function it result in execution of the wrapped function. In simple terms, this is very similar to "call method" but instead of executing function at call only bind returns that function which can contain more arguments.
 */


let boundFn = obj1.fun.bind(obj2,"a","b","c");
boundFn("d","e");

/*
    Output
    Aggarwal 0
    [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e' }
*/