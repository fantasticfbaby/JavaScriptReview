//工厂模式
function createPerson(name) {
    var o = new Object();
    o.name = name;
    o.sayname = function () {
        console.log(this.name)
    }
    return o;
}
var person = createPerson("Bob");
person.sayname();

//构造函数模式
function Person(name) {
    this.name = name;
    this.sayname = function () {
        console.log(this.name)
    }
}
person = new Person("Lili");
person.sayname();

Person("Alice"); //构造函数当普通函数使用默认会绑定到global
global.sayname() // 浏览器中全局对象是window

var o = new Object()
Person.call(o, "David");
o.sayname()

var args = ["EEE", 11, 'male']
function Person1(name, age, sex) {
    this.name=name;
    this.age = age;
    this.sex = sex;
    this.sayage = function () {
        console.log(this.sex)
    }
}
Person1.apply(o, args)
console.log(o) // 发现sayname方法依然存在, 可以用于JavaScript的继承
o.sayage()

// 原型模式  将所有的数据和function挂载到原型上

console.log(typeof Person.prototype===typeof person.__proto__)
console.log(person)
Person.prototype.name="Jay" // 原型上的name
console.log(person.name) // 原型上的name被实例的name屏蔽
person.name = null // 将实例的name设置为null
console.log(person.name) // 即使实例name是null, 原型的name依然被屏蔽
delete person.name // 删除实例的name属性
console.log(person.name) //原型的name屏蔽解除

var keys = Object.keys(Person.prototype) // 返回所有可枚举的实例属性名
console.log(keys)
keys = Object.getOwnPropertyNames(Person.prototype) // 返回所有实例属性名
console.log(keys)

Person.prototype = { // 简化原型语法, 但是这种方式prototype其实是指向一个新的原型对象, 使用时可能产生不可避免的bug
    constructor: Person, // 不设置的话constructor会默认指向Object,但是以这种方式设置constructor的enumerable会是true
    name: 'tengfei',
    age: 22,
    sayname: function () {
        console.log(this.name)
    }
}
Object.defineProperty(Person.prototype, "constructor", { // 这样子才修复了漏洞
    enumerable: false,
    value: Person
})
var friend  = new Person()
console.log(friend instanceof Person)