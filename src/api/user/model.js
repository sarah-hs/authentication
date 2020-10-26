const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// >> Here will be the User schema.
const UserSchema = new mongoose.Schema({
        username: { type: String, required: true }, // required
        password: { type: String, required: true }, // required
        firstname: { type: String, required: true }, // required
        lastname: { type: String, required: true }, // required
        email: { type: String, required: true }, // required
        deleted: { type: Boolean, required: false }, // optional
    }, {
        collection: 'users',
        timestamps: true,
    });

// >> Here will be the pre methods for the schema.
UserSchema.pre('save', function name(next) {
    const hashed = bcrypt.hashSync(this.password, 12);
    this.password = hashed;
    next();
});

// >> Here will be the User methods for the schema.
UserSchema.methods = {
    validatePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
};

// >> Here will be the User model using the User schema.
const UserModel = mongoose.model('user', UserSchema);

module.exports = {
  schema: UserSchema,
  model: UserModel,
}
