import BaseRepository from "./baseRepository";
import { PokemonModel } from "../models";

class PokemonRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

export default new PokemonRepository(PokemonModel);
