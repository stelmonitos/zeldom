const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('.hbs', hbs.engine());
app.set('view engine', '.hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('home' , { layout: 'home' });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});