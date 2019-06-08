const properties = {
    path:"/institutions",
    query:"SELECT * FROM institution",
    method:"get",
    req: ()=> {}
};
export function getInstitute({server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}

