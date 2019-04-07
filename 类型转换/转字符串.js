//number -> string
console.log(String(5))

// bool -> string
console.log(String(true))
// function -> string
console.log(String(function () {
    console.log('aaa')
}))
// Symbol -> string
console.log(String(Symbol('1')))


// array -> string
console.log(String([1,2]))
// object -> string
console.log(String({name: 'tengfei'}))

