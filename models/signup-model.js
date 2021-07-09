const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewUser = new NewUser(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true},
        password: {type: String, required: true},
    },
    { timestamps: true }
)

module.exports = mongoose.model('user', NewUser);