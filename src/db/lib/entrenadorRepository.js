import BaseRepository from "./baseRepository";
import { EntrenadorModel } from "../models";

class EntrenadorRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

export default new EntrenadorRepository(EntrenadorModel);
