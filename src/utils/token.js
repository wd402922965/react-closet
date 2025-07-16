//封装token相关方法

const TOKENKEY = 'token_key'
const USERID = 'user_id';

function setToken(token,userId){
    localStorage.setItem(TOKENKEY,token);
    localStorage.setItem(USERID,userId)
}

function getToken(){
    return localStorage.getItem(TOKENKEY);
}

function removeToken(){
    localStorage.removeItem(TOKENKEY);
    localStorage.removeItem(USERID);
}

function getUserId(){
    return localStorage.getItem(USERID);
}

export {
    setToken,
    getToken,
    removeToken,
    getUserId
}