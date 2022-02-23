/*
    ...  => this is known as spread operator, when used with an array it converts array into a list.
    Eg:
*/

let arr = ["a","b","c","d"];
console.log(arr);
console.log(...arr);
/*
    Output
    [ 'a', 'b', 'c', 'd' ]          // -> This is an array
    a b c d                         // -> This is a list
*/

let obj = {
    fun1 : function(){
        console.log(this.name, arguments);
    },
    name : "Lakshay"
};
let obj2 = {
    name :"Aggarwal"
};



/*  CUSTOM CALL */
Function.prototype.myCall = function(){

    // We get the address of the function to be called in "this"
    let originalFunctionCall = this;

    // We get the obj which we need to overwrite as "this" in the function call as the 1st parameter. 
    let newThis = arguments[0];

    // After the obj, we get all the parameters that we need to pass so make a new array of those parameters
    let argumentsPassedInCall = Array.from(arguments).slice(1);

    // We create a new function on the obj that we need to overwrite as "this" as pass the address of the original function
    newThis.tempFun = originalFunctionCall;

    // We make a call on the function with arguments 
    newThis.tempFun(...argumentsPassedInCall);

    // Now we also need to delete the function property that we created inside the obj 
    delete newThis.tempFun;
    return;
}

obj.fun1.call(obj2,"a","b","c","d");            //  Output -> Aggarwal [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
obj.fun1.myCall(obj2,"a","b","c","d");          //  Output -> Aggarwal [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }


/* Custom Apply */
Function.prototype.myApply = function(){
    
    // Works very similar to custom call only difference is that in apply method we already get an array of parameter instead of list so we dont need to convert that

    let originalFunctionCall = this;
    let newThis = arguments[0];
    let newArguments = arguments[1];

    newThis.tempFn = originalFunctionCall;
    newThis.tempFn(...newArguments);
    delete newThis.tempFn;
    return;
}

obj.fun1.apply(obj2,["a","b","c","d"]);         //  Output -> Aggarwal [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
obj.fun1.myApply(obj2,["a","b","c","d"]);       //  Output -> Aggarwal [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

/* Custom Bind */
Function.prototype.myBind = function(){
    let originalFunctionCall = this;
    let newThis = arguments[0];
    let argumentsPassedInCall = Array.from(arguments).slice(1);

    function boundFun() {
        let argumentsPassedToBoundFunction = Array.from(arguments);
        let totalArgs = argumentsPassedToBoundFunction.concat(argumentsPassedInCall);
        originalFunctionCall.call(newThis,...totalArgs);
        return;
    }
 
    return boundFun;
}

let actualBound = obj.fun1.bind(obj2,"a","b");
actualBound("c","d");                               // Output -> Aggarwal [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
let myBound = obj.fun1.myBind(obj2,"a","b");
myBound("c","d");                                   // Output -> Aggarwal [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
