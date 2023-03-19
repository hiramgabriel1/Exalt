import { Router } from "express";
import { Pool } from "../../config/conex.db.js";

const router = Router();

router.get("/all", async (req, res) => {
    try{
    const [rows] = await Pool.query(
        "SELECT * FROM images"
    )
    res.json({
        rows
    })
}catch(err){
    console.log(err)
}
})

// search a image for id
router.get("/image/:id", async(req, res) => {
    try{
    const [rows] = await Pool.query(
        "SELECT * FROM images WHERE id= ?",[req.params.id]
    )
    if(rows.length<=0){
        return res.status(404).json({"message": "image not found"})
    }else{
        res.json({
            rows
        })
    }
}catch(err){
    console.log(err)
}
})

// search a image for name
// router.get("/image/:name", async(req, res) => {
//     try{
//     const [rows] = await Pool.query(
//         "SELECT * FROM images WHERE name = ?",[req.params.name]
//     )
//     if(rows.length<=0){
//         return res.status(404).json({"message": "image not found"})
//     }else{
//         res.json({
//             rows
//         })
//     }
// }catch(err){
//     console.log(err)
// }
// })

export default router;