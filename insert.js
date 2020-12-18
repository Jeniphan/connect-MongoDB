const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const data = require('./data');
const mongodb = require('mongoose');
const Product = require('./product.js');
const { db } = require('./product.js');


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongodb.connect('mongodb://localhost:27017/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/data', async (req, res) => {
    const product = new Product(data);
    const insert =  await product.save(function(err , results) {
        if (err) {
            throw  err;
        }
        console.log(`Insert Seccess`);

    });
    res.json(product);
});

app.post('/post',async (req, res) => {
    var input = req.body;
    var product = new Product(input);
    var insert = await product.save(function(err, results) {
        if (err) {
            throw err;
        }
        console.log(`Insert Seccess`);
    });
    res.json(input);

});

app.get('/find', async (req, res) => {
    var find_data = await Product.find({},function(err, results){
        if (err){
            throw err;
        }
        console.log(`Find Seccess`);
    });
    res.json(find_data);

});

app.listen(3000, () => {
    console.log('start port 3000');
});