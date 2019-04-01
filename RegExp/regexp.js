var pattern1 = /at/g //全局匹配at, 意味着不止匹配一个at
var pattern2 = /[bc]at/i //匹配bat或cat
var pattern3 = /.at/gi // 匹配所有任意字符+at
var pattern4 = /\.at/gi // 匹配所有.at

var text = 'mom and dad and baby'
var pattern = /mom( and dad( and baby)?)?/gi
var matches = pattern.exec(text)
console.log(matches)
console.log(pattern.lastIndex)

let version = 'macOS Mojave 10.14.1'
let version2= 'ubuntu 8'
pattern = /([a-z]+\s*[a-z]+)\s+((\d+\.)*\d+)/i
console.log(pattern.test(version)) // 校验方式1 返回bool
matches = pattern.exec(version) // 校验方式2 返回匹配的详细信息
console.log(matches)