var str = 'aaaabcfastabc'
var pattern = /abc/g
console.log('******search******')
console.log(str.search(pattern)) //查找, 返回第一次出现的位置,pattern中的g是多余的

console.log('******replace******')
console.log(str.replace(pattern, '#'))//替换

console.log('******split******')
console.log(str.split(pattern))

console.log('******match******')
re = /\b[a-z]+\b/gi;//\b表示单词边界
str = "one two three four";
console.log(str.match(re));//one,two,three,four