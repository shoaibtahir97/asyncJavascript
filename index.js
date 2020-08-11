console.log ("Before preparing food.");

function prepareFood(){
    setTimeout(()=>{
        console.log("Food is being prepared");
    });
}

prepareFood();

console.log("The food is Prepared");