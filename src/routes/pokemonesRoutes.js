import express from "express";

export const pokemonesRoutes = express.Router();

pokemonesRoutes.get("/", (req, res, next) => {
  res.send("respond with a resource");
});
