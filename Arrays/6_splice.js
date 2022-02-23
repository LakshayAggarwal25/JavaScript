/*
    Splice is function that takes index, number of elements to be removed, value of new elements to be added from that index.
    It returns array of elements that are removed from the array and updated the original array
    If we pass only index in the splice function then it will remove all the elements after that index

*/





let array = [10,20,30,40,50,60,70,80,90,100];
let removedElements = array.splice(3,1);
console.log(array);
console.log(removedElements);
/* 
    Output
    [
        10, 20, 30,  50, 60,
        70, 80, 90, 100
    ]
    [ 40 ]
*/




let array1 = [10,20,30,40,50,60,70,80,90,100];
let removedElements1 = array1.splice(3);
console.log(array1);
console.log(removedElements1);

/*
    Output
    [ 10, 20, 30 ]
    [
        40, 50,  60, 70,
        80, 90, 100
    ]
*/




let array2 = [10,20,30,40,50,60,70,80,90,100];
let removedElements2 = array2.splice(3,1,100,200);
console.log(array2);
console.log(removedElements2);

/*
    This will remove one element starting from index 3 and then insert 100 and 200 starting from index 3
    Output
    [
        10, 20, 30, 100, 200,
        50, 60, 70,  80,  90,
        100
    ]
    [ 40 ]
*/



let array3 = [10,20,30,40,50,60,70,80,90,100];
let removedElements3 = array3.splice(3,0,100);
console.log(array3);
console.log(removedElements3);

/*
    This will remove 0 elements starting from index 3 and insert 100 at index 3
    Output
    [
        10, 20, 30, 100, 40,
        50, 60, 70,  80, 90,
        100
    ]
    []
*/