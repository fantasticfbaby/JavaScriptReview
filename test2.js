let a = 0
async function b() {
    a = a + 10
    console.log('2', a) // -> '2' 10
}
b()
a++
console.log('1', a) // -> '1' 1
