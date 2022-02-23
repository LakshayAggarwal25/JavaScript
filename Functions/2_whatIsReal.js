console.log("Script Started");

real();

function real(){
    console.log("I am real");
}

function real(){
    console.log("No, I am real");
}

real();


/*
    In JS, memory allocation is done before code execution 
    How this script will run: 
        -> Before the code execution starts it will create a variable for functionName in the stack i.e "real" in this case and allocate space for it in heap(lets say address in heap is 3k) which will have its body(function body)
        -> So stack now contains real() -> 3k (heap address)
        -> Now it will come to line no. 9 (this is before code execution) and it will allocate space in heap((lets say address in heap is 8k) for this function body(line no. 9-11) and come to stack to create the variable for it sees that there exists already a variable name for "real".
        -> So it will not create a new variable with the same name, else it will point the "real" that is already present in the stack to a new location.
        -> Therefore, stack now contains real() -> 8k (heap address).
        -> Now memory is allocated, so execution starts
            -> Line 1. It prints "Script Started"
            -> Line 3. Call's function real(), it goes to the stack sees the function is there(pointing to 8k address) so it executes that function call.
            -> Line 9. Again same thing happens it goes to stack and then function is called
        -> Output
            -> console.log("No, I am real");
            -> console.log("No, I am real");
  

    So, to summarize it, if multiple functions are created with the same name then function created at last will be called whenever the function is called.
*/