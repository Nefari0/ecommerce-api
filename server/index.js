const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const products = require('../products.json')


const app = express();
const port = 4444;


app.get('/api/products', getProducts)
app.get('./api/products', getProducts);

app.get('./api/products/:id', getProduct);

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});

