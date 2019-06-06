const properties = {
    path:"/modules",
    query:"select modules_idmodules,modules_professor_idprofessor, modules_pro_ins_idCentroEstudio, \n" +
        "ability_idability, degree_importance,idmodules,modules.name module, descripcion, \n" +
        "professor_idprofessor, professor_institution_idCentroEstudio, idability,ability.name as ability, type\n" +
        "from objectives,modules,ability \n" +
        "where modules.idmodules = objectives.modules_idmodules \n" +
        "and objectives.ability_idability = ability.idability",
    method:"get",
    req: ()=> {}
};
export function getModules({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}
