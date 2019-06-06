const properties = {
    path:"/method",
    query:"INSERT INTO methods SET ?",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};
export function postMethod({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}