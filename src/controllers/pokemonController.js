import { PokemonRepository as repository } from "../db/lib";

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await repository.findById(id);
    res.json(item);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

const findAll = async (req, res) => {
  try {
    const items = await repository.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

const create = async (req, res) => {
  try {
    const type = req.body;
    const newItem = await repository.create(type);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const type = req.body;
    const updatedResponse = await repository.update(id, type);
    res.json(updatedResponse);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await repository.remove(id);
    res.json(item);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

export const controller = {
  create,
  update,
  findAll,
  findById,
  remove
};
