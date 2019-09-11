import express from "express";
import { router as entrenadoresRoutes } from "./entrenadoresRoutes";
import { router as pokemonesRoutes } from "./pokemonesRoutes";
import { router as typesRoutes } from "./typesRoutes";

export const api = express.Router();

api.use("/entrenadores", entrenadoresRoutes);
api.use("/pokemones", pokemonesRoutes);
api.use("/types", typesRoutes);
