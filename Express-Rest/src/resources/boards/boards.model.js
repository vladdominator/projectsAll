const uuid = require('uuid');

class Board {
  constructor({ title, columns } = {}) {
    this.id = uuid.v4();
    this.title = title;
    this.column = columns;
  }
}

module.exports = Board;