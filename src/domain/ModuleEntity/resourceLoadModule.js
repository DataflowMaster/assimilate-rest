import {getModules} from "./getModules";
import {postModule} from "./postModule";
import {getObjectivesofModule} from "./getObjectivesofModule";

export function resourceLoadModule(dependency) {
    getModules(dependency);
    postModule(dependency);
    getObjectivesofModule(dependency)
}