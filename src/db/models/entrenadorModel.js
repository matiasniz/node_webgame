import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const { Schema } = mongoose;

const schema = new Schema({
  nombre: {
    type: String
  },
  edad: {
    type: Number
  },
  ciudad: {
    type: String
  },
  pokemones: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pokemon",
      required: false,
      autopopulate: true
    }
  ]
});

schema.plugin(autopopulate);

export const EntrenadorModel = mongoose.model(
  "Entrenador",
  schema,
  "entrenadores"
);
