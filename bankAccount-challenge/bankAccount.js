"use strict";
exports.__esModule = true;
var bankAccount = /** @class */ (function () {
    function bankAccount(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.withdrawal = function (amount) {
        this.transactions.push(-amount);
        this.balance -= amount;
        return amount;
    };
    bankAccount.prototype.deposit = function (amount) {
        this.transactions.push(amount);
        this.balance += amount;
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
