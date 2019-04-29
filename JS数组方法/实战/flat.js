function flat(arr){
    let res = []
    function _flat(arr){
        arr.forEach(item => {
            if(item instanceof Array) {
                _flat(item)
            } else {
                res.push(item)
            }
        });
    }
    _flat(arr)
    return res
}
console.log(flat([
    [1,2,3],
    [
        [4,5],
        [
            [6,7],
            8
        ]
    ]
]))