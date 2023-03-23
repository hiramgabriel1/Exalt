import { Router } from "express";
import { Pool } from "../../config/conex.db.js";

const router = Router();

// submit a image
router.post("/upload", async (req, res) => {
  const { name, ruta, description } = req.body;
  const [rows] = await Pool.query(
    "INSERT INTO images (name, ruta, description) VALUES (?, ?, ?)",
    [name, ruta, description]
  );

  // response
  res.json({
    id: rows.insertId,
    name,
    ruta,
    description,
  });
});

export default router;
