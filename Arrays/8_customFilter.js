/*
    To write a custom filter we need to know the working of a filter i.e : 
    "
    As input it takes a callback function (with value, index)
    It will call the callback multiple times (once for each value)
    For each run of callback, filter will pass value and index to callback
    Callback function will process the value and index 
    Values that pass the condition will be collected in the new Array
    Filter returns that new array
    
    "
*/


// Creating a new filter function for arrays 
Array.prototype.myFilter = function(callback){
    
    // Creating an array to store the results
    let res = [];

    // Getting the original Array
    let originalArray = this;

    // Processing each element in the original array
    for (let index = 0; index < originalArray.length; index++) {
        
        let value = originalArray[index];
        
        // Calling the callback 
        let returnValueOfCallback = callback(value, index, originalArray);

        // Now filter only adds the element whose callback returns a true value
        if(returnValueOfCallback == true){
            res.push(value);    
        }
    }


    // returning the results array
    return res;
}



let array = [10,2,12,21,42,6,7,31,73,23,52,1,93];
let res = array.myFilter(function(value, index){
    if(value%2==0){
        return true;
    }
    else {
        return false;
    }
});



// Using fat arrow function
let res2 = array.myFilter(v => v%2==0);

console.log(array);
console.log(res);
console.log(res2);

/*
    Output
    [
        10,  2, 12, 21, 42, 6,
        7, 31, 73, 23, 52, 1,
        93
    ]
    [ 10, 2, 12, 42, 6, 52 ]
    [ 10, 2, 12, 42, 6, 52 ]

*/