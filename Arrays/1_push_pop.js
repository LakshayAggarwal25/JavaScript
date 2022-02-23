function displayArray(x){ console.log(x +" -> "+ x.length);}


let array = [5,6,7,8,9,10];
displayArray(array);
/*
    Output
    5,6,7,8,9,10 -> 6
*/




// push adds one or more elements at the end in the array and returns the new length of the array
array.push(11);
displayArray(array);
let pushReturn = array.push(12,13,14);
displayArray(array);
console.log(pushReturn);
/*
    Output :
    5,6,7,8,9,10,11 -> 7
    5,6,7,8,9,10,11,12,13,14 -> 10
    10
*/




// pop removes last element from the array and returns the removed value
let popReturn = array.pop();
displayArray(array);
console.log(popReturn);
/*
    Output
    5,6,7,8,9,10,11,12,13 -> 9
    14
*/




// unshift adds 1 or more elements in front of the array and returns the new length of the array
let unshiftReturn = array.unshift(0,1,2,3,4);
displayArray(array);
console.log(unshiftReturn);
/*
    Output
    0,1,2,3,4,5,6,7,8,9,10,11,12,13 -> 14
    14
*/





// shift removes first element from the array and returns the removed value
let shiftReturn = array.shift();
displayArray(array);
console.log(shiftReturn);
/*
    Output
    1,2,3,4,5,6,7,8,9,10,11,12,13 -> 13
    0
*/





// We can modify any index using [] 
array[2] = 100;
displayArray(array);
/*
    Output
    1,2,100,4,5,6,7,8,9,10,11,12,13 -> 13
*/

