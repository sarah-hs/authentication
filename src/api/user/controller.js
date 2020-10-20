const UserController = {};
const User = require("./model");


// >> Here will be the
// endpoints for the Users.

UserController.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    
    // Create User
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        deleted: req.body.deleted ? req.body.deleted : false
    });
    
    // Save User in the database
    user.save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
}

UserController.find = (req, res) => {
    const id = req.body.username;
    
    User.findById(
        id, {username: true, password: true},
        (err, user) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(user)
        }
    );
}

UserController.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.body.username;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
        } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Tutorial with id=" + id
        });
    });
}

UserController.delete = (req, res) => {
    const id = req.body.username;

    Tutorial.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
        } else {
            res.send({
                message: "Tutorial was deleted successfully!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Tutorial with id=" + id
        });
    });
}

module.exports = UserController;
