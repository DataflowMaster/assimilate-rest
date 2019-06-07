import {postAuth} from "./postAuth";
import {getAuth} from "./getAuth";

export function resourceLoadAuthenticate(dependency){
    postAuth(dependency);
    getAuth(dependency);
}
