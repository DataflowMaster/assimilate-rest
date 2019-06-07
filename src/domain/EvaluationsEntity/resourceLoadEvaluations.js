import {getEvaluations} from "./getEvalutaions";
import {postEvaluations} from "./postEvaluations";

export function resourceLoadEvaluations(dependency){
    getEvaluations(dependency)
    postEvaluations(dependency)
}