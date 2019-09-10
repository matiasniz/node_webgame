import express from "express";

export const entrenadoresRoutes = express.Router();

entrenadoresRoutes.get("/", (req, res, next) => {
  res.send("respond with a resource");
});
