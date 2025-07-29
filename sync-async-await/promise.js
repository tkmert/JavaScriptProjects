let isSuccesful=true;

const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(isSuccesful){
            resolve("Succesful")
        }else{
            reject("Something went wrong")
        }
    },2000)
});

promise
    .then((message)=>{
        console.log("then: ",message)
    })
    .cath((error)=>{
        console.log("catch: ",error)
    });