const properties = {
    path:"/professor",
    query:"INSERT INTO professor SET ?",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};
export function postProfessor({ server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}