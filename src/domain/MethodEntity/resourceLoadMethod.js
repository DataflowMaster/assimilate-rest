import {getMethods} from "./getMethods";
import {postMethod} from "./postMethod";

export function resourceLoadMethod(dependency) {
    getMethods(dependency);
    postMethod(dependency)
}