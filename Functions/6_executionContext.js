/*
    For Now, Some of the steps are skipped for understanding  

    -> ANY CODE IN JS WILL RUN INSIDE AN EXECUTION CONNEXT

    -> In JS, code execution only takes place inside an 'execution context'
       Default execution context is known as 'Global Execution Context'. 
       New execution context is only created when we call a function.
    
    -> Memory Allocation
        1.1 for function definition -> memory allocation
        1.2 for variable -> set as undefined

    -> Code Execution


    Any code that is not written inside a function is known as global code.
    
*/


// Uncomment the next 5 lines and comment rest of the code then run.

// console.log(a);
// var a;
// console.log(a);
// a = 10;
// console.log(a);
 
/*
    How this code will run:


    Initially on the call stack it will create a global execution context then inside the Global Execution Context it will allocate memory for all the functions and variables. Since there are no functions and only one variable that is a so, it will set a = undefined.
    Then it start executing the code.
    
    1. console.log(a); -> At this point inside G.E.C a is set as undefined so, it will log undefined
    2. var a; -> Nothing happens here since a was allocated memory before code execution
    3. console.log(a); -> At this point inside G.E.C a is set as undefined only as its value is not changed at any point till now so, it will log undefined
    4. a = 10; -> Since the code is executing inside the G.E.C at this point so it will set the value of a inside G.E.C as 10;
    5. console.log(a); -> At this point inside the call stack (for G.E.C) a is set 10 , it will log 10
    

    Output
    undefined
    undefined
    10

*/



// Uncomment the next 10 lines and comment rest of the code then run.

// var a;
// a=10;
// function fn(){
//     console.log(a);
//     var a;
//     console.log(a);
//     a=10;
//     console.log(a);
// }
// fn();

/*
    How this code will run:
    Initially on the call stack it will create a global execution context and inside the G.E.C it will allocate memory for all the functions and variables. A variable will be created inside G.E.C for "a" and will be set as undefined and, a Function fn will be created inside heap (i.e its body) and a variable fn will be created inside G.E.C pointing to the function. 
    And then,



    Step 1. 
                                                                |
                                                                |
                                                                |
                                                                |   
                                                                |
                        |                               |       |               {
                        |                               |       |                   console.log(a);   
                        |                               |       |                   var a;
                        |                               |       |                   console.log(a);
                        |                               |       |                   a = 10;
                        |                               |       |                   console.log(a);
                        |                               |       |               }
                        |                               |       |                           16k (Address inside heap)
                        |                               |       |
                        |                               |       |                                    
                        |-------------------------------|       |           
                        |   a = undefined               |       |
    Global Execution => |   fn = 16k                    |       |
           Context      |                               |       |
                        |                               |       |
                        |-------------------------------|       |
                                    Call Stack                  |                             Heap
                                                                |   
                                                                |
                                                                |
                                                                |
    
                                                                

    Output: 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Step 2. 
                                                                |
                                                                |
                                                                |
                                                                |   
                                                                |
                        |                               |       |               {
                        |                               |       |                   console.log(a);   
                        |                               |       |                   var a;
                        |                               |       |                   console.log(a);
                        |                               |       |                   a = 10;
                        |                               |       |                   console.log(a);
                        |                               |       |               }
                        |                               |       |                           16k (Address inside heap)
                        |                               |       |
                        |                               |       |                                    
                        |-------------------------------|       |           
                        |   a = 10                      |       |
    Global Execution => |   fn = 16k                    |       |
           Context      |                               |       |
                        |                               |       |
                        |-------------------------------|       |
                                    Call Stack                  |                             Heap
                                                                |   
                                                                |
                                                                |
                                                                |
    
                                                                

    Output:

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Step 3. 
                                                                |
                                                                |
                                                                |
                                                                |   
                                                                |
                        |                               |       |               {
                        |                               |       |                   console.log(a);   
                        |                               |       |                   var a;
                        |                               |       |                   console.log(a);
                        |                               |       |                   a = 10;
                        |                               |       |                   console.log(a);
                        |-------------------------------|       |               }
       fn Context   =>  |                               |       |                           16k (Address inside heap)
       created at       |      a= undefined             |       |
       function call    |                               |       |
                        |                               |       |                                    
                        |-------------------------------|       |           
                        |   a = 10                      |       |
    Global Execution => |   fn = 16k                    |       |
           Context      |                               |       |
                        |                               |       |
                        |-------------------------------|       |
                                    Call Stack                  |                             Heap
                                                                |   
                                                                |
                                                                |
                                                                |
    
                                                                

    Output: undefined

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Step 4. 
                                                                |
                                                                |
                                                                |
                                                                |   
                                                                |
                        |                               |       |               {
                        |                               |       |                   console.log(a);   
                        |                               |       |                   var a;
                        |                               |       |                   console.log(a);
                        |                               |       |                   a = 10;
                        |                               |       |                   console.log(a);
                        |-------------------------------|       |               }
       fn Context   =>  |                               |       |                           16k (Address inside heap)
       created at       |      a= undefined             |       |
       function call    |                               |       |
                        |                               |       |                                    
                        |-------------------------------|       |           
                        |   a = 10                      |       |
    Global Execution => |   fn = 16k                    |       |
           Context      |                               |       |
                        |                               |       |
                        |-------------------------------|       |
                                    Call Stack                  |                             Heap
                                                                |   
                                                                |
                                                                |
                                                                |
    
                                                                

    Output: undefined
            undefined

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Step 4. 
                                                                |
                                                                |
                                                                |
                                                                |   
                                                                |
                        |                               |       |               {
                        |                               |       |                   console.log(a);   
                        |                               |       |                   var a;
                        |                               |       |                   console.log(a);
                        |                               |       |                   a = 10;
                        |                               |       |                   console.log(a);
                        |-------------------------------|       |               }
       fn Context   =>  |                               |       |                           16k (Address inside heap)
       created at       |      a= 10                    |       |
       function call    |                               |       |
                        |                               |       |                                    
                        |-------------------------------|       |           
                        |   a = 10                      |       |
    Global Execution => |   fn = 16k                    |       |
           Context      |                               |       |
                        |                               |       |
                        |-------------------------------|       |
                                    Call Stack                  |                             Heap
                                                                |   
                                                                |
                                                                |
                                                                |
    
                                                                

    Output: undefined
            undefined
            10

*/



function fn() {
    console.log(a);
    var a;
    console.log(a);
    a = 10;
    if(true){
        var a = 30;
        console.log("Inside if statement",a);
    
    }
    console.log(a);
}
fn();

/*
    This very similar to previous one, only thing here to remember is that NEW EXECUTION CONTEXT is only created at function calls.
    Var has a function scope.
    So, here when inside if block where var a = 30 , at this line the code is inside function's execution context only where there is already a variable "a"=10 so it will change "a" from 10 to 30, instead of creating a new variable "a"
*/
    