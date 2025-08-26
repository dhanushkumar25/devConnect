const mongoose = require('mongoose');

// creating user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: String
    },
    gender: {
        type: String
    }
});

//creating a model
const User = mongoose.model("User",userSchema);

module.exports = User;