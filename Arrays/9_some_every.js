/*
    Some is function which takes a callback function as input 
    It returns true as soon as the condition of the callback is satisfied 
    i.e if array is [5,7,9,11,15,13,10,31,21,24,54,100];
    And condition inside the callback is if(value%2==0){return true}, then as soon as the callback is on 10 i.e first even number in this array it will return true.
    In other words some will return true even if one element satisfies the condition inside the callback.


    Whereas Every will return true only when every element satisfies the condition inside the callback. Else it will return false

*/


let array1 = [5,7,9,11,15,13,10,31,21,24,54,100];
let res1 = array1.some(function(value){
    console.log(value);
    if(value%2==0){
        return true;
    }
    else{
        return false;
    }
}); 

console.log(res1);

/*
    Output
    5
    7
    9
    11
    15
    13
    10
    true
*/



let array2 = [5,7,9,11,15,13,10,31,21,24,54,100];
let res2 = array2.every(function(value){
    console.log(value);
    if(value%2==0){
        return true;
    }
    else{
        return false;
    }
}); 

console.log(res2);
/*
    Since every returns true only when every element satisfies the condition inside callback. This is return a false on the very first element as it does not satisfy the condition.
    
    Output
    5
    false
*/



let array3 = [2,22,222,12,152,134,106,3188,2142,24,54,100];
let res3 = array3.every(function(value){
    console.log(value);
    if(value%2==0){
        return true;
    }
    else{
        return false;
    }
}); 

console.log(res3);

/*
    Output
    2
    22
    222
    12
    152
    134
    106
    3188
    2142
    24
    54
    100
    true
*/