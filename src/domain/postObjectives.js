const properties = {
    path:"/objective",
    query:"INSERT INTO objectives SET ?",
    method:"post",
    req: (req)=>{
        return [req.body];
    }
};


export function postModule({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}
