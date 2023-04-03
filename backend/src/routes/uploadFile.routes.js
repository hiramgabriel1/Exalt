import { Router } from "express";
import { uploadFileInServer } from "../controllers/upload.js"

const router = Router();

// test
router.post("/", uploadFileInServer)

export default router