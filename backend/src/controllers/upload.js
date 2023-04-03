import { Pool } from "../config/conex.js"
import { storage } from "../routes/uploadFile.routes.js"
// import mimetypes from "mime-types"
// import multer from "multer"

// upload a file to server
export const uploadFileInServer = (req, res) =>{
    try {
        res.send("upload file".concat(JSON.stringify(storage))); 
    } catch (error) {
        res.send(error)
    }
}
