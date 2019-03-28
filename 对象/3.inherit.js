// 原型链实现继承
function SuperType() {
    this.supername = "SuperType"
}
SuperType.prototype.getSuperValue = function () {
    return this.supername
}

function SubType() {
    this.subname = "SubType"
}

SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function () {
    return this.subname
}

var instance = new SubType()
console.log(instance.getSuperValue())

console.log(Object.getOwnPropertyNames(instance))
console.log(Object.getOwnPropertyNames(instance.__proto__))
console.log(Object.getOwnPropertyNames(instance.__proto__.__proto__))
console.log(instance instanceof SubType)

//借用构造函数实现继承
function SuperType1(name) {
    this.colors = ['red','blue','green']
    this.name = name
}
function SubType1(name) {
    SuperType1.call(this, name)
}
var instance1 = new SubType1("instance1");
instance1.colors.push("black")
console.log(instance1.colors)
console.log(instance1.name)

var instance2 = new SubType1("instance2")
console.log(instance2.colors)
console.log(instance2.name)

//组合继承
