export function applyMixins(derivedCtor:any, baseCtors:any[]) {
    baseCtors.forEach(base => {
        Object.getOwnPropertyNames(base.prototype).forEach(name => {
            derivedCtor.prototype[name] = base.prototype[name];
        })
    })
}
