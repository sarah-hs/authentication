const AuthController = {};
const User = require("../user/model");
const jwt = require("../../services/jwt");

// >> Here will be the
// endpoints for the Users.

AuthController.signin = (req, res) => {
    User.model.findOne(
        {username: req.body.username},
        {username: true, password: true, firstname: true, lastname:true , email: true}
    ).then((user) => {
        if(user.validatePassword(req.body.password)) {
            const token = jwt.getToken(req.body.username);
            res.json({
                access_token: token,
                expiresIn: jwt.getExpiration(token),
            });
        } else {
            res.status(401).send("Unauthorized (401)");
        }
    });
}

module.exports = AuthController;
