// 通过call继承父类属性,通过原型继承继承父类方法

function Animal() {
    this.name = 'jelly'
}
Animal.prototype.getName = function () {
    return this.name
}

function Cat() {
    Animal.call(this)// 继承属性
}
Cat.prototype = new Animal()
let cat = new Cat()
console.log(cat.getName())
