const properties = {
    path:"/institution/:id",
    query:"INSERT INTO institution SET ?",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};
export function postInstitute({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}