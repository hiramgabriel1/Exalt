import mysql from "mysql2/promise";

export const Pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "arxis"
})