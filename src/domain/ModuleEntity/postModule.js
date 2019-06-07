// example request
// {
//     "name" : "restifary",
//     "descripcion" : "asdfasdfa",
//     "professor_idprofessor" : 1,
//     "professor_institution_idCentroEstudio" : 1,
//     "abilities": [{
//     "ability_idability" : 1 ,
//     "degree_importance" : 10
// },
//     {
//         "ability_idability" : 2 ,
//         "degree_importance" : 50
//     },
//     {
//         "ability_idability" : 3 ,
//         "degree_importance" : 40
//     }
// ]
// }
const properties = {
    path:"/module",
    query:["INSERT INTO modules SET  ?","INSERT INTO objectives SET ?"],
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
        connection().query(properties.query[0], properties.req(req)).on('result',(results)=>{
            let a = res.req.body.abilities.reduce((accumulator,ability,index,abilities) => {
                let objectives =  {
                    modules_idmodules: results.insertId,
                    modules_professor_idprofessor: res.req.body.professor_idprofessor,
                    modules_pro_ins_idCentroEstudio:res.req.body.professor_institution_idCentroEstudio,
                    ability_idability: ability.ability_idability,
                    degree_importance: ability.degree_importance
                };
                connection().query(properties.query[1],objectives).on('error',(error)=> {
                    res.end(JSON.stringify(error));
                }).on('result',()=>{
                    accumulator.affectedRows = accumulator.affectedRows + 1;
                }).on('end',()=>{
                    if(index === (abilities.length - 1))
                        res.end(JSON.stringify(results));
                });
                return accumulator;
            },results);
        });
    },properties.method);
}

