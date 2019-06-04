const properties = {
    path:"/methods",
    query:"SELECT * FROM methods",
    method:"get",
    req: ()=> {}
};
export function getMethods({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}