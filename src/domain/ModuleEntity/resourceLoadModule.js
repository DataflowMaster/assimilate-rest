import {getModules} from "./getModules";
import {postModule} from "./postModule";

export function resourceLoadModule(dependency) {
    getModules(dependency);
    postModule(dependency);
}