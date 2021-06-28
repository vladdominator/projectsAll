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


  if (swaggerExpress.runner.swagger.paths['/main']) {
   console.log('curl http://127.0.0.1:' + port + '/api/v1/main');
  }
  if (swaggerExpress.runner.swagger.paths['/reviews']) {
   console.log('curl http://127.0.0.1:' + port + '/api/v1/reviews');
  }
  if (swaggerExpress.runner.swagger.paths['/map']) {
    console.log('curl http://127.0.0.1:' + port + '/api/v1/map');
   }
  if (swaggerExpress.runner.swagger.paths['/genre']) {
    console.log('curl http://127.0.0.1:' + port + '/api/v1/genre');
  }
});
