import { TypeRepository } from "../db/lib";

const createType = async (req, res) => {
  try {
    const type = req.body;
    const newtype = await TypeRepository.create(type);
    res.json(newtype);
  } catch (error) {
    res.status(500).json({
      error
    });
  }
};

export const typeController = {
  createType
};
