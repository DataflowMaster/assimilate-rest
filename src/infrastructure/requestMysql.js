import mysql from "mysql";
import config from "../../config/config";
import {renderRequest} from "./renderRequest";

const connection = mysql.createConnection(config.db);
// console.log(connection.query("SELECT * FROM institution"));
export function callRepository(sql) {
    return function (req, res) {
        console.log(sql);
        // connection.query(sql, renderRequest(res));
    };
}