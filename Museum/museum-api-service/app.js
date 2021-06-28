'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/exhibition']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/exhibition');
  if (swaggerExpress.runner.swagger.paths['/main']) {
    console.log('curl http://127.0.0.1:' + port + '/api/v1/main');
  }
  if (swaggerExpress.runner.swagger.paths['/shop']) {
    console.log('curl http://127.0.0.1:' + port + '/api/v1/shop');
  }
}});
