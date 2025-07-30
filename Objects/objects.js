// let users={
//     name:"Jhon",
//     age:33,
//     bringJhon:true
// };

// for(let key in users){
//     console.log(key);

//     console.log(users[key]);
// }

// let clone={};

// for(let key in users){
//     clone[key]=users[key]
// }

// clone.name="Adam";

// let users2={ name:"Jack"};

// let a1={reading: true};
// let a2={drawing:true};

// Object.assign(users2,a1,a2);

// console.log(users2);

// let kullanici={
//     selamVer:function(){
//         console.log("Selam");
//     }
// }

// let kullanici2={
//     isim:"ali",
//     selamver(){
//         console.log(this.isim);
//     }
// }
// kullanici.isim="kemal";
// delete kullanici.isim;

// console.log(kullanici);

// let kullanici3={
//     isim:"ihsan",
//     selamVer(){
//         let ok=()=> console.log(this.isim);
//         ok();
//     }
// };

// kullanici3.selamVer();

// let maaslar={
//     Ahmet: 100,
//     Ali: 160,
//     Mazlum: 130
// }
//     let topla=0;

// for(let key in maaslar){
//     topla+=maaslar[key];
// }
// console.log(topla);

//Constructor
function Users(name){
    this.name = name; 
    this.isAdmin = false;
    this.sayHello = function(){
        console.log("Hello");
    }
}

let user = new Users("Ahmet");
let ihsan = new Users("Ihsan");
ihsan.sayHello();

console.log(Users.name);

// Example
function Adder(initialValue){
    this.value = initialValue;
    this.read = function(){
        this.value += +prompt("How much would you like to add?", 0);
    }
}

let adder = new Adder(1);
adder.read();
adder.read();
console.log(adder.value);


