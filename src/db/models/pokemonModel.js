import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

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
    autopopulate: true
  },

  type: [
    {
      type: Schema.Types.ObjectId,
      ref: "Type",
      autopopulate: true
    }
  ]
});

schema.plugin(autopopulate);

export const PokemonModel = mongoose.model("Pokemon", schema, "pokemones");
