import { Router } from "express";
import { uploadFileInServer } from "../controllers/upload.js"
import multer from "multer";
import mimetypes from "mime-types"

const router = Router();

//storage multer 
export const storage = multer.diskStorage({
    destination: "../public/",
    filename: (req, file, cb)=>{
        cb("",Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype))
    }
})

// config multer
const upload = multer({
    storage: storage
})

// upload file
router.post("/", upload.single('file'), uploadFileInServer)

export default router
