

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

export function postModule({build,repository,render}){
    // build(properties.path,repository(properties.query,properties.req,render),properties.method);
    build(properties.path,repository(properties.query,properties.req,(res) => {
        return  (error, results) => {
            if (error) throw error;
            console.log(results,error,res);
            // res.end(JSON.stringify(results));
        };
    }),properties.method);
}



