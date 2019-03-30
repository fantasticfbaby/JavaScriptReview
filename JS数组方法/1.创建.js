
var arr1 = new Array()
var arr2 = new Array(20)
var arr3 = new Array('a', 'b', 'c') // 同['a', 'b', 'c']

var arr4 = []
var arr5 = ['a', 'b', 'c']


console.log(arr5.length) // 数组长度

arr5[99] = '99'
console.log(arr5.length) // 在远处插入数据, 数组就会扩张到远处