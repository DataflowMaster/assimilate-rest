import restify from 'restify';
import config from './config/config.json';
import mysql from "mysql";
// import {showInstitute} from "./src/domain/getInstitute.js";
import {callRepository} from "./src/infrastructure/callRepository";
import {renderRequest} from "./src/infrastructure/renderRequest.js"
const connection = mysql.createConnection(config.db);

const server = restify.createServer({
    name    : config.server.name,
    version : config.server.version,
    url : config.server.hostname
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


function render(res) {
    return function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    };
}

function repository(sql,render) {
    return function (req, res) {
        connection.query(sql, render(res));
    };
}

function buildServer(path,rep){
    return server.get(path,rep);
}

function getInstitution(){
    buildServer("/institution",repository("select * from institution",render));
}

getInstitution();





// server.get('/institution/:id', function (req, res) {
//     connection.query('select * from institution where idinstitution = ?', [req.params.id], function (error, results, fields) {
//         if (error) throw error;
//         res.end(JSON.stringify(results));
//     });
// });
//
//
// //rest api to create a new record into mysql database
// server.post('/institution', function (req, res) {
//     var postData  = req.body;
//     connection.query('INSERT INTO professor SET ?', postData, function (error, results, fields) {
//         if (error) throw error;
//         res.end(JSON.stringify(results));
//     });
// });
//
// //rest api to update record into mysql database
// server.put('/institution', function (req, res) {
//     connection.query('UPDATE `institution` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
//         if (error) throw error;
//         res.end(JSON.stringify(results));
//     });
// });


server.listen(config.server.port, function() {
    console.log('%s listening at %s', server.name, server.url);
});


// let dependency = {
//     server:()=>{
//         return server;
//     },
//     repository:()=>{
//         return callRepository()
//     },
//     render:()=>{
//         return renderRequest();
//     }
// };
// let d = dependency.repository();
// console.log(d);