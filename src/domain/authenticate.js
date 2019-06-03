
export function authenticate(username,password) {
    if(username === "sean" && password === "12345")
        return Promise.resolve({ uid: 1, name: 'Sean', admin: false });
    else
        return Promise.reject(new Error('fail'));
}
