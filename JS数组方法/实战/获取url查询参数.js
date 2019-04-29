// 获取URL的查询参数

let location = {
    search: 'https://www.baidu.com?foo=bar&baz=bing'
}

q={};location.search.replace(/([^?&=]+)=([^?&=]+)/g,(_,k,v)=>q[k]=v);
console.log(q)
