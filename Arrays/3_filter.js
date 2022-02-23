/*
    Filter is a function
    As input it takes a callback function (with value, index)
    It will call the callback multiple times (once for each value)
    For each run of callback, filter will pass value and index to callback
    Callback function will process the value and index 
    Values that pass the condition will be collected in the new Array
    Filter returns that new array

    Difference b/w map and filter is that filter reduces the size of the array and map does not reduce the size of the array
    
*/

let array1 = [10,15,20,25,30,35,40,45,50,55];
let evenElementArray1 = array1.filter(function(value,index){
    if(value%2==0){
        return true;
    }else{
        return false;
    }
});

let evenElementArray2 = array1.filter(value => value%2==0);

console.log("Method 1 : " + evenElementArray1);
console.log("Method 2 : " + evenElementArray2);
/* 
    Output
    Method 1 : 10,20,30,40,50
    Method 2 : 10,20,30,40,50
*/




let array2 = [
    {name : "A", age : 21, gender : "M"},
    {name : "B", age : 81, gender : "M"},
    {name : "C", age : 15, gender : "F"},
    {name : "D", age : 27, gender : "F"},
    {name : "E", age : 61, gender : "F"},
    {name : "G", age : 57, gender : "M"},
    {name : "H", age : 46, gender : "F"},
    {name : "I", age : 24, gender : "M"},
    {name : "J", age : 31, gender : "F"},
];

// Find out names of females having age > 25

let solArray1 = array2.filter(function(value){
    if(value.gender == "F" && value.age>25){
        return true;
    }else{
        return false;
    }
}).map(function(value){
    return value.name;
});


let solArray2 = array2.filter(value => value.gender =="F" && value.age > 25).map(value => value.name);

console.log("Method 1 : " + solArray1);
console.log("Method 2 : " + solArray2);
/* 
    Output
    Method 1 : D,E,H,J
    Method 2 : D,E,H,J
*/
