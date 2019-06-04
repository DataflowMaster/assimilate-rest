export function getInstitute({build,repository,render}){
    build("/institution",repository("SELECT * FROM institution",()=>{},render),"get");
}



