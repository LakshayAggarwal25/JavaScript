/*
    Find is function that takes a callback function as input.
    It returns the first element that passes the condition of the callback, else it returns undefined. 
    
    FindIndex is function that takes a callback function as input.
    It returns the first index where the condition of the callback is satisfied, else it returns -1.
*/


let array1 = [10,20,30,8,40,50,60,70,8];
let res1 = array1.find(function(value){
    console.log(value);
    if(value == 8){
        return true;
    }else{
        return false;
    }
})

console.log(res1);

/*
    Output
    10
    20
    30
    8
    8
*/





let res2 = array1.find(function(value){
    console.log(value);
    if(value == 800){
        return true;
    }else{
        return false;
    }
})

console.log(res2);

/*
    Output
    10
    20
    30
    8
    40
    50
    60
    70
    8
    undefined
*/





let res3 = array1.findIndex(function(value){
    console.log(value);
    if(value == 8){
        return true;
    }else{
        return false;
    }
})

console.log(res3);
/*
    Output
    10
    20
    30
    8
    3
*/





let res4 = array1.findIndex(function(value){
    console.log(value);
    if(value == 800){
        return true;
    }else{
        return false;
    }
})

console.log(res4);
/*
    Output
    10
    20
    30
    8
    40
    50
    60
    70
    8
    -1
*/

