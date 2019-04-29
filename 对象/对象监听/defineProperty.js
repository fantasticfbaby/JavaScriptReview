const obj = {
    val: []
}
// 监听对象
let val = obj.name
Object.defineProperty(obj, 'name', {
    enumerable: true,
    configurable: true,
    get() {
        return val
    },
    set(newVal) {
        console.warn(newVal)
        val = newVal
    }
})
setTimeout(() => {
    obj.name = 'a'
}, 1000);

// 监听数组
const arrayMethods = Object.create(Array.prototype)
arrayMethods.push = function mutator(...args) {
    console.log(args);
    [].push.call(this, args)
}
if('__proto__' in {}) {
    obj.val.__proto__ = arrayMethods
} else {
    Object.defineProperty(obj.val, 'push', {
        value: arrayMethods['push'],
        enumerable: true
    })
}

setTimeout(() => {
    obj.val.push('b')
}, 1000);
