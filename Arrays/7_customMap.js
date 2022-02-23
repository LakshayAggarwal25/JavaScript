/* 
    Using Abstraction here, i.e for the time being only few things will be clear and rest will come with time

    Now to add any functions related to arrays i.e array can use them we use Array.prototype.functionName = function(){  body to the function } . This will add the function.
    
    Some points for custom functions 
    ->  Now to we get the original array using the keyword "this" .
    ->  Callback is not same as recursion.


    To write a custom map we need to know the working of a map i.e : 
    "
    As input it takes a callback function (with value, index)
    It will call the callback multiple times (once for each value)
    For each run of callback, map will pass value and index to callback
    Callback function will process the value and index 
    Single value returned by each run of callback will be collected in a new array
    Map returns that new array
    
    "
*/



// Creating a custom map that can be used for arrays
Array.prototype.myMap = function(callback){


    // Since map returns a new array we need to create a results array
    let res = [];

    // We get the original array(The array that the function has been called upon) in "this". {ABSTRACTION}
    let originalArray = this;

    // Map process each value of the array so we loop over every item in the original array
    for (let i = 0; i < originalArray.length; i++) {

        let value = originalArray[i];
        
        // Map calls the callback for each value so we call the callback function here with value, index and original array
        let returnValueOfCallback = callback(value,i,originalArray); // This is not a recursive call {ABSTRACTION}

        // Now whatever callback function returns we insert it inside the new array 
        res.push(returnValueOfCallback);
    }

    // Now we return the new array created by map
    return res;
};



let array1 = [1,4,16,25,36];
let sqrArray = array1.myMap(function(value, index){
    console.log(value + " -> "+ index);
    return value*value;
});
console.log(sqrArray);

/*
    Output
    1 -> 0
    4 -> 1
    16 -> 2
    25 -> 3
    36 -> 4
    [ 1, 16, 256, 625, 1296 ]
*/