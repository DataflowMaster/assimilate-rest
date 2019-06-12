const props = {
    path:"/evaluations/:id",
    evaluations: {
            query:"SELECT distinct e.idevaluations, s.idstudent,s.name as student ,s.lastname,s.observation as obsStudent, \n" +
                " m.idmethods, m.name as method, m.observation,\n" +
                " mo.idmodules, mo.name as module , date, state\n" +
                "FROM evaluations as e , evaluationObjectives as eo, student as s, methods as m, modules as mo\n" +
                "where e.idevaluations = eo.evaluations_idevaluations \n" +
                "and s.idstudent = e.student_idstudent\n" +
                "and e.methods_idmethods = m.idmethods\n" +
                "and eo.objectives_modules_idmodules = mo.idmodules\n" +
                "and eo.objectives_modules_professor_idprofessor = ?",
        req: (req)=>{
            return [req.params.id]
        }
    },
    objectives: {
        query:"SELECT * \n" +
            "FROM assimilate.evaluationObjectives\n" +
            "where evaluations_idevaluations = ?",
        req: (id)=>{
            return [id]
        }
    },
    method:"get"
};
export function getEvaluations({server,connection}){
    server(props.path,function(req, res){
        connection().query(props.evaluations.query,props.evaluations.req(req), (error,result) => {
            if(result.length === 0)
                res.end(JSON.stringify({error: "Empty evaluation"}));
            result.reduce((accumulator,evaluation,index,evaluations) => {
                evaluation.objectives = [];
                connection().query(props.objectives.query, props.objectives.req(evaluation.idevaluations)).on('result',res=> {
                    evaluation.objectives.push(res);
                }).on('end',()=> {
                    accumulator.push(evaluation);
                    if(index === (evaluations.length - 1))
                        res.end(JSON.stringify(accumulator));
                });
                return accumulator;
            },[])
        })
    },props.method)
}

