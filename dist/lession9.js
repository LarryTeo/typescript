"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log('Noisy is winner');
    };
    return Person;
}());
var p1 = new Person();
console.log(p1.run() === Person.prototype.run());
console.log(p1.run());
var PersonNoisy = /** @class */ (function () {
    function PersonNoisy(name) {
        this.name(name);
        console.log('Noisy yeu dau');
    }
    PersonNoisy.talk = function () {
        console.log('Noisy is winner');
    };
    return PersonNoisy;
}());
var p = new Person("Noisy");
p.run();
Person.talk();
//# sourceMappingURL=lession9.js.map