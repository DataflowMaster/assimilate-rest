const properties = {
    path:"/moduleObjectives/:id",
    query:"select ability.idability,ability.name, ability.type, degree_importance\n" +
        "from objectives,modules,ability \n" +
        "where modules.idmodules = objectives.modules_idmodules \n" +
        "and objectives.ability_idability = ability.idability\n" +
        "and modules.idmodules = ?",
    method:"get",
    req: (req)=> {
        return [req.params.id]
    }
};
export function getObjectivesofModule({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}
