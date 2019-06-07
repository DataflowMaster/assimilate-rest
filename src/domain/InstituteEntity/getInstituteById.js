const properties = {
    path:"/institution/:id",
    query:"SELECT * FROM institution WHERE idinstitution = ?",
    method:"get",
    req: (req)=>{
        return [req.params.id]
    }
};
export function getInstituteById({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}