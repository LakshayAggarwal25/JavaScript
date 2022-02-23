Array.prototype.M = function(cb){
    let or = this;
    let res = [];
    for (let i = 0; i < or.length; i++) {
        let rv = cb(or[i],i,or);
        res.push(rv);
    }
    return res;
}

Array.prototype.F = function(cb){
    let or = this;
    let res = [];
    for(let i =0;i<or.length;i++){
        let rv = cb(or[i],i,or);
        if(rv===true){
            res.push(rv);
        }
    }
    return res;
}

Array.prototype.R = function(cb,ipv){

    let or = this;
    let pv;
    if(ipv === undefined){
        pv = or[0];
        for (let i = 1; i < or.length; i++) {
            let npv = cb(pv,or[i],i,or);
            pv = npv;
        }
    }else{
        pv = ipv;
        for (let i = 0; i < or.length; i++) {
            let npv = cb(pv,or[i],i,or);
            pv = npv;
        }
    }
    return pv;
}


Function.prototype.C = function(){
    let oF = this;
    let tSIC = arguments[0];//this sent in call  
    let args = Array.from(arguments).splice(1);
    tSIC.myFun = oF;
    tSIC.myFun(...args);
    delete tSIC.myFun;
    return; 
}


Function.prototype.A = function(){
    let oF = this;
    let tSIC = arguments[0];//this sent in call  
    let args = arguments[1];
    tSIC.myFun = oF;
    tSIC.myFun(...args);
    delete tSIC.myFun;
    return; 
}

Function.prototype.B = function(){
    let oF = this;
    let tSIC = arguments[0];
    let args = Array.from(arguments).splice(1);
    function boundFun(){
        let newArgs = Array.from(arguments);
        args = args.concat(newArgs);
        oF.call(tSIC,...args);
    }
    return boundFun;
}



