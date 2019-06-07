import {getStudents} from "./getStudents";
import {postStudent} from "./postStudent";

export function resourceLoadStudent(dependency) {
    getStudents(dependency);
    postStudent(dependency);
}