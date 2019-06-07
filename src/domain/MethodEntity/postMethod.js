const properties = {
    path:"/method",
    query:"INSERT INTO methods SET ?",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};
export function postMethod({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}