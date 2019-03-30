var values = [1,2,3,4,5]
values.reverse() // 数组翻转
console.log(values)

values = [10,3,2,4,5]
console.log(values.sort()) // sort默认会将元素toString后在比较

let compare = function (value1, value2) {
    return value1 > value2 //  当两个数符合该情况的时候要交换位置
}
console.log(values.sort(compare))