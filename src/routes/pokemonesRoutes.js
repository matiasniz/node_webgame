import express from "express";
import { pokemonController } from "./../controllers";

export const pokemonesRoutes = express.Router();

pokemonesRoutes.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

pokemonesRoutes.post("/", pokemonController.createPokemon);
