const properties = {
    path:"/abilities",
    query:"SELECT * FROM ability",
    method:"get",
    req: ()=> {}
};
export function getAbilities({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}