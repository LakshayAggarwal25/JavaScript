/*
    Map is a function
    As input it takes a callback function (with value, index)
    It will call the callback multiple times (once for each value)
    For each run of callback, map will pass value and index to callback
    Callback function will process the value and index 
    Single value returned by each run of callback will be collected in a new array
    Map returns that new array
*/


let array1 = [1,4,16,25,36];
let sqrArray = array1.map(function(value, index){
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




let array2 = [
    "lakshay aggarwal",
    "rahul kalkal",
    "rahul sahi",
    "sarthak mishra",
    "tushar malhotra"
];
let emailArray = array2.map(function(value,index){
    let element = "";
    let name = value.split(" ");
    element = name[0] + "." + name[1] + "." + index + "@gmail.com";
    return element;
});
console.log(emailArray);
/* 
    Output
    [
    'lakshay.aggarwal.0@gmail.com',
    'rahul.kalkal.1@gmail.com',
    'rahul.sahi.2@gmail.com',
    'sarthak.mishra.3@gmail.com',
    'tushar.malhotra.4@gmail.com'
    ]
*/




let array3 = [1,2,3,4,3,21,43,1,31,2,1,2,4,214,65,765,4,3];
let oddEvenArrayFirstWay = array3.map(function(value,index){
    if(value%2==0){
        return true;
    }else{
        return false;
    }
});

let oddEvenArraySecondWay = array3.map(value => value%2==0);

console.log(oddEvenArrayFirstWay);
console.log(oddEvenArraySecondWay);

/*
    Output
    [
    false, true,  false, true,
    false, false, false, false,
    false, true,  false, true,
    true,  true,  false, false,
    true,  false
    ]
*/