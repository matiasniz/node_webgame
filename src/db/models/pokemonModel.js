import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String
  },

  hp: {
    type: Number,
    required: true
  },
  attack: {
    type: Number,
    required: true
  },
  defense: {
    type: Number,
    required: true
  },
  spattack: {
    type: Number,
    required: true
  },
  spdefense: {
    type: Number,
    required: true
  },
  speed: {
    type: Number,
    required: true
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
      required: true
    }
  ]
});

export const PokemonModel = mongoose.model("Pokemon", schema, "pokemones");
