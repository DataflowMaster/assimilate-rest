import {renderer,renderWhatever} from "./src/infrastructure/renderer";
import {requestMysql, authenticateCredentials, encrypt} from "./src/infrastructure/requestMysql";
import {buildServer,start,generateToken} from "./src/infrastructure/buildServer";
import {connection} from "./src/infrastructure/requestMysql";
import {resourceLoadAbility} from "./src/domain/AbilityEntity/resourceLoadAbility";
import {resourceLoadInstitute} from "./src/domain/InstituteEntity/resourceLoadInstitute";
import {resourceLoadMethod} from "./src/domain/MethodEntity/resourceLoadMethod";
import {resourceLoadModule} from "./src/domain/ModuleEntity/resourceLoadModule";
import {resourceLoadProffesor} from "./src/domain/ProfessorEntity/resourceLoadProffesor";
import {resourceLoadStudent} from "./src/domain/StudentEntity/resourceLoadStudent";
import {resourceLoadAuthenticate} from "./src/domain/AutthenticateEntity/resourceLoadAuthenticate";
import {resourceLoadEvaluations} from "./src/domain/EvaluationsEntity/resourceLoadEvaluations";

const dependency = {
    server: (path, rep, method)=> {return buildServer(path,rep,method)},
    repository: (sql,toDo,render)=> {return requestMysql(sql,toDo,render)},
    render: (res)=> { return renderer(res)},
    connection: ()=> { return connection},
    generateToken : (data) => { return generateToken(data) },
    authCredentials : (user,pass,resolve)=>{ return authenticateCredentials(user,pass,resolve)},
    renderWhatever: (res,result)=> {return renderWhatever(res,result)},
    encrypt: (password) => {return encrypt(password)}
};

resourceLoadAuthenticate(dependency);
resourceLoadAbility(dependency);
resourceLoadInstitute(dependency);
resourceLoadMethod(dependency);
resourceLoadModule(dependency);
resourceLoadProffesor(dependency);
resourceLoadStudent(dependency);
resourceLoadEvaluations(dependency);

start();

// //rest api to update record into mysql database
// server.put('/institution', function (req, res) {
//     connection.query('UPDATE `institution` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
//         if (error) throw error;
//         res.end(JSON.stringify(results));
//     });
// });
