/* 
    Arrays are indexed as follows :
        0   1   2   3   4   5   6   7   8   9
Array:  10  20  30  40  50  60  70  80  90  100
       -10  -9  -8  -7  -6  -5  -4  -3  -2  -1
    
    Slice is function which returns a subarray.
    It takes starting and ending of the subarray as input 
    Subarray will the have the elements staring from the start index upto to the ending index
    i.e it includes the element at the start index and does not include the element at the end index
    If we pass only one number then it returns subarray starting from that index upto last element
    If we pass nothing in the it will clone the array, but this is only suitable for numbers or character as it creates a shallow copy
    
    Let an array of objects (P) be cloned using slice, lets say (Q), then if any changes are made in objects of Q then those changes will also be reflected on the objects inside P and vice versa. This is known as a shallow copy.
*/





let array1 = [10,20,30,40,50,60,70,80,90,100];
subArray1 = array1.slice(2,8);
console.log(subArray1);
/*
    Output 
    [ 30, 40, 50, 60, 70, 80 ]
*/



subArray2 = array1.slice(-3,-1);
console.log(subArray2);
/*
    Output 
    [ 80, 90 ]
*/



subArray3 = array1.slice(-3);
console.log(subArray3);
/*
    Output 
    [ 80, 90, 100 ]
*/



subArray4 = array1.slice(8);
console.log(subArray4);
/*
    Output 
    [ 90, 100 ]
*/



subArray5 = array1.slice();
console.log(subArray5);
/*
    Output
    [
    10, 20, 30, 40,  50,
    60, 70, 80, 90, 100
    ]
*/

let arrayOfObjs = [
    {   name : "A",
        age : 1
    },
    {
        name : "B",
        age : 2
    },
    {
        name : "C",
        age : 3
    },
    {
        name : "D",
        age : 4
    },
    {
        name : "E",
        age : 5
    },
    {
        name : "F",
        age : 6
    }
]

let clonedArray = arrayOfObjs.slice();
console.log(arrayOfObjs);
console.log(clonedArray);
/*
    Output
    [
        { name: 'A', age: 1 },
        { name: 'B', age: 2 },
        { name: 'C', age: 3 },
        { name: 'D', age: 4 },
        { name: 'E', age: 5 },
        { name: 'F', age: 6 }
    ]
    [
        { name: 'A', age: 1 },
        { name: 'B', age: 2 },
        { name: 'C', age: 3 },
        { name: 'D', age: 4 },
        { name: 'E', age: 5 },
        { name: 'F', age: 6 }
    ]
*/


// Now we make changes only in one array
for (let i = 0; i < clonedArray.length; i++) {
    if(clonedArray[i].name == "A")
    {
        clonedArray[i].age = 40;
        break;
    }   
}
console.log(arrayOfObjs);
console.log(clonedArray);
/*
    Changes are reflected in both
    Output
    [
        { name: 'A', age: 40 },
        { name: 'B', age: 2 },
        { name: 'C', age: 3 },
        { name: 'D', age: 4 },
        { name: 'E', age: 5 },
        { name: 'F', age: 6 }
    ]
    [
        { name: 'A', age: 40 },
        { name: 'B', age: 2 },
        { name: 'C', age: 3 },
        { name: 'D', age: 4 },
        { name: 'E', age: 5 },
        { name: 'F', age: 6 }
    ]
*/
