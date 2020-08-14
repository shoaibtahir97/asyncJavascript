console.log ("Before preparing food.");

function prepareSouffle(callback){
    setTimeout(()=>{
        console.log("Souffle is being prepared");
        callback("Souffle is ready")
    },2000);
}

function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("Preparing French Toast");
        callback("French Toast is ready");
    },4000);
}

function firstCallBack(value){
    console.log("Your",value);
    prepareFrenchToast(secondCallBack);//prepareFrenchToast fn will wait for the first callback to 
                                       //complete and once it is done it will call the secondcallback
} 

function secondCallBack(value){
    console.log("Sir your ",value);
}

prepareSouffle(firstCallBack);



console.log("The food is Prepared");