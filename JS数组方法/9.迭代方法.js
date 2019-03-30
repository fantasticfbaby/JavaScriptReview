// every
console.log('******every******')
let numbers = [1,2,3,4,5]
let everyFunc = function(item, index, array) {
    return item > 2
}
let everyResult = numbers.every(everyFunc)
console.log(everyResult)
numbers.splice(0,2) // 删除1,2 使得数组满足item>2的条件
everyResult = numbers.every(everyFunc)
console.log(everyResult)

//filter
console.log('******filter******')
numbers = [1,2,3,4,5,4,3,2,1]
let filterFunc = function(item, index, array) {
    return item>2
}
let filterResult = numbers.filter(filterFunc)
console.log(filterResult)

//map
console.log('******map******')
numbers = [1,2,3,4,5,4,3,2,1]
let mapFunc = function(item, index, array) {
    return item*item
}
let mapResult = numbers.map(mapFunc)
console.log(mapResult)


//forEach
console.log('******forEach******')
numbers = [1,2,3,4,5,4,3,2,1]
numbers.forEach((value, index, array)=>{
    // value获取的只是每一项的拷贝, 要操作真实数据还得用到array和index
    value*=2 // 没用
    array[index]*=2
})
console.log(numbers)

