const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// >> Here will be the User schema.
const UserSchema;

// >> Here will be the pre methods for the schema.
UserSchema.pre('', () => {});

// >> Here will be the User methods for the schema.
UserSchema.methods = {};

// >> Here will be the User model using the User schema.
const UserModel;

module.exports = {
  schema: UserSchema,
  model: UserModel,
}