/*
    To write a custom reduce we need to know the working of a reduce i.e : 
    "
    As input it takes a callback function (with previousValue, currentValue, currentIndex)
    It will call the callback multiple times (once for each value)
    It returns an accumulated result that serves as the previous value for the next call

    Method 1 of calling reduce(where no previousValue is passed initially, so the function takes 0th element as the previousValue and 1st element and currentValue and 1 as currentIndex for the first iteration)

    Method 2 of calling reduce(where an initial previousValue is passed so the function take 0th element as currentValue and 0 as currentIndex)
    
    "
*/


Array.prototype.myReduce = function(callback, initialPreviousValue){

    // Reduce returns accumulated result which serves as the previous value for the next call
    let previousValue ;


    let originalArray = this;


    // Since there are 2 ways to call reduce we need to define both the ways in our custom reduce as well
    if(initialPreviousValue == undefined){
        
        // If initially there is no previous value passed we use the 0th element as the previous Value
        previousValue = originalArray[0];
        
        // Loop shall start from 1 as we have already used 0th element as previous value
        for (let index = 1; index < originalArray.length; index++) {
            let  currentValue = array[index];
            let returnOfCallback = callback(previousValue,currentValue,index,originalArray);
            
            // Now return of this callback function will serve as the previous value for the next callback so
            previousValue = returnOfCallback;
        }
    }
    else{

        // If initially a previous value is passed in the function call we use it
        previousValue = initialPreviousValue;


        // Here loop start from o only 
        for (let index = 0; index < originalArray.length; index++) {
            let currentValue = originalArray[index];
            let returnOfCallback = callback(previousValue,currentValue,index,originalArray);

            previousValue = returnOfCallback;
        }

    }


    // Returning the accumulated result
    return previousValue;
}






// Flatten a 2-D array 
let twoDArray = [
    [10,20,30],
    [40],
    [50,60],
    [70,80,90,100]
];

let flattenedArray = twoDArray.myReduce(function(previousValue,currentValue){
    let res = previousValue.concat(currentValue); // Concat joins two one dimensional arrays
    return res;
},[]); /// Here we pass empty one dimensional array as the Previous value for the first iteration

console.log(twoDArray);
console.log(flattenedArray);

/*

    In this
    1st iteration ==> PV : [], CV : [10,20,30],                         => res : [10,20,30]
    
    Now we return res, so for the next call function will take res as previousValue
    
    2nd iteration ==> PV : [10,20,30],          CV : [40],              => res : [10,20,30,40] 
    3rd iteration ==> PV : [10,20,30,40],       CV : [50,60],           => res : [10,20,30,40,50,60] 
    4th iteration ==> PV : [10,20,30,40,50,60], CV : [70,80,90,100],    => res : [10,20,30,40,50,60,70,80,90,100] 
    
    function returns [10,20,30,40,50,60,70,80,90,100]

    Output
    [ [ 10, 20 ], [ 30 ], [ 40, 50, 60 ], [ 70, 80, 90, 100 ] ]
    [
        10, 20, 30, 40,  50,
        60, 70, 80, 90, 100
    ]
*/