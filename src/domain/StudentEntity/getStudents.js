const props = {
    path:"/students/:id",
    query:"SELECT * FROM student,course WHERE student.idstudent = course.student_idstudent AND course.modules_professor_idprofessor = ?",
    method:"get",
    req: (req)=>{
        return [req.params.id]
    }

};
export function getStudents({server,repository,render}){
    server(props.path,repository(props.query,props.req,render),props.method);
}