import { Pool } from "../config/conex.js"
import bcrypt from "bcrypt";

export const createUser = async () =>{
    try {
        // get data
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const images = req.body.images;
      
          // hash password user
          const hashPassword = await bcrypt.hash(password, 10);
      
          // save data user in database
          const [rows] = await Pool.query(
            "INSERT INTO users (username, password, email, images) VALUES (?,?,?,?)",
            [username, hashPassword, email, images]
          );
      
          // validate response
          rows
            ? res.json({ "message": "funciona" })
            : res.json({ "message": res.status(500) });
      
        } catch (error) {
          console.log(error);
        }
}
