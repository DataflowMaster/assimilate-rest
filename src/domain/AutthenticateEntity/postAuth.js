
const properties = {
    path:"/auth",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};
export function postAuth({server,generateToken,authCredentials,renderWhatever}){
    server(properties.path,(req, res, next) => {
        authCredentials(req.body.username,req.body.password, data => {
            if(data){
                let token = generateToken(data);
                renderWhatever(res,token);
            }else{
                renderWhatever(res,{error: "User or password incorrect"})
            }
        })
    },properties.method)
}