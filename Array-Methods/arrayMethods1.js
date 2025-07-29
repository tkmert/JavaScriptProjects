let a = ["html", "css", "js", "react"];
console.log(a.join("-"));

//
let emp = {
    firstName: "Rafa",
    lastName: "Silva",
    salary: 60000000
}
console.log(delete emp.salary);
console.log(emp)

//
let a1 = [11, 12, 13];
let a2 = [14, 15, 16];
console.log(a1.concat(a2));

//add an element at the end of an array
let b = [10, 20, 30, 40];
a.push(50, 60);
console.log(b);

//used to add elements to the front of an array
let c = [10, 20, 30, 40];
c.unshift(50, 60);
console.log(c);

//used to remove elements from the beginning of an array
let d = [10, 20, 30, 40];
d.shift();
console.log(d);

//used to remove elements from the end of an array
let e = [10, 20, 30, 40];
e.pop();
console.log(e);

//used to insert and remove elements in between the array
//array.splice(start, deleteCount, item1, item2, ...)
let f = [10, 20, 30, 40];
f.splice(2, 0, 50, 60);
console.log(f);

//returns a shallow copy of a portion of an array into a new array without modifying the original.
const g = [10, 20, 30, 40];
const res = g.slice(1, 4);
console.log(res);
console.log(g);

//checks whether at least one of the elements of the array satisfies the condition checked by the argument function
const h = [1, 2, 3, 4, 5];
let res2 = a.some((val) => val > 4);
console.log(res);

//map, filter, reduce in arrayMethods2.js