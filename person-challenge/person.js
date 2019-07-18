"use strict";
exports.__esModule = true;
var person = /** @class */ (function () {
    function person(firstName, lastName, age, isAlive) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = isAlive || true;
    }
    return person;
}());
exports.person = person;
exports.humanoidA = new person("Matt", "Hess", 23, true);
