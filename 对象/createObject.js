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

// 原型模式

console.log(Person.prototype)