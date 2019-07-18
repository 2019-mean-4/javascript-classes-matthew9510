export class person{
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean;

    constructor(firstName: string, lastName: string, age: number, isAlive: boolean){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = isAlive || true;
    }

}

export let humanoidA = new person("Matt", "Hess", 23, true);