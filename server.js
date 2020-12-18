const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const data = require('./data.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req,res) => {
    res.send(`Hello cats`);
});

app.get('/index', (req,res) => {
    res.json(data);
});

app.post('/post', (req,res) => {
    data.push(req.body);
    //res.status(201).json(req.body);
    res.json(data);

});


app.listen(3000, () => {
    console.log('start port 3000');
});