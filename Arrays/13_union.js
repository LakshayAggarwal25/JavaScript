/*
    If there are 2 arrays then their union means the list all the elements in both the arrays and common elements are not repeated.
    Eg. array1 [2,4,6,8,10,12,14,16,18,20] and array2 [4,8,12,16,20,24,28,32,36,40]
    Then their union would be [2,4,6,8,10,12,14,16,18,20,24,28,32,36,40]
*/

let array1 = [2,4,6,8,10,12,14,16,18,20] ;
let array2 = [4,8,12,16,20,24,28,32,36,40];

let exclusiveArray2Elements = array2.filter(function(value){
    if(array1.includes(value)){
        return false;
    }
    else{
        return true;
    }
})

let union = array1.concat(exclusiveArray2Elements);

console.log(union);
/*
    Output
    [
    2,  4,  6,  8, 10, 12,
    14, 16, 18, 20, 24, 28,
    32, 36, 40
    ]
*/


let array2D = [
    [10,50,70,80,90,100,30,60],
    [11,50,75,85,90,100,34,60],
    [10,51,70,80,90,100,30,60],
    [11,50,75,65,92,100,34,60],
    [10,50,70,80,90,100,30,60],
];

let union2 = array2D.reduce(function(previousValue,currentValue){    

    let currentValueExclusiveElements = currentValue.filter(function(value){
        if(previousValue.includes(value)){
            return false;
        }
        else{
            return true;
        }
    });

    previousValue = previousValue.concat(currentValueExclusiveElements);

    return previousValue;
})

console.log(union2);

/*
    Output
    [
        10, 50, 70, 80, 90, 100,
        30, 60, 11, 75, 85,  34,
        51, 65, 92
    ]
*/