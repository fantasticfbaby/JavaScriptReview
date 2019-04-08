let a = {
    [Symbol.toPrimitive](){ // 第一优先级
        return 'Symbol.toPrimitive'
    },
    valueOf(){ // 第二优先级
        return 'valueOf'
    },
    toString(){ // 第三优先级
        return 'toString'
    },
}
console.log('a to string is' + a)
