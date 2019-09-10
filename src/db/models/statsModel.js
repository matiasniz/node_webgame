import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  hp: {
    type: Number
  },
  attack: {
    type: Number
  },
  defense: {
    type: Number
  },
  spattack: {
    type: Number
  },
  spdefense: {
    type: Number
  },
  speed: {
    type: Number
  }
});

export const StatsModel = mongoose.model("Stats", schema, "stats");
