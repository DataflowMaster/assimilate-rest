export function getInstituteById({build,repository,render}){
    build("/institution/:id",repository("SELECT * FROM institution WHERE idinstitution = ?",(req)=>{
        return [req.params.id]
    },render),"get");
}