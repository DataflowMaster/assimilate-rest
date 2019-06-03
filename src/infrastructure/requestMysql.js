import mysql from "mysql";
import config from "../../config/config";


const connection = mysql.createConnection(config.db);

export function requestMysql(sql,render,method) {
    return function (req, res) {
        switch (method) {
            case "get":
                connection.query(sql,[req.params.id], render(res));
                break;
            case "post":
                connection.query(sql,req.body, render(res));
                break;
            case "put":
                connection.query(sql,[req.body.value, req.body.id], render(res))
                break;
        }
    };
}