'use strict';
var resourcesController = require('../controllers/resources-controller');

module.exports = function(router) {
  router.get('/api/resources', resourcesController.index);
  router.get('/api/resources/:id', resourcesController.show);
  router.post('/api/resources', resourcesController.create);
  router.patch('/api/resources/:id', resourcesController.update);
  router.delete('/api/resources/:id', resourcesController.delete);
};