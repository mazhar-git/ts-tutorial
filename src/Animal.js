"use strict";
class Animal {
    eat() {
        return console.log('can eat...');
    }
}
class Dog extends Animal {
    bark() {
        return console.log('can bark...');
    }
}
class Cat extends Animal {
    mew() {
        return console.log('can mew');
    }
}
const objDog = new Dog;
objDog.eat();
objDog.bark();
const objCat = new Cat;
objCat.eat();
objCat.mew();
