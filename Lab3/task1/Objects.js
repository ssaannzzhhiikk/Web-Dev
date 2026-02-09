"use strict"
let user = new Object();
// let user = {};

let user1 = {
    name: "John",
    age: 30
};

user1.name = 20;

delete user.age

let user2 = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

user["likes birds"] = false;

alert(user["likes birds"]); // false

// delete
delete user["likes birds"];

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple );

let fruit2 = 'apple';
let bag2 = {
  [fruit2 + 'Computers']: 5 // bag.appleComputers = 5
};


function makeUser(name, age){
    return {
        name: name,
        age: age,
    };
}

let user = makeUser("John", 30)
alert(user.name)

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist


let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related


let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};

user.sayHi(); // John


class User {
  constructor(name) {
    this.name = name;
    this.isAdmin = false;
  }
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined


let key2 = "firstName";

let user1 = {
  firstName: "John"
};

let user3 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined