// Guess the output

let obj ={
    fun1 : function(){
        console.log("Name : ", this.fname," Age : ",this.age);
    },
    fun2 : function(){
        console.log("Name : ", obj.fname," Age : ",obj.age);
    },
    fun3 : function(){
        console.log("Name : ", fname," Age : ", age);
    },
    fname : "Lakshay",
    age : 21
};

obj.fun1();
obj.fun2();
obj.fun3();
