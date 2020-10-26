const UserController = {};
const User = require("./model");

// >> Here will be the
// endpoints for the Users.
UserController.findUser = (req, res) => {
    User.model.findOne(
        {username: req.body.username},
        {username: true, password: true}
    ).then(
        (user) => res.json(user)
    );
}

UserController.createUser = async (req, res) => {
    const created = await User.model.create(req.body);
    res.json(created);
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
