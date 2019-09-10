import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { api } from "./routes";

mongoose.Promise = global.Promise;

const port = 3000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", api);
app.use((req, res, next) => res.status(404).json({ error: "ruta no valida" }));

mongoose
  .connect("mongodb://localhost:27017/pokedex")
  .then(() => {
    console.log("mongodb started.");
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Mongodb connection failed.");
  });
