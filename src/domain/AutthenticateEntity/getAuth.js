const properties = {
    path:"/user",
    method:"get",
    req: (req)=>{
        return [req.body];
    }
};
export function getAuth({server,renderWhatever}){
    server(properties.path, (req, res) => {
        renderWhatever(res,req.user);
    },properties.method);
}
