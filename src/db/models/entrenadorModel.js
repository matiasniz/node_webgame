import mongoose from "mongoose";

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
      required: false
    }
  ]
});

export const EntrenadorModel = mongoose.model(
  "Entrenador",
  schema,
  "entrenadores"
);
