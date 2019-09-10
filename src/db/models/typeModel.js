import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String
  }
});

export const TypeModel = mongoose.model("Type", schema, "types");
