import express from "express";
import cors from "cors";
import upload from "./src/routes/uploadFile.routes.js";
import register from "./src/routes/register.routes.js";

// config server
const app = express();
const port = 3000;

// middlewares
app.use(cors());
app.use(express.json());

// endpoints
app.use("/api", upload);
app.use("/new", register);

// listening on port 3000
app.listen(port);