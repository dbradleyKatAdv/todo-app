const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const apiPort = 3001;
const db = require('./database');
const todoRouter = require('./routes/todo-router');


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', todoRouter);


app.listen(apiPort, () => {console.log(`Server running on port ${apiPort}`)});