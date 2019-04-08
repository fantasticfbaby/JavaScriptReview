var name = 'tengfei'
function printName() {
    console.log(name)
}
module.exports = {
    printName: printName,

}
// console.log(module.exports) // 真正的老大
// console.log(exports)
// exports 只是module.exports一个引用, 而js最后导出的是module.exports的内容,
// 因此不能改变exports的指向, 只能通过exports.xxx来操作

//导出变量
export const a = '100';

//导出方法
export const dogSay =  function(){
    console.log('wang wang');
}
