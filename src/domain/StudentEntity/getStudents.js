const properties = {
    path:"/students/:id",
    query:"SELECT * \n" +
        "FROM student,course\n" +
        "WHERE student.idstudent = course.student_idstudent \n" +
        "AND course.modules_professor_idprofessor = ?",
    method:"get",
    req: (req)=>{
        return [req.params.id]
    }
};
export function getStudents({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}