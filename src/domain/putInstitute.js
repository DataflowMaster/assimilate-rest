export function putInstitute({build,repository,render}){
    build("/institution", repository("UPDATE institution SET name=? WHERE idinstitution =?", render, "put"),"put");
}