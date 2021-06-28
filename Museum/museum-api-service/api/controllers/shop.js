'use strict';

const faker = require('faker')

module.exports = {
  shop: getShop
};

function getShop(req, res) {
  const arr = [];
  
  for(let i = 0; i <=5; i++) {
     arr.push({
        "name-product": '' + faker.commerce.productName(),
        "image-product": '' + faker.image.abstract(),
        "price": '' + faker.commerce.price()
        });
  }
  res.json([...arr]);
}