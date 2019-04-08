let obj = {a:1, b:{c:1}}
let p = new Proxy(obj, {
    get(target, p, receiver) { // 原对象 原属性
        console.log(`get中的target`,target)
        console.log('get中的p', p)
        console.log(`get中的receiver`, receiver)
        console.log((`读取${p},值为${target[p]}`))
        return Reflect.get(target, p, receiver)
    },
    set(target, p, value, receiver) { // 原对象 原属性 新值
        console.log(`set中的target`,target)
        console.log('set中的p', p)
        console.log('set中的value', value)
        console.log(`set中的receiver`, receiver)
        console.log(`监听到属性${p}从${target[p]}改变为${value}`)
        return Reflect.set(target, p, value, receiver)
    }
})
p.b.c = 2
console.assert(p.b.c === 2)
