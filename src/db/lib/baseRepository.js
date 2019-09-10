export default class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  create(object) {
    return this.model.create(object);
  }
}
