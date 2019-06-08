import mysql from "mysql";
import config from "../../config/config";
import md5 from 'md5';

export const connection = mysql.createConnection(config.db);

export function requestMysql(sql,toDo,render) {
    return function (req, res) {
        connection.query(sql,toDo(req), render(res));
    };
}
export function authenticateCredentials(username,password,resolve) {
    connection.query("SELECT * FROM user WHERE username = ? AND password = ?", [username,md5(password)],(error,result)=>{
        if(error) throw error;

        if( result.length !== 0 )
            resolve(JSON.parse(JSON.stringify(result))[0]);
        else
            resolve(false)
    })
}

export function encrypt(password) {
    return md5(password);
}
