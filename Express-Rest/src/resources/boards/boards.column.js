const uuid = require('uuid');

class Column {
   constructor(title, order) {
     this.id = uuid.v4();
     this.title = title;
     this.order = order;
   }
}
module.exports = Column;
