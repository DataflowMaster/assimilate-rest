const properties = {
    path:"/evaluations",
    query:"SELECT * \n" +
        "FROM evaluations as e, methods as m, student as s, evaluationObjectives as eo \n" +
        "WHERE e.methods_idmethods = m.idmethods\n" +
        "AND e.student_idstudent = s.idstudent\n" +
        "AND eo.evaluations_idevaluations = e.idevaluations",
    method:"get",
    req: ()=> {}
};
export function getEvaluations({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}