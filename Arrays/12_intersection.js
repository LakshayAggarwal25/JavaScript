/*
    If there are 2 arrays then their intersection means the list "only" common elements.
    Eg. array1 [2,4,6,8,10,12,14,16,18,20] and array2 [4,8,12,16,20,24,28,32,36,40]
    Then their intersection would include only common elements i.e 4,8,12,16,20
    
    Includes functions ->  This function takes a value/number as input and returns true if that element exists in the array and return false if doesn't exist
*/

let array1 = [2,4,6,8,10,12,14,16,18,20] ;
let array2 = [4,8,12,16,20,24,28,32,36,40];

let intersection = array1.filter(function(value){
    if(array2.includes(value)){
        return true;
    }else{
        return false;
    }
});

console.log(intersection);


/*
    Output
    [ 4, 8, 12, 16, 20 ]
*/





// Find the intersection of the arrays inside a 2d array
let array2D = [
    [10,50,70,80,90,100,30,60],
    [11,50,75,85,90,100,34,60],
    [10,51,70,80,90,100,30,60],
    [11,50,75,65,92,100,34,60],
    [10,50,70,80,90,100,30,60],
];


let res = array2D.reduce(function(previousValue,currentValue){
    
    let intersectionOfTwoArrays =  previousValue.filter(function(value){
        if(currentValue.includes(value)){
            return true;
        }else{
            return false;
        }
    })
    return intersectionOfTwoArrays;
});

console.log(res);

/*
    Here we use reduce since we need to process each array individually 
    For the first iteration we get 0th element of the 2d array in the previous value and 1st array in current value
    Now, here 0th element is an array in itself of use a filter on it to get its intersection with 1st element.
    And now we return this intersection as the previous value for the next call.

    1st iteration => pv : [10,50,70,80,90,100,30,60],   cv : [11,50,75,85,90,100,34,60],  ==> intersection : [50,90,100,60]
    2nd iteration => pv : [50,90,100,60],               cv : [10,51,70,80,90,100,30,60],  ==> intersection : [90,100,60]
    3nd iteration => pv : [90,100,60],                  cv : [11,50,75,65,92,100,34,60],  ==> intersection : [100,60]
    4th iteration => pv : [100,60],                     cv : [10,50,70,80,90,100,30,60],  ==> intersection : [100,60]

    Hence we get the output : 100,60


    Output
    [ 100, 60 ]
*/