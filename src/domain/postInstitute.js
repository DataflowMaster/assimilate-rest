const properties = {
    path:"/institution/:id",
    query:"INSERT INTO institution SET ?",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};
export function postInstitute({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}