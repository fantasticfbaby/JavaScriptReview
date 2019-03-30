// 最牛逼的数组方法
let arr
//删除
arr = [1,2,3,4]
console.log(arr.splice(2,2)) // 从index=2的位置开始删除,删除两个元素,返回删除的元素
console.log(arr) // 变动性算法

//插入
arr=  [1,2,3,4]
console.log(arr.splice(2,0, 5,6))// 在index=2的位置删除0个元素,插入5,6
console.log(arr)

//替换
arr = [1,2,3,4]
console.log(arr.splice(2,2, 5,6))// 在index=2的位置删除2个元素,再插入5,6两个元素,返回删除的元素
console.log(arr)