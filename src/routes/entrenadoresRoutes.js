import express from "express";
import { entrenadorController } from "./../controllers";

export const entrenadoresRoutes = express.Router();

entrenadoresRoutes.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

entrenadoresRoutes.post("/", entrenadorController.createEntrenador);