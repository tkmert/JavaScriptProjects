function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("jack", "smith");

//If we want to add a property or method to all instances of a constructor function at once, we can use the prototype
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
 
console.log(member.getFullName());