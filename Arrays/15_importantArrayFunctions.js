/*
    Array.isArray() returns true if the passed element is an array and returns false if it not an array.
*/

let array = [10,20,30,40,50,60,70,90,12,124,421,53];
let a = 2;
let b = "String";

console.log(Array.isArray(array));  // true
console.log(Array.isArray(a));      // false
console.log(Array.isArray(b));      // false


/*
    Ways to construct an Array
*/

// Simple way to create an array -> pass elements in square brackets
let way1 = [10,20,30];
console.log(way1);  // [ 10, 20, 30 ]


// Other way to create an array -> Use Array.of(), this will create an array of elements passed inside
let way2 = Array.of(1,2,3,4,5);
console.log(way2);  // [ 1, 2, 3, 4, 5 ]

//  Another way to create an array -> Use Array.from(), this will create an array from any array like object(for eg. String, NodeList, Objects)
let way3 = Array.from(b);
console.log(way3);  // [ 'S', 't', 'r', 'i', 'n', 'g' ]



/*
    Bulk Update Array
    Method 1 : fill() -> it takes 3 parameters (value, startingIndex(inclusive), lastIndex(exclusive))
    Method 2 : copyWithin() -> it takes 3 parameters (indexToFillValues, startIndexOfCopyValues(inclusive), endIndexOfCopyValues(exclusive))
*/

let array1 = [1,2,3,4,5,6,7,8,9,100,22];
array1.fill(99,2,4);
console.log(array1);
/*
    Output
    [
        1, 2, 99, 99,   5,
        6, 7,  8,  9, 100,
        22
    ]
*/

let array2 = [1,2,3,4,5,6,7,8,9,100,22];
array2.copyWithin(0,7,9);
console.log(array2);
/*
    Output
    [
        8, 9, 3, 4,   5,
        6, 7, 8, 9, 100,
        22
    ]
*/