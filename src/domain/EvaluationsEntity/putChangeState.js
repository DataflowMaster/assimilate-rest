const props = {
    path:"/changeState",
    query:"UPDATE evaluations SET state = ? WHERE idevaluations = ?",
    method:"put",
    req: (req)=>{
        return [req.body.state, req.body.idevaluations];
    }
};
export function putChangeState({server,repository,render}){
    server(props.path,repository(props.query,props.req,render),props.method);
}
