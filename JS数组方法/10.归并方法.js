let values = [1,2,3,4,5]
// reduce 遍历方向从左到右
console.log('******reduce******')
let sum = values.reduce(function (prev, cur, index, array) {
    console.log(prev, cur)
    return prev + cur
})
console.log(sum)

//reduceRight 遍历方向从右到左
console.log('******reduceRight******')
sum = values.reduceRight(function (prev, cur, index, array) {
    console.log(prev, cur)
    return prev + cur
})
console.log(sum)