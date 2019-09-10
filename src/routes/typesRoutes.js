import express from "express";
import { typeController } from "./../controllers";
export const typesRoutes = express.Router();

typesRoutes.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

typesRoutes.post("/", typeController.createType);
