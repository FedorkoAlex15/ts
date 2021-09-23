import {applyMixins} from "./mixins";

abstract class Auto {
    protected constructor(public brand: string, public wheels: number) {}

    drive(): void {
        console.log(
            `${this.brand} has ${this.wheels} wheels`
        );
    }
}



class Audi extends Auto{
    constructor() {
        super('Audi', 4);
    }

    comforableSeats() {
        console.log("Audi has comforable Seats ");
    }
}


class BMW extends Auto {
    constructor() {
        super("BMW", 4);
    }

    power(): void {
        console.log("BMW is very powerful");
    }
}




class Porshe extends Auto {
    constructor() {
        super("Porshe", 4);
    }

    lights() {
        console.log("Lights are the best");
    }
}


export class Tesla extends Auto {
    constructor() {
        super("Tesla", 4);
    }

    electronics(): void {
        console.log(`Tesla has advanced electronics`);
    }
}





//  my car

class ZAZ extends Auto {
    constructor() {
        super("Zaz", 4);
    }
}

interface ZAZ extends Audi, BMW, Porshe, Tesla {}

applyMixins(ZAZ, [Audi, BMW, Porshe, Tesla]);


const myCar = new ZAZ();
myCar.drive();
myCar.comforableSeats();
myCar.power();
myCar.lights();
myCar.electronics()









// let varibles: number | string | boolean
// class Auto {
//
//     // воно як константа,
//     // ніхто не може це змінити
//     // крім як в конструкторі
//     readonly  age: number = 23;
//
//
// }
//
//
//
//
//
//
//
//
// interface IUser {
//     id: number;
//     name: string;
//     email: string;
//     phone: number;
//     website: string;
//     address: IAddress;
// }
//
//
// interface IAddress {
//     street: string;
//     city: string;
// }
