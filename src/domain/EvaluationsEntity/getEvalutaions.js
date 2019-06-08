const properties = {
    path:"/evaluations",
    query:"SELECT  s.idstudent, m.idmethods,o.modules_idmodules,a.idability, e.score, e.date, e.state, s.name, s.lastname, s.email, s.phone, s.observation,m.name , m.details, a.name, a.type\n" +
        "FROM evaluations as e,student as s,methods as m,objectives as o,ability as a\n" +
        "where e.student_idstudent = s.idstudent \n" +
        "and e.methods_idmethods = m.idmethods\n" +
        "and e.objectives_modules_idmodules = o.modules_idmodules\n" +
        "and e.objectives_modules_professor_idprofessor = o.modules_professor_idprofessor\n" +
        "and e.objectives_mod_pro_ins_idCentroEstudio = o.modules_pro_ins_idCentroEstudio\n" +
        "and e.objectives_ability_idability = o.ability_idability\n" +
        "and o.ability_idability = a.idability",
    method:"get",
    req: ()=> {}
};
export function getEvaluations({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}