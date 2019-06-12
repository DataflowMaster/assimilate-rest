import {getEvaluations} from "./getEvalutaions";
import {postEvaluations} from "./postEvaluations";
import {putChangeState} from "./putChangeState";
import {putEvaluate} from "./putEvaluate";
import {getEvaluationObjectives} from "./getEvaluationObjectives";

export function resourceLoadEvaluations(dependency){
    getEvaluations(dependency);
    postEvaluations(dependency);
    putChangeState(dependency);
    putEvaluate(dependency);
    getEvaluationObjectives(dependency);
}