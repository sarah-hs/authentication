const UserController = {};
const User = require("./model");

// >> Here will be the
// endpoints for the Users.
UserController.findUser = (req, res) => {
    User.findOne(
        {username: req.body.username},
        {username: true, password: true},
        (err, user) => {
            if (err) return res.status(200).send(err)
            return res.status(200).send(user)
        }
    );
}

UserController.createUser = (req, res) => {
    User.model.create(req.body);
    res.json(req.body);
}

UserController.updateUser = (req, res) => {
    res.json({
      username: req.body.username,
      email: req.body.email,
      firstname: req.body.firstname,
    });
}

UserController.deleteUser = (req, res) => {
    res.json({
      username: req.body.username,
      email: req.body.email,
      firstname: req.body.firstname,
    });
}

module.exports = UserController;