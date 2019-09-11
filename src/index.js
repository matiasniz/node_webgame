import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { api } from "./routes";

import { populateRun } from './mock/populate'

mongoose.Promise = global.Promise;

const populate =  true;
const port = 3000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", api);
app.use((req, res, next) => res.status(404).json({ error: "invalid path" }));

mongoose
  .connect("mongodb://localhost:27017/pokedex", { useNewUrlParser: true,  useUnifiedTopology: true })
  .then( async () => {
    console.log("mongodb started.");
    if (populate){
      await populateRun()
    }
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Mongodb connection failed.");
  });
