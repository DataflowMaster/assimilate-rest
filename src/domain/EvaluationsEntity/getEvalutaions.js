const properties = {
    path:"/evaluations",
    query:"SELECT * FROM evaluations,student,methods,objectives\n" +
        "where evaluations.student_idstudent = student.idstudent \n" +
        "and evaluations.methods_idmethods = methods.idmethods\n" +
        "and evaluations.objectives_modules_idmodules = objectives.modules_idmodules\n" +
        "and evaluations.objectives_modules_professor_idprofessor = objectives.modules_professor_idprofessor\n" +
        "and evaluations.objectives_mod_pro_ins_idCentroEstudio = objectives.modules_pro_ins_idCentroEstudio\n" +
        "and evaluations.objectives_ability_idability = objectives.ability_idability",
    method:"get",
    req: ()=> {}
};
export function getEvaluations({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}