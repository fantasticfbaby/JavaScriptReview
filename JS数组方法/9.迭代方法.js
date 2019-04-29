// every
// 传入条件函数, 判断数组中的每个元素是否都符合该条件
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
// 传入条件函数, 返回数组中符合该条件的元素
console.log('******filter******')
numbers = [1,2,3,4,5,4,3,2,1]
let filterFunc = function(item, index, array) {
    return item>2
}
let filterResult = numbers.filter(filterFunc)
console.log(filterResult)

//map
// 传入迭代方法, 对数组中的每个元素都调用一次该迭代方法, 返回处理过的数组
console.log('******map******')
numbers = [1,2,3,4,5,4,3,2,1]
let mapFunc = function(item, index, array) {
    return item*item
}
let mapResult = numbers.map(mapFunc)
console.log(mapResult)

// console.log('******flatMap******')
// numbers = ['今天天气不错', '', '早上好']
// let flatMapResult = numbers.flatMap(s => s.split(''))
// console.log(flatMapResult)


//forEach
console.log('******forEach******')
numbers = [1,2,3,4,5,4,3,2,1]
numbers.forEach((value, index, array)=>{
    // value获取的只是每一项的拷贝, 要操作真实数据还得用到array和index
    value*=2 // 没用
    array[index]*=2
})
console.log(numbers)

numbers = [   //对于引用类型可以修改
    {'age':1},
    {'age':2}
    ]
numbers.forEach((value => {
    value.age *=2
}))
console.log(numbers)

//findIndex
// 找到符合条件的元素的index
console.log('******findIndex******')
numbers = [
    {age: 7},
    {age: 8}
]
let index = numbers.findIndex(value => {
    return value.age > 7
})
console.log(index)


//find
//找到符合条件的元素
console.log('******find******')
numbers = [
    {age: 7, name: 'Bob'},
    {age: 8, name: 'Charles'}
]
let target = numbers.find(value => {
    return value.age > 7
})
console.log(target)
