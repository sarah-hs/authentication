const { jwtSecret } = require('../../config');
const jwt = require('jsonwebtoken');


// >> Here is where will
// declared the middlewares

const authenticate = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(!authorization)
        res.status(403).json({message: "No authorization header providen"});
    const token = authorization
    if(!token)
        res.status(401).json({message: "No authorization token send"});
    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            res.status(403).json({message: err.message})
        } else {
            console.log(user);
            req.user = user;
            next();
        }
    });
}


module.exports = {
    authenticate,
}
