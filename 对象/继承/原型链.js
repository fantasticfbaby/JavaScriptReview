// 父类实例作为子类原型

function Father() {
    this.fathername = 'father'
}
Father.prototype.getFatherName = function () {
    return this.fathername
}
Father.prototype.getChildName = function () {
    return this.childname
}


function Child() {
    this.childname = 'child'
}
Child.prototype = new Father()

let child = new Child()
console.log(child.getFatherName())
console.log(child.getChildName())
