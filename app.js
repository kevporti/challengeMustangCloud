const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { engine } = require('express-handlebars');
const path = require('path');
require('./cron');
require('dotenv/config');

app.use(express.static('public'));

// Setting up Handlebars template
app.set('view engine', 'handlebars');
app.engine('handlebars', engine());

// Rendering the home template for the default url.
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('Server listening');
})

// Router
const positionTableRouter = require('./routes/positionTable');
app.use('/tabla-de-posiciones', positionTableRouter);

// DB Connection
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('DB connection established!');
    })
    .catch((err) => {
        console.error(err);
    })

module.exports = app;