/*
    The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    For eg. If we have an multi-dimensional array : [10,20,[30,40,[50],60],70,80,[90,100]] and we use flat on it(without passing anything) then it will return [10,20,30,40,[50],60,70,80,90,100].
    We can also pass the depth in flat() to specify upto which level we need to concatenate. By default 1 is passed.
    We can pass Infinity in flat() if we dont know the array depth and need to flatten it.
*/

let array1 = [10,20,[30,40,[50],60],70,80,[90,100,[110,[120,130,140],150]]];
let res1 = array1.flat();
console.log(res1);
/*
    Output
    [
        10,
        20,
        30,
        40,
        [ 50 ],
        60,
        70,
        80,
        90,
        100,
        [ 110, [ 120, 130, 140 ], 150 ]
    ]
*/






let res2 = array1.flat(2);
console.log(res2);
/*
    Output
    [
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100,
        110,
        [ 120, 130, 140 ],
        150
    ]
*/





let res3 = array1.flat(Infinity);
console.log(res3);
/*
    Output
    [
        10,  20,  30,  40,  50,  60,
        70,  80,  90, 100, 110, 120,
        130, 140, 150
    ]
*/




/* 
    Custom Flat 
    Logic(Page 9) -> https://github.com/tamanna-verma/WebDevelopmentNotes/blob/main/FairNotes%20Day%2091%2018Dec%20Dev35.pdf
*/
Array.prototype.myFlat = function(depth = 1){
    let result = [];
    let originalArray = this;
    customFlat(originalArray,depth,result);
    return result;
}

function customFlat(node,depth,result){

    if(Array.isArray(node)){
        if(depth>0){
            for (let index = 0; index < node.length; index++) {
                customFlat(node[index],depth-1,result);
            }
        }
        else{
            for (let index = 0; index < node.length; index++) {
                result.push(node[index]);   
            }
        }
    }
    else{
        result.push(node);
    }
}

let resultOfCustomFlat = array1.myFlat();
console.log(resultOfCustomFlat);
/*
Output
    [
        10,
        20,
        30,
        40,
        [ 50 ],
        60,
        70,
        80,
        90,
        100,
        [ 110, [ 120, 130, 140 ], 150 ]
    ]
*/

let resultOfCustomFlat2 = array1.myFlat(Infinity);
console.log(resultOfCustomFlat2);
/*
    Output
    [
        10,  20,  30,  40,  50,  60,
        70,  80,  90, 100, 110, 120,
        130, 140, 150
    ]
*/