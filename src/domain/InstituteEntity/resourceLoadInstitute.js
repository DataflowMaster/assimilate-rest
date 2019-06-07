import {getInstitute} from "./getInstitute";
import {getInstituteById} from "./getInstituteById";
import {postInstitute} from "./postInstitute";
import {putInstitute} from "./putInstitute";

export function resourceLoadInstitute(dependency){
    getInstitute(dependency);
    getInstituteById(dependency);
    postInstitute(dependency);
    putInstitute(dependency);
}