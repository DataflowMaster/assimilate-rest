
const props = {
    path:"/modules/:id",
    modules: {
        query:"SELECT * FROM assimilate.modules WHERE professor_idprofessor = ?",
        req: (req)=>{
            return [req.params.id]
        }
    },
    objectives: {
        query:"SELECT * FROM assimilate.objectives, assimilate.ability \n" +
            "WHERE objectives.ability_idability = ability.idability \n" +
            "AND modules_idmodules = ?",
        req: (id)=>{
            return [id]
        }
    },
    method:"get"
};
export function getModules({server,connection}){
    server(props.path,function(req, res){
        connection().query(props.modules.query,props.modules.req(req), (error,result) => {
            result.reduce((accumulator,module,index,modules) => {
                module.objectives = [];
                connection().query(props.objectives.query, props.objectives.req(module.idmodules)).on('result',res=> {
                    module.objectives.push(res);
                }).on('end',()=> {
                    accumulator.push(module);
                    if(index === (modules.length - 1))
                        res.end(JSON.stringify(accumulator));
                });
                return accumulator;
            },[])
        })
    },props.method)
}

