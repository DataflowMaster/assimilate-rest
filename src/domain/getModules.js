const properties = {
    path:"/modules",
    query:"select * from objectives,modules,ability where modules.idmodules = objectives.modules_idmodules and objectives.ability_idability = ability.idability",
    method:"get",
    req: ()=> {}
};
export function getModules({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}