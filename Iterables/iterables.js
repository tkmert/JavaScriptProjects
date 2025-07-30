const arr=[10,20,30];

const iterator=arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

const arr2=[40,50,60];

for(const value of arr2){
    console.log(value);
}

const myIterable={
    [Symbol.iterator](){
        let step=0;
        return{
            next(){
                step++;
                if(step===1) return {value:'a',done:false};
                if(step===2) return {value:'b',done:false};
                return {value:undefined,done:true};
            }
        };
    }
};

for (const val of myIterable){
    console.log(val);
}

//OUTPUT
//a
//b

for (const ch of "hello") {
  console.log(ch);
}

//OUTPUT
//h
//e
//l
//l
//o

let arr3=Array.from(aralik,num=>num*num);

console.log(arr3);

"use strinct";
var x=7;
document.querySelector("#result").innerHTML=x;

if(x===7){
    let message="JavaScript EcmaScript 6";
    document.querySelector("#result").innerHTML="if içindeki mesaj budur: "+message;

}
 