function foo(obj) {
    with (obj) {
        a = 5
    }
}

let obj1 = {
    a: 1
}
let obj2 = {}

//正常操作
foo(obj1)
console.log(obj1.a) //5


//异常操作
foo(obj2)
console.log(obj2.a) //undefined


//异常操作导致作用域泄露
console.log(a) // 5
