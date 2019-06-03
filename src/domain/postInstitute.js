export function postInstitute({build,repository,render}){
    build("/institution",repository("INSERT INTO institution SET ?",render,"post"),"post");
}