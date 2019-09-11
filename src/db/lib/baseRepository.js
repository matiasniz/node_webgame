export default class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }

  findAll() {
    return this.model.find();
  }

  findById(id) {
    return this.model.findById(id);
  }

  remove(id) {
    return this.model.deleteOne({ _id: id });
  }

  async update(id, objecto) {
    let previous = await this.model.findById(id);
    let updatedObject = { ...previous._doc, ...objecto };
    return this.model.updateOne(updatedObject);
  }
}
