const properties = {
    path:"/methods",
    query:"SELECT * FROM methods",
    method:"get",
    req: ()=> {}
};
export function getMethods({ server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}