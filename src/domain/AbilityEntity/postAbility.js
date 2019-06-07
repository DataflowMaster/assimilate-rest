const properties = {
    path:"/ability",

    query:"INSERT INTO ability SET ? ",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};
export function postAbility({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}