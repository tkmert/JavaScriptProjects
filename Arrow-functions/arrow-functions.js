function hello(firsName){
    console.log(`Hello ${firsName}`);
}
hello("Ex");

const arrFunc1=firstName=>console.log(`Hello ${firstName}`);
arrFunc1("Ex");

const arrFunc2=(firstName,lastName)=>console.log("Hello "+firstName+" "+lastName);
arrFunc("Ex","ex");

const arrFunc3=(firstName,lastName)=>{
    let info=`Hello ${firstName} ${lastName}`;
    return `${info}`
}
