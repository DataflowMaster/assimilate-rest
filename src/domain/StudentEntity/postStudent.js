const props = {
    path:"/student",
    student : {
        query:"INSERT INTO student SET ?",
        set: (req)=>{
            return {
                name: req.body.name,
                lastname: req.body.lastname ,
                email: req.body.email ,
                phone: req.body.phone ,
                observation: req.body.observation
            };
        },
    },
    course: {
        query: "INSERT INTO course SET ?",
        set:(req,idstudent)=>{
            return {
                modules_idmodules : req.body.modules_idmodules ,
                modules_professor_idprofessor : req.body.modules_professor_idprofessor,
                modules_professor_institution_idCentroEstudio : req.body.modules_professor_institution_idCentroEstudio,
                student_idstudent : idstudent
            }

        }
    },
    method:"post"
};
export function postStudent({server,connection}){
    server(props.path,function(req, res){
        connection().query(props.student.query, props.student.set(res.req)).on('result',(results)=> {
            connection().query(props.course.query,props.course.set(res.req,results.insertId)
            ).on('error',(error)=> {
                res.end(JSON.stringify(error));
            })
            res.end(JSON.stringify(results));
        });
    },props.method);

}

