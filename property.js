var person = {}
Object.defineProperties(person, {
    name: {
        value: "tengfei"
    },
    _birth: { // _口头约定该属性为私有
        value: 1997,
        writable: false, // 默认false
        enumerable: false, // 默认false
        configurable: false // 默认false
    },
    age: {
        get:function(){
            return (new Date()).getFullYear() - this._birth
        },
        set:function(newValue){
            this._birth = (new Date()).getFullYear() - newValue
        }
    }
})
var descriptor = Object.getOwnPropertyDescriptor(person, '_birth')
console.log(descriptor)