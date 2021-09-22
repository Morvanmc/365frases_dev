const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb+srv://<USER_NAME>:<PASSWORD>@cluster0.ddznl.mongodb.net/UmaFrase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(routes);

let PORT = 3333

app.listen(PORT, () => {
    console.log(`BACKEND EXECUTANDO NA PORTA: ${PORT}`)
});