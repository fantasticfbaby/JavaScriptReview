var person = {}
Object.defineProperties(person, {
    name: {
        value: "tengfei"
    },
    _birth: { // _口头约定该属性为私有
        value: 1997,
        writable: true, // 能否修改属性 默认false
        enumerable: true, // 能否通过for-in返回属性 默认false
        configurable: false // 能否删除属性,能否修改属性特性,能否修改属性种类 默认false
    },
    age: {
        get() {
            return (new Date()).getFullYear() - this._birth
        },
        set(newValue) {
            this._birth = (new Date()).getFullYear() - newValue
        }
    }
})
console.log(person) //enumerable为true了对应的属性才能输出

var descriptor = Object.getOwnPropertyDescriptor(person, '_birth')
console.log(descriptor)
var descriptors = Object.getOwnPropertyDescriptors(person)
console.log(descriptors)

var boy = {
    name: "tengfei",
    birth: 1998,
    myname: function () {
        console.log(this.name)
    }
}

console.log(Object.getOwnPropertyDescriptors(boy))
