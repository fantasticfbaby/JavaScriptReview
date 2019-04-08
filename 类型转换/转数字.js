// string->number
console.log(Number('1')) //数字内容字符串1
console.log(Number('a')) //非数字内容字符串NaN

//array->number
console.log(Number([])) // 空数组0
console.log(Number([99])) // 只有一个元素的数组99
console.log(Number([1,2,3])) // 多个元素的数组NaN

//null->number
console.log(Number(null)) //0
//undefined->number
console.log(Number(undefined))

//除数组以外的引用类型->number
console.log(Number({})) // 除数组以外的引用类型NaN

//Symbol
// console.log(Number(Symbol(1))) // Symbol报错
