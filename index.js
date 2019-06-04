import {renderer} from "./src/infrastructure/renderer";
import {requestMysql} from "./src/infrastructure/requestMysql";
import {getInstitute} from "./src/domain/getInstitute";
import {buildServer,start} from "./src/infrastructure/buildServer";
import {getInstituteById} from "./src/domain/getInstituteById";
import {postInstitute} from "./src/domain/postInstitute";
import {putInstitute} from "./src/domain/putInstitute";
import {getStudents} from "./src/domain/getStudents";
import {getMethods} from "./src/domain/getMethods";
import {getModules} from "./src/domain/getModules";
import {getEvaluations} from "./src/domain/getEvalutaions";
import {getAbilities} from "./src/domain/getAbilities";
import {getProfessors} from "./src/domain/getProfessors";


const dependency = {
    build: (path,rep,method)=> {return buildServer(path,rep,method)},
    repository: (sql,toDo,render)=> {return requestMysql(sql,toDo,render)},
    render: (res)=> {return renderer(res)}
};


getInstitute(dependency);
getInstituteById(dependency);
postInstitute(dependency);
putInstitute(dependency);
getStudents(dependency);
getMethods(dependency);
getModules(dependency);
getEvaluations(dependency);
getAbilities(dependency);
getProfessors(dependency);
start();
// //rest api to update record into mysql database
// server.put('/institution', function (req, res) {
//     connection.query('UPDATE `institution` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
//         if (error) throw error;
//         res.end(JSON.stringify(results));
//     });
// });
