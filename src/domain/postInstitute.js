export function postInstitute({build,repository,render}){
    build("/institution",repository("INSERT INTO institution SET ?",(req)=>{
        return [req.body];
    },render),"post");
}