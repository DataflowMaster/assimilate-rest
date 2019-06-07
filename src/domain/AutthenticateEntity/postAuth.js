
const properties = {
    path:"/auth",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};
export function postAuth({server,generateToken,authCredentials,renderWhatever}){
    server(properties.path,(req, res, next) => {
        console.log(req.body);
        authCredentials(req.body.username,req.body.password).then((data)=>{
            let token =generateToken(data);
            renderWhatever(res,token);
        },(because)=>{
           renderWhatever(res,because);
        })
    },properties.method)
}