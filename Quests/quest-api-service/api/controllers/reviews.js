'use strict';

const util = require('util');
const faker = require('faker');


module.exports = {
  reviews: getReviews
};


function getReviews(req, res) {
  const reviewsData = [];
  const years = ['2019', '2020', '2021'];

  const getDate = () => {
    let day = (Math.floor(Math.random() * 30 + 1));
    let month = (Math.floor(Math.random() * 12 + 1));
    let year = (years[Math.floor(Math.random() * 3)]);

    day = day > 9 ? '' + day : '0' + day;
    month = month > 9 ? '' + month : '0' + month;

    const dateResult = [day, month, year].join('-');

    return dateResult
  }

  for (let i = 0; i < Math.floor(Math.random() * 60); i += 1) {
    reviewsData.push({
      name:     '' + faker.name.firstName(),
      lastName: '' + faker.name.lastName(),
      image:    '' + faker.image.avatar(),
      review:   '' + faker.lorem.paragraph(),
      date:     '' + getDate()
    });
  }

  for (let i = 1; i < reviewsData.length; i += 1) {
    for (let j = 0; j < reviewsData.length - i; j += 1) {
      const time_1_arr = reviewsData[j].date.split('-');
      const time_2_arr = reviewsData[j + 1].date.split('-');

      let time1 = +time_1_arr[0] + +time_1_arr[1] * 30 + +time_1_arr[2] * 365;
      let time2 = +time_2_arr[0] + +time_2_arr[1] * 30 + +time_2_arr[2] * 365;

      if (time1 <= time2) {
        [reviewsData[j], reviewsData[j + 1]] = [reviewsData[j + 1], reviewsData[j]];
      }
    }
  }

  res.json([...reviewsData]);
}
