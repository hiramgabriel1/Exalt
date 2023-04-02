import express from "express";
// import colors from "colors"
import cors from "cors"

const app = express();
const port = 5000

// middlewares
app.use(express.json())
app.use(cors())

// listening 
app.listen(port)