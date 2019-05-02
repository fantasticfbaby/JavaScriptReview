
let userName = 'fantasticfbaby'

function userInfo(){
    return fetch(`https://api.github.com/users/${userName}`)
}
function repo(){
    return fetch(`https://api.github.com/users/${userName}/repos`)
}
function repoDetail(){
    return fetch(`https://api.github.com/repos/${userName}/blog_issue`)
}
function issueList(){
    return fetch(`https://api.github.com/repos/${userName}/blog_issue/issues`)
}
userInfo()
.then(res=>{
    if(res.ok) {
        return res.json()
    } else {
        console.log('userinfo forbidden');
    }
}).then(data=>{
    console.log(data);
    return repo()
})

.then(res=>{
    if(res.ok) {
        return res.json()
    } else {
        console.log('repo forbidden');
    }
}).then(data=>{
    console.log(data);
    return repoDetail()
})

.then(res=>{
    if(res.ok) {
        return res.json()
    } else {
        console.log('repoDetail forbidden');
    }
}).then(data=>{
    console.log(data);
    return issueList()
})

.then(res=>{
    if(res.ok) {
        return res.json()
    } else {
        console.log('issueList forbidden');
    }
}).then(data=>{
    console.log(data);
})

.catch(err=>{
    console.log(err);
})
