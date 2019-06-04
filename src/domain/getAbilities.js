const properties = {
    path:"/abilities",
    query:"SELECT * FROM ability",
    method:"get",
    req: ()=> {}
};
export function getAbilities({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}