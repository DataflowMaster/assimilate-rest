const properties = {
    path:"/institution/:id",
    query:"UPDATE institution SET name=? WHERE idinstitution =?",
    method:"put",
    req: (req)=>{
        return [req.body.name, req.body.idinstitution];
    }
};
export function putInstitute({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}
