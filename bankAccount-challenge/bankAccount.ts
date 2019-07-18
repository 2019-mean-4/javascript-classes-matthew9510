export class bankAccount{
    owner: string;
    balance: number;
    transactions: any[];

    constructor(owner: string, balance: number){
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
    }
    
    getBalance(){
        return this.balance;
    }
    
    withdrawal(amount: number){
        this.transactions.push(-amount);
        this.balance -= amount;
        return amount;
    }

    deposit(amount: number){
        this.transactions.push(amount);
        this.balance += amount;
    }
}
