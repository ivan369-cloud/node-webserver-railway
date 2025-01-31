const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use( express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'SISG',
        titulo: 'Sistema de Salud'
    });   
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'SISG',
        titulo: 'Sistema de Salud'
    });  
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'SISG',
        titulo: 'Sistema de Salud'
    });  
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html');    
});

app.listen(port, ()=>{
    console.log(`App escuchando en http://localhost:${port}`)
})