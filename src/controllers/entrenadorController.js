import { EntrenadorRepository } from "../db/lib";

const createEntrenador = async (req, res) => {
  try {
    const entrenador = req.body;
    const newEntrenador = await EntrenadorRepository.create(entrenador);
    res.json(newEntrenador);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

export const entrenadorController = {
  createEntrenador
};
