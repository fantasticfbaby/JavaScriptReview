Promise.reject(1)
.then(res=>{
    console.log(res);
}, res=> {
    console.log(res)
})
