"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tesla = void 0;
var mixins_1 = require("./mixins");
var Auto = /** @class */ (function () {
    function Auto(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    Auto.prototype.drive = function () {
        console.log(this.brand + " has " + this.wheels + " wheels");
    };
    return Auto;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super.call(this, 'Audi', 4) || this;
    }
    Audi.prototype.comforableSeats = function () {
        console.log("Audi has comforable Seats ");
    };
    return Audi;
}(Auto));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW() {
        return _super.call(this, "BMW", 4) || this;
    }
    BMW.prototype.power = function () {
        console.log("BMW is very powerful");
    };
    return BMW;
}(Auto));
var Porshe = /** @class */ (function (_super) {
    __extends(Porshe, _super);
    function Porshe() {
        return _super.call(this, "Porshe", 4) || this;
    }
    Porshe.prototype.lights = function () {
        console.log("Lights are the best");
    };
    return Porshe;
}(Auto));
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla() {
        return _super.call(this, "Tesla", 4) || this;
    }
    Tesla.prototype.electronics = function () {
        console.log("Tesla has advanced electronics");
    };
    return Tesla;
}(Auto));
exports.Tesla = Tesla;
//  my car
var ZAZ = /** @class */ (function (_super) {
    __extends(ZAZ, _super);
    function ZAZ() {
        return _super.call(this, "Zaz", 4) || this;
    }
    return ZAZ;
}(Auto));
mixins_1.applyMixins(ZAZ, [Audi, BMW, Porshe, Tesla]);
var myCar = new ZAZ();
myCar.drive();
myCar.comforableSeats();
myCar.power();
myCar.lights();
myCar.electronics();
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
