const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
    res.render('home.hbs', {
        autor: 'Artur'
    });
})

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        autor: 'Artur'
    });
})

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/services', (req, res) => {
    res.render('services.hbs');
})

app.listen(3000, () => {
    console.log('server is running');
});
