import mysql from "mysql";
import config from "../../config/config";


const connection = mysql.createConnection(config.db);

export function requestMysql(sql,toDo,render) {
    return function (req, res) {
        connection.query(sql,toDo(req), render(res));
    };
}