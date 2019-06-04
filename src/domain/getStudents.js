const properties = {
    path:"/students",
    query:"SELECT * FROM student",
    method:"get",
    req: ()=> {}
};
export function getStudents({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}