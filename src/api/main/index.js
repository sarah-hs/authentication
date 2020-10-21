const router = require('express').Router();
const MainController = require('./controller');
const path = '';


// >> Here will be the
// definition of the routes.
router.get('', MainController.getIndex);
// This endpoint is to avoid error 404 for favicon
router.get('/favicon.ico', MainController.getFavicon);


module.exports = {
  path,
  router,
}
