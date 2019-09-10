import express from "express";
import { entrenadoresRoutes } from "./entrenadoresRoutes";
import { pokemonesRoutes } from "./pokemonesRoutes";
import { typesRoutes } from "./typesRoutes";

export const api = express.Router();

api.use("/entrenadores", entrenadoresRoutes);
api.use("/pokemones", pokemonesRoutes);
api.use("/types", typesRoutes);
