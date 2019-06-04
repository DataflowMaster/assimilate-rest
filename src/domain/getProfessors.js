const properties = {
    path:"/professors",
    query:"SELECT * FROM professor",
    method:"get",
    req: ()=> {}
};
export function getProfessors({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}