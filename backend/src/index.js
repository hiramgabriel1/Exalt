import express from "express";
import uploadImages from "./routes/uploadImages.routes.js";
import showImages from "./routes/showImages.routes.js"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();
const PORT = 5000

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));

// permitir solicitudes de un dominio específico
// app.use(cors({
//     origin: 'https://miotrodominio.com'
// }));

// routes
app.use(uploadImages)
app.use(showImages)

app.listen(PORT)