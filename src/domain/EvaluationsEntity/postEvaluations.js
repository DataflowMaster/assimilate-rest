const props = {
    path:"/evaluation",
    method:"post",
    evaluation : {
        query: "INSERT INTO evaluations SET  ?",
        set:(req) => {
            return {
                date : req.body.date,
                state : req.body.state,
                methods_idmethods : req.body.methods_idmethods,
                student_idstudent : req.body.student_idstudent,
            }
        }
    },
    evoObj : {
        query : "INSERT INTO evaluationObjectives SET  ?",
        set: (obj,idom) => {
            return {
                evaluations_idevaluations : idom,
                objectives_modules_idmodules : obj.objectives_modules_idmodules,
                objectives_modules_professor_idprofessor : obj.objectives_modules_professor_idprofessor,
                objectives_modules_pro_ins_idCentroEstudio : obj.objectives_modules_pro_ins_idCentroEstudio,
                objectives_ability_idability: obj.objectives_ability_idability,
                score : obj.score
            }
        }
    }
};

export function postEvaluations({server,connection}){
    server(props.path,function(req, res){
        connection().query(props.evaluation.query, props.evaluation.set(res.req)).on('result',(results)=> {
            let a = res.req.body.withObjectives.reduce((accumulator,objective,index,objectives) => {
                connection().query(props.evoObj.query,props.evoObj.set(objective,results.insertId)
                ).on('error',(error)=> {
                    res.end(JSON.stringify(error));
                }).on('result',()=>{
                    accumulator.affectedRows = accumulator.affectedRows + 1;
                }).on('end',()=>{
                    if(index === (objectives.length - 1))
                        res.end(JSON.stringify(results));
                });
                return accumulator;
            },results);
        });
    },props.method);
}
