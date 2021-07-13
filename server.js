const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./database');
const todoRouter = require('./routes/todo-router');
const signupRouter = require('./routes/signup-router');
const loginRouter = require('./routes/login-router');

const app = express();
const apiPort = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/todos', todoRouter);
app.use('/api/users', signupRouter);
app.use('/api/login', loginRouter);
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
