const mongoose = require('mongoose');

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