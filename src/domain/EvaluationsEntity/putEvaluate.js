const props = {
    path:"/evaluate",
    query:"UPDATE evaluationObjectives SET score = ? " +
        "WHERE evaluations_idevaluations = ? " +
        "AND objectives_modules_idmodules = ? " +
        "AND objectives_modules_professor_idprofessor = ? " +
        "AND objectives_modules_pro_ins_idCentroEstudio = ? " +
        "AND objectives_ability_idability = ? ",
    method:"put",
    req: (req)=>{
        return [
            req.body.score,
            req.body.evaluations_idevaluations,
            req.body.objectives_modules_idmodules,
            req.body.objectives_modules_professor_idprofessor,
            req.body.objectives_modules_pro_ins_idCentroEstudio,
            req.body.objectives_ability_idability
        ];
    }
};
export function putEvaluate({server,repository,render}){
    server(props.path,repository(props.query,props.req,render),props.method);
}
