const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const Schema = mongoose.Schema;

//user schema

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true
    },
    password: String,
    profile: {
      name: {
        type: String
      },
      picture:{
        type: String
      }
    },
    address: {
      type: String,
      unique: false
    },
    history: {
      date: Date
    }
  }
)

//hashing password for security purposre

UserSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10),null)
}


UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User',UserSchema)