import express from "express";
import uploadImages from "./routes/uploadImages.routes.js";
import showImages from "./routes/showImages.routes.js"

const app = express();
const PORT = 5000

// middlewares
app.use(express.json());

// routes
app.use(uploadImages)
app.use(showImages)

app.listen(PORT)