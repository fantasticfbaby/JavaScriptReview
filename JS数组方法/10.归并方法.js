let values = [1,2,3,4,5]
// reduce(callback, initialValue)
// callback(acc, cur, index, array)
// reduce 遍历方向从左到右
console.log('******reduce******')
let sum = values.reduce(function (acc, cur, index, array) {
    console.log(acc, cur)
    return acc + cur
}, 0)
console.log(sum)

//reduceRight 遍历方向从右到左
console.log('******reduceRight******')
sum = values.reduceRight(function (acc, cur, index, array) {
    console.log(acc, cur)
    return acc + cur
}, 0)
console.log(sum)
