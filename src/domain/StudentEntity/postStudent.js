const properties = {
    path:"/student",
    query:"INSERT INTO student SET ?",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};
export function postStudent({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}