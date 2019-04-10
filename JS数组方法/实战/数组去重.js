
let arr = [1, 2, 3, 22, 233, 22, 2, 233, 'a', 3, 'b', 'a'];
Array.prototype.unique1 = function () {
    const newArr = []
    this.forEach(item=>{
        if(newArr.indexOf(item)===-1) { // 如果没有出现在newArr中
            newArr.push(item)
        }
    })
    return newArr
}
console.log('unique_indexOf', arr.unique1())


Array.prototype.unique1_plus = function (){
    const newArr = []
    this.forEach(item=>{
        if(!newArr.includes(item)) {
            newArr.push(item)
        }
    })
    return newArr
}
console.log('unique_includes', arr.unique1_plus())


Array.prototype.unique2 = function () {
    return this.filter((item, index,array)=>{
        return this.indexOf(item) === index // 只将数组中元素第一次出现的返回
    })
}
console.log('unique_filter',arr.unique2())


Array.prototype.unique3 = function () {
    const newArr = []
    this.sort()
    for(let i=0;i<this.length;i++){
        if(this[i]!==this[i+1]) {
            newArr.push(this[i])
        }
    }
    return newArr
}
console.log('unique_sort', arr.unique3())


Array.prototype.unique_set = function () {
    const set = new Set(this)
    return Array.from(set)
}
console.log('unique_set', arr.unique_set())


Array.prototype.unique_set2 = function () {
    return [...new Set(this)]
}
console.log('unique_set2', arr.unique_set2())



Array.prototype.unique_map = function () {
    const newArr = []
    const tmp = new Map()
    for(let i=0;i<this.length;i++){
        if(!tmp.has(this[i])){
            tmp.set(this[i],1)
            newArr.push(this[i])
        }
    }
    return newArr
}
console.log('unique_map1', arr.unique_map())


Array.prototype.unique_map2 = function () {
    const tmp = new Map()
    return this.filter((value, index, array) => {
        return !tmp.has(value) && tmp.set(value,1)
    })
}
console.log('unique_map_filter', arr.unique_map2())
