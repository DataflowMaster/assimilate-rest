import {getAbilities} from "./getAbilities";
import {postAbility} from "./postAbility";

export function resourceLoadAbility(dependency){
    getAbilities(dependency);
    postAbility(dependency);
}