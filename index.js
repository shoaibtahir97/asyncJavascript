console.log ("Before preparing food.");

function prepareFood(callback){
    setTimeout(()=>{
        console.log("Food is being prepared");
        callback("Food is ready")
    },2000);
}

function myCallBack(value){
    console.log("Your",value);
} 

prepareFood(myCallBack);

console.log("The food is Prepared");