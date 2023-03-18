import express from "express";

const app = express();
const PORT = 5000

// middlewares
app.use(express.json());

// port
app.listen(PORT)