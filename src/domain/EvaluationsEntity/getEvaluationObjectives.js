const properties = {
    path:"/evaluationObjectives/:id",
    query:"SELECT * FROM evaluationObjectives \n" +
        "WHERE evaluationObjectives.evaluations_idevaluations = ?",
    method:"get",
    req: (req)=> {
        return [req.params.id]
    }
}
export function getEvaluationObjectives({ server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}