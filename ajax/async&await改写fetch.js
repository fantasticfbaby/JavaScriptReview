
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

async function process(){
    try {
        let response, data;
        response = await userInfo()
        if(!response.ok) {
            console.log('userinfo fail');
            return;
        }
        data = await response.json()
        console.log(data);
    
        response = await repo()
        if(!response.ok) {
            console.log('repo fail');
            return;
        }
        data = await response.json()
        console.log(data);
    
        response = await repoDetail()
        if(!response.ok) {
            console.log('repoDetail fail');
            return;
        }
        data = await response.json()
        console.log(data);
    
        response = await issueList()
        if(!response.ok) {
            console.log('issueList fail');
            return;
        }
        data = await response.json()
        console.log(data);
    
    } catch(err){
        console.log(err);
    }
    

}

process()