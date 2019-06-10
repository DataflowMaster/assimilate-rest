const props = {
    path:"/evaluations/:id",
    evaluations: {
        query:"SELECT *\n" +
            "FROM evaluations, evaluationObjectives\n" +
            "where evaluations.idevaluations = evaluationObjectives.evaluations_idevaluations\n" +
            "and evaluationObjectives.objectives_modules_professor_idprofessor = ?",
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

