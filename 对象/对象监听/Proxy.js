let obj = {
    val: []
}
obj = new Proxy(obj, {
    set(target, prop, newVal) {
        console.warn(newVal)
        target[prop] = newVal
        return true
    }
})

setTimeout(() => {
    obj.name = 'a'
    console.log(obj)
    console.log(obj.name)
}, 1000)

obj.val = new Proxy(obj.val, {
    set(target, prop, newVal) {
        const oldVal = target[prop]
        if(oldVal != newVal) {
            console.log(oldVal, newVal)
        }

        target[prop] = newVal
        return true
    }
})

setTimeout(() => {
    obj.val.push('b')
}, 1000);