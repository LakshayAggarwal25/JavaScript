/*
    Reduce is a function
    As input it takes a callback function (with previousValue, currentValue, currentIndex)
    It will call the callback multiple times (once for each value)
    It returns an accumulated result that serves as the previous value for the next call
*/


// Method 1 of calling reduce(where no previousValue is passed initially, so the function takes 0th element as the previousValue and 1st element and currentValue and 1 as currentIndex for the first iteration)
let array1 = [10,20,30,40,50,60];
let type1 = array1.reduce(function(previousValue,currentValue,currentIndex){
    console.log("previousValue -> " + previousValue + ", currentValue -> "+ currentValue + ", currentIndex -> "+ currentIndex);
    return previousValue+currentValue;
})

console.log(type1);

/*
    Here for the first iteration function will take previousValue -> 10, currentValue -> 20 and currentIndex -> 1 and after that function will take previousValue as whatever is returned from the previous call of the function, for eg in this case we return previousValue+currentValue, so the previousValue for second iteration will be 10+20 i.e 30, currentValue -> 30, currentIndex -> 2 and so on.
    Output 
    previousValue -> 10, currentValue -> 20, currentIndex -> 1
    previousValue -> 30, currentValue -> 30, currentIndex -> 2
    previousValue -> 60, currentValue -> 40, currentIndex -> 3
    previousValue -> 100, currentValue -> 50, currentIndex -> 4
    previousValue -> 150, currentValue -> 60, currentIndex -> 5
    210
*/




// Method 2 of calling reduce(where an initial previousValue is passed so the function take 0th element as currentValue and 0 as currentIndex)
let array2 = [10,20,30,40,50,60];
let type2 = array2.reduce(function(previousValue,currentValue,currentIndex){
    console.log("previousValue -> " + previousValue + ", currentValue -> "+ currentValue + ", currentIndex -> "+ currentIndex);
    return previousValue+currentValue;
},1000);    // Here this 1000 is passed as the initial previousValue, i.e for the first iteration function will take 1000 as the previousValue
console.log(type2);
/*
    Output
    previousValue -> 1000, currentValue -> 10, currentIndex -> 0
    previousValue -> 1010, currentValue -> 20, currentIndex -> 1
    previousValue -> 1030, currentValue -> 30, currentIndex -> 2
    previousValue -> 1060, currentValue -> 40, currentIndex -> 3
    previousValue -> 1100, currentValue -> 50, currentIndex -> 4
    previousValue -> 1150, currentValue -> 60, currentIndex -> 5
    1210
*/




let twoDArray1 = [
    [10,20,30],
    [40],
    [50,60],
    [70,80,90,100]
];
let oneDArrayFromTwoD = twoDArray1.reduce(function(previousValue,currentValue){
    let smallJoin = previousValue.concat(currentValue); // Concat joins two one dimensional arrays
    return smallJoin;
},[]);  // Here we pass empty one dimensional array as the Previous value for the first iteration

console.log(oneDArrayFromTwoD);
/*

    In this
    1st iteration ==> PV : [], CV : [10,20,30],                         => joined : [10,20,30]
    
    Now we return joined, so for the next call function will take joined as previousValue
    
    2nd iteration ==> PV : [10,20,30],          CV : [40],              => joined : [10,20,30,40] 
    3rd iteration ==> PV : [10,20,30,40],       CV : [50,60],           => joined : [10,20,30,40,50,60] 
    4th iteration ==> PV : [10,20,30,40,50,60], CV : [70,80,90,100],    => joined : [10,20,30,40,50,60,70,80,90,100] 
    
    function returns [10,20,30,40,50,60,70,80,90,100]

    Output
    [
        10, 20, 30, 40,  50,
        60, 70, 80, 90, 100
    ]
*/