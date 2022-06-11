const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const layouts = require('express-ejs-layouts');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(layouts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(4001, ()=> console.log('Server is started in port 4001'));

app.get('/',(req,res) => res.render('index',{
    people:[
        {
            name: 'Adib 1'
        },
        {
            name: 'Asif 2'
        },
        {
            name: 'Adib 3'
        },
        {
            name: 'Adib 4'
        }
    ]
}));

app.get('/about',(req,res) => res.render('about'));