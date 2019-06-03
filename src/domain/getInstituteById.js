export function getInstituteById({build,repository,render}){
    build("/institution/:id",repository("SELECT * FROM institution WHERE idinstitution = ?",render,"get"),"get");
}