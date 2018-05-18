const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const { isEmail } = require('validator');

const {date} = require('./util/hbsObject');

const app = express();

// set html engine and static assets
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// set partials location
hbs.registerPartials(__dirname + '/views/partials')

// body parser
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.render('home.hbs', date);
});

app.get('/home', (req, res) => {
    res.render('home.hbs', date);
});

app.get('/about', (req, res) => {
    res.render('about.hbs', date);
});

app.get('/services', (req, res) => {
    res.render('services.hbs', date);
});

app.post('/subscribe', (req, res) => {
    if (isEmail(req.body.email)) {
        return res.status(201).send();
    } else {
        return res.status(406).send();
    }
});

app.post('/message', (req, res) => {
    if (req.body) {
        return res.status(201).send();
    } else {
        return res.status(406).send();
    }
});

app.listen(3000, () => {
    console.log('server is running');
});
