'use strict';

const faker = require('faker');

module.exports = {
  exhibition: getExhibition
};


function getExhibition(req, res) {
  const exhibitions = [];
  
  for (let i = 0; i < 10; i += 1) {
    exhibitions.push({
      "name-exhibi": '' + faker.company.companyName(),
      "image-exhibi": '' + faker.image.nature(),
      "cost-exhibi": '' + faker.datatype.number({
        "min": 10,
        "max": 100
      }),
      "name-guide": '' + faker.name.firstName(),
      "image-guide": '' + faker.image.people(),
      "ratio-guide":  '' + faker.datatype.float({
        "min": 1,
        "max": 10
      })
    });
  }
  

  res.json([...exhibitions]);
}
