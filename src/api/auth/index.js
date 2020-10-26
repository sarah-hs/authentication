const router = require('express').Router();
const AuthController = require('./controller');
const path = '/auth';


// >> Here will be the
// definition of the routes.
router.get('', AuthController.signin);
router.post('', AuthController.signin);
router.put('', AuthController.signin);
router.delete('', AuthController.signin);


module.exports = {
  path,
  router,
}
