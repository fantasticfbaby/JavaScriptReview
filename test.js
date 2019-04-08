let obj = {a:1, b:{c:1}}
let p = new Proxy(obj, {
    get(target, p, receiver) {
        console.log(target === obj)
        return Reflect.get(target, p, receiver)
    },
    set(target, p, value, receiver) {
        console.log(target === obj)
        return Reflect.set(target, p, value, receiver)
    }
})
p.b.c = 2
console.assert(p.b.c === 2)
