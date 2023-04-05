import express from "express"
import cors from "cors"
import { register } from "./routes/uploadFile.routes.js"

const app = express()
const port = 3000

// middlewares
app.use(cors())
app.use(register)
app.use(express.json())

app.listen(port)
