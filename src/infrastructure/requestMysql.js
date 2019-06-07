import mysql from "mysql";
import config from "../../config/config";


export const connection = mysql.createConnection(config.db);

export function requestMysql(sql,toDo,render) {
    return function (req, res) {
        connection.query(sql,toDo(req), render(res));
    };
}
export function authenticateCredentials(username,password) {
    connection.query(
        "SELECT * FROM user WHEN username = ? AND password = ?",
        [username,password])
        .on('error',(error)=>{
            return Promise.reject(new Error(error));
        }).on('result',(result)=>{
            return Promise.resolve(result);
        })
}

