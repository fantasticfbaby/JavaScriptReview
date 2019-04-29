// 创建
var now = +new Date()
var now2 = Date.now() // 时间戳
var now3 = new Date(Date.parse('2019-5-6'))
console.log(now)
console.log(now2)
console.log(now3)

let time = new Date()
console.log(time.toLocaleString())
console.log(time.toDateString())
console.log(time.toTimeString())
console.log(time.toLocaleDateString())
console.log(time.toLocaleTimeString())
console.log(time.toUTCString())
console.log(time.getTime())
// console.log(time.setTime())
console.log(time.getFullYear())
console.log(time.getUTCFullYear())
