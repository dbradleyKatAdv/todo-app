const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://127.0.0.1:27017/todo-app', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(e => {
    console.log("DB Connected")
}).catch(e => {
    console.error('Connection Error', e.message);
})

const db = mongoose.connection;

module.exports = db;