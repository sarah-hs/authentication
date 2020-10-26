const router = require('express').Router();
const UserController = require('./controller');
const path = '/users';


// >> Here will be the
// definition of the routes.
router.get('', UserController.findUser);
router.post('', UserController.createUser);
router.put('', UserController.updateUser);
router.delete('', UserController.deleteUser);


module.exports = {
  path,
  router,
}