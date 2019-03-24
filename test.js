let obj1 = new Object()
obj1.a = 1
let obj2 = new Object()
obj2.a = 2
let arr = [obj1, obj2]
arr.forEach(function (item) {
    console.log(this.toString())
})