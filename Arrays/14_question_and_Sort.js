/*
    Sort -> sorts the array lexicographically, to sort the array numerically we need to pass (a,b => a-b) {Abstraction}
*/

let array1 = [5,7,9,11,15,13,10,31,21,24,54,100];
console.log(array1.sort());
console.log(array1.sort((a,b) => a-b));
/*
    Output
    [
        10, 100, 11, 13, 15,
        21,  24, 31,  5, 54,
        7,   9
    ]
    [
        5,   7,  9, 10, 11,
        13,  15, 21, 24, 31,
        54, 100
    ]
*/





// Question : Given string 
let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "

/* 
Required output : 
industry typesetting and printing the of text dummy simply is Ipsum Lorem.book specimen type a make to it scrambled and type of galley a took printer unknown an when 1500s, the since ever text dummy standard industry's the been has Ipsum Lorem.unchanged essentially remaining typesetting, electronic into leap the also but centuries, five only not survived has It.

Do it without using for loops
*/





let strArray = str.split(". ");
console.log(strArray);
/* 
    Output
    [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        ''
    ]
*/




// Removing string having length 0
strArray = strArray.filter(value => value.length != 0);
console.log(strArray);
/*
    Output
    [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    ]
*/



let smallerArrays = strArray.map(value => value.split(" "));
console.log(smallerArrays);
/*
    Output
    [
        [
            'Lorem',       'Ipsum',
            'is',          'simply',
            'dummy',       'text',
            'of',          'the',
            'printing',    'and',
            'typesetting', 'industry'
        ],
        [
            'Lorem',    'Ipsum',   'has',
            'been',     'the',     "industry's",
            'standard', 'dummy',   'text',
            'ever',     'since',   'the',
            '1500s,',   'when',    'an',
            'unknown',  'printer', 'took',
            'a',        'galley',  'of',
            'type',     'and',     'scrambled',
            'it',       'to',      'make',
            'a',        'type',    'specimen',
            'book'
        ],
        [
            'It',         'has',
            'survived',   'not',
            'only',       'five',
            'centuries,', 'but',
            'also',       'the',
            'leap',       'into',
            'electronic', 'typesetting,',
            'remaining',  'essentially',
            'unchanged'
        ]
    ]
*/





let reversedSmallerArrays = smallerArrays.map(value => value.reverse());
console.log(reversedSmallerArrays);
/*
    Output
    [
        [
            'industry', 'typesetting',
            'and',      'printing',
            'the',      'of',
            'text',     'dummy',
            'simply',   'is',
            'Ipsum',    'Lorem'
        ],
        [
            'book',     'specimen',   'type',
            'a',        'make',       'to',
            'it',       'scrambled',  'and',
            'type',     'of',         'galley',
            'a',        'took',       'printer',
            'unknown',  'an',         'when',
            '1500s,',   'the',        'since',
            'ever',     'text',       'dummy',
            'standard', "industry's", 'the',
            'been',     'has',        'Ipsum',
            'Lorem'
        ],
        [
            'unchanged',  'essentially',
            'remaining',  'typesetting,',
            'electronic', 'into',
            'leap',       'the',
            'also',       'but',
            'centuries,', 'five',
            'only',       'not',
            'survived',   'has',
            'It'
        ]
    ]
*/




let oneArray = smallerArrays.map(function(value){
    return value.join(" ");
})
console.log(oneArray);
/*
    Output
    [
        'industry typesetting and printing the of text dummy simply is Ipsum Lorem',
        "book specimen type a make to it scrambled and type of galley a took printer unknown an when 1500s, the since ever text dummy standard industry's the been has Ipsum Lorem",
        'unchanged essentially remaining typesetting, electronic into leap the also but centuries, five only not survived has It'
    ]
*/




// Adding fullstops
let arrayOfRequiredString = oneArray.map(function(value){
    return value + "." ;
})
console.log(arrayOfRequiredString);
/*
    Output
    [
        'industry typesetting and printing the of text dummy simply is Ipsum Lorem.',
        "book specimen type a make to it scrambled and type of galley a took printer unknown an when 1500s, the since ever text dummy standard industry's the been has Ipsum Lorem.",
        'unchanged essentially remaining typesetting, electronic into leap the also but centuries, five only not survived has It.'
    ]
*/



let requiredStr = arrayOfRequiredString.reduce(function(previousValue,currentValue){
    return previousValue + currentValue;
},"")
console.log(requiredStr);
/*
    Output
    industry typesetting and printing the of text dummy simply is Ipsum Lorem.book specimen type a make to it scrambled and type of galley a took printer unknown an when 1500s, the since ever text dummy standard industry's the been has Ipsum Lorem.unchanged essentially remaining typesetting, electronic into leap the also but centuries, five only not survived has It.
*/