const properties = {
    path:"/professors",
    query:"SELECT * FROM professor",
    method:"get",
    req: ()=> {}
};
export function getProfessors({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}