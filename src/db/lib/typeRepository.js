import BaseRepository from "./baseRepository";
import { TypeModel } from "../models";

class TypeRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

export default new TypeRepository(TypeModel);
