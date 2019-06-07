const properties = {
    path:"/students",
    query:"SELECT * FROM student",
    method:"get",
    req: ()=> {}
};
export function getStudents({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}