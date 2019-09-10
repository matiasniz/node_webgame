import { PokemonRepository } from "../db/lib";

export const createPokemon = async (req, res) => {
  try {
    const pokemon = req.body;
    const newPokemon = await PokemonRepository.create(pokemon);
    res.json(newPokemon);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

export const pokemonController = {
  createPokemon
};
