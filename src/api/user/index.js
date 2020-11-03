const router = require('express').Router();
const UserController = require('./controller');
const path = '/users';
const {authenticate} = require('../../services/middlewares');


// >> Here will be the
// definition of the routes.
router.get('/me', authenticate, UserController.findUser);
router.post('', UserController.createUser);
router.put('', UserController.updateUser);
router.delete('', UserController.deleteUser);


module.exports = {
    path,
    router,
}
