var a = [1,2,3]
var b = [4,5,6]
var c = a.concat(b, [7,8], 9)
console.log(c) // concat会将传入的参数展开一层再进行拼接