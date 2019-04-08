// 通过call继承父类属性,通过Object.create继承父类的原型

function Animal() {
    this.name = 'jelly'
}
Animal.prototype.getName = function () {
    return this.name
}

function Cat() {
    Animal.call(this)// 继承属性
}
Cat.prototype = Object.create(Animal.prototype, {
    constructor : {
        value: Cat,
        enumerable: false,
        writable: true,
        configurable: true
    }
})
let cat = new Cat()
console.log(cat.getName())
