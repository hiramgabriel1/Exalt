import express from "express"
import cors from "cors"

const app = express()
const port = 3000

// middlewares
app.use(cors())
app.use(express.json())

app.listen(port)