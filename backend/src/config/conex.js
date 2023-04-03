import { createPool } from "mysql2/promise"

export const Pool = createPool({
    host: 'localhost',
    database: "exalt",
    password: "",
    user: "root"
})