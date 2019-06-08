import {postAuth} from "./postAuth";
import {getAuth} from "./getAuth";
import {postNewUser} from "./postNewUser";

export function resourceLoadAuthenticate(dependency){
    postAuth(dependency);
    getAuth(dependency);
    postNewUser(dependency);
}
