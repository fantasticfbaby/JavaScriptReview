function ajax(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open('get', url, true)
    xhr.send()
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            callback.call(this, xhr.responseText)
        }
      }
}
let userName = 'fantasticfbaby'

function userInfo(){
    return new Promise((resolve, reject) =>{
        ajax(`https://api.github.com/users/${userName}`, (res)=>{
            resolve(res)
        })
    })
}
function repo(){
    return new Promise((resolve, reject)=>{
        ajax(`https://api.github.com/users/${userName}/repos`, (res)=>{
            resolve(res)
        })
    })
}
function repoDetail(){
    return new Promise((resolve, reject)=>{
        ajax(`https://api.github.com/repos/${userName}/blog_issue`, (res)=>{
            resolve(res)
        })

        
    })
}
function issueList(){
    return new Promise((resolve, reject)=>{
        
        ajax(`https://api.github.com/repos/${userName}/blog_issue/issues`, (res)=>{
            resolve(res)
        })

    })
}
userInfo()
.then(res=>{
    if(res) {
        console.log('userinfo',res);
        return repo()
    } else {
        console.log('userinfo forbidden');
    }
}).then(res=>{
    if(res) {
        console.log('repo',res);
        return repoDetail()
    } else {
        console.log('repo forbidden');
    }
}).then(res=>{
    if(res) {
        console.log('repoDetail',res);
        return issueList()
    } else {
        console.log('repoDetail forbidden');
    }
}).
then(res=>{
    if(res) {
        console.log('issueList',res);
    } else {
        console.log('issueList forbidden');
    }
})
.catch(err=>{
    console.log(err);
})
