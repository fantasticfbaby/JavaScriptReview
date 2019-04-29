let obj = {
    b: true,
    o: {name: 'obj'},
    a: ['a', 'b', 'c'],
    odeep: {
        path: {
            name: 'obj deep',
            value: []
        }
    }

}

const handler = {
    get(target, prop) {
        try {
            return new Proxy(target[prop], handler)
        } catch (error) {
            return target[prop]
        }
    },
    set(target, prop, newVal) {
        const oldVal = target[prop]
        if(oldVal !== newVal) {
            console.warn(oldVal, newVal)
        }
        target[prop] = newVal
        return true
    }
}
obj = new Proxy(obj, handler)

setTimeout(() => {
    obj.b = false
    obj.o.name = 'newobj'
    obj.odeep.path.name = 'newobj deep'
    obj.b = {name: 'obj created'}
    obj.b.name = 'newobj created'
    obj.a.push('d')
    obj.odeep.path.value.push(1)
    obj.b = ['a']
    obj.b.push('b')
    obj.b[0] = 'new a'
}, 1000);