import { Router } from "express";

const router = Router();

// submit a image
router.post("/upload",(req, res)=>{
    const data = req.body;
    console.log(data)
    res.send(data)
})

export default router