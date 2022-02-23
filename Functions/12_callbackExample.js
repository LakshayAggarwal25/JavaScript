
Array.prototype.customHigherOrderFunction = function(callbackFunction1,callbackFunction2,criteria){
    originalArray = this;
    for (let i = 0; i < originalArray.length; i++) {
        let currentStr = originalArray[i];

        if(currentStr.length < criteria){
            originalArray[i] = callbackFunction1(currentStr);
        }else{
            originalArray[i] = callbackFunction2(currentStr);
        }    
    }

    return this; // -> this statement will enable chaining
};

function forSmallStrings(str){
    let newStr = str.split(" ").reverse().join("-").toString(); // This is an example of chaining
    return newStr;
}

function forLargeStrings(str){
    let newStr = str.substring(str.length/2);
    return newStr;
}



let arr = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    "It was popularised in the 1960s with the release",
    "of Letterset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
]

arr.customHigherOrderFunction(forSmallStrings,forLargeStrings,80);
console.log(arr);
/*
    Output
    [
        'industry-typesetting-and-printing-the-of-text-dummy-simply-is-Ipsum-Lorem',
        'ake a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        'release-the-with-1960s-the-in-popularised-was-It',
        'top publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    ]
*/
