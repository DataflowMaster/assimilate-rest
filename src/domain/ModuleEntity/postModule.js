const properties = {
    path:"/module",
    query:"INSERT INTO modules SET  ?",
    method:"post",
    req: (req)=>{
        let set = {
            name : req.body.name,
            descripcion : req.body.descripcion,
            professor_idprofessor: req.body.professor_idprofessor ,
            professor_institution_idCentroEstudio:req.body.professor_institution_idCentroEstudio
        };
        return set;
    }

};

export function postModule({server,connection}){
    server(properties.path,function(req, res){
        connection().query(properties.query, properties.req(req)).on('result',(results)=>{
            let a = res.req.body.abilities.reduce((accumulator,ability,index,abilities) => {
                let objectives =  {
                    modules_idmodules: results.insertId,
                    modules_professor_idprofessor: res.req.body.professor_idprofessor,
                    modules_pro_ins_idCentroEstudio:res.req.body.professor_institution_idCentroEstudio,
                    ability_idability: ability.ability_idability,
                    degree_importance: ability.degree_importance
                };
                connection().query("INSERT INTO objectives SET ?",objectives).on('error',(error)=> {
                    res.end(JSON.stringify(error));
                }).on('result',()=>{
                    accumulator.affectedRows = accumulator.affectedRows + 1;
                }).on('end',()=>{
                    if(index === (abilities.length - 1))
                        res.end(JSON.stringify(results));
                });
                return accumulator;
            },results);

            // res.req.body.abilities.map(ability => {
            //     let objectives =  {
            //         modules_idmodules: results.insertId,
            //         modules_professor_idprofessor: res.req.body.professor_idprofessor,
            //         modules_pro_ins_idCentroEstudio:res.req.body.professor_institution_idCentroEstudio,
            //         ability_idability: ability.ability_idability,
            //         degree_importance: ability.degree_importance
            //     };
            //     connection().query("INSERT INTO objectives SET ?",objectives).on('error',(error)=> {
            //         res.end(JSON.stringify(error));
            //     }).on('result',()=>{
            //         results.affectedRows = results.affectedRows + 1;
            //     }).on('end',()=>{
            //         res.end(JSON.stringify(results));
            //     });
            // });
        });
    },properties.method);
}

