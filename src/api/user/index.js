const router = require('express').Router();
const UserController = require('./controller');
const path = '/users';

// >> Here will be the
// definition of the routes.
router.get('', UserController.find);
router.post('', UserController.create);
router.put('', UserController.update);
router.delete('', UserController.delete);

module.exports = {
  path,
  router,
}
