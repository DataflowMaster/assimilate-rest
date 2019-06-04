export function putInstitute({build,repository,render}){
    build("/institution", repository("UPDATE institution SET name=? WHERE idinstitution =?",(req)=>{
       return [req.body.name, req.body.idinstitution];
    }, render),"put");
}