class planet{ 
    width: number;
    color: string;

    constructor(width: number, color:string){
        this.width = width;
        this.color = color;
    }
}

let krypton = new planet(10000000,"green");
let omicronPersei8 = new planet(5000000, "red");
let nemesis = new planet(2345678, "brown");

export {planet, krypton, omicronPersei8, nemesis}