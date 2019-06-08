import {getEvaluations} from "./getEvalutaions";
import {postEvaluations} from "./postEvaluations";
import {putChangeState} from "./putChangeState";
import {putEvaluate} from "./putEvaluate";

export function resourceLoadEvaluations(dependency){
    getEvaluations(dependency);
    postEvaluations(dependency);
    putChangeState(dependency);
    putEvaluate(dependency);
}