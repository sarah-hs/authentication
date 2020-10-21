const { Router } = require('express');
const router = new Router()

// >> Here will be the APIs
// importation ('require').
const main = require('./main');
const user = require('./user');
const auth = require('./auth');


// >> Here will be the APIs
// registration
router.use(main.path, main.router)
router.use(user.path, user.router)
router.use(auth.path, auth.router)

module.exports = router;