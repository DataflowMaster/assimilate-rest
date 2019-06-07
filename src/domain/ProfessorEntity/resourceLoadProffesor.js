import {getProfessors} from "./getProfessors";
import {postProfessor} from "./postProfessor";

export function resourceLoadProffesor(dependency) {
    getProfessors(dependency);
    postProfessor(dependency);
}