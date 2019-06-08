import mysql from "mysql";
import config from "../../config/config";


export const connection = mysql.createConnection(config.db);

export function requestMysql(sql,toDo,render) {
    return function (req, res) {
        connection.query(sql,toDo(req), render(res));
    };
}
export function authenticateCredentials(username,password,resolve) {
    connection.query("SELECT * FROM user WHERE username = ? AND password = ?", [username,password],(error,result)=>{
        if(error) throw error;

        if( result.length !== 0 )
            resolve(JSON.parse(JSON.stringify(result))[0]);
        else
            resolve(false)
    })
}
