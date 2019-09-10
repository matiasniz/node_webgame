import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String
  },

  stats: {
    type: Schema.Types.ObjectId,
    ref: "Stats",
    required: false
  },

  entrenador: {
    type: Schema.Types.ObjectId,
    ref: "Entrenador",
    required: false
  },

  type: [
    {
      type: Schema.Types.ObjectId,
      ref: "Type",
      required: false
    }
  ]
});

export const PokemonModel = mongoose.model("Pokemon", schema, "pokemones");
