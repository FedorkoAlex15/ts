"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixins = void 0;
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (base) {
        Object.getOwnPropertyNames(base.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = base.prototype[name];
        });
    });
}
exports.applyMixins = applyMixins;
