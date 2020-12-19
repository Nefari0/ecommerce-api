const express = require('express');

// const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const products = require('../products.json');
const getProducts = require('./getProducts');


const app = express();
const port = 3001;


// app.get('/api/products', (req,res) => {
//     res.status(200).send(products)
// })
app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct)

// app.get('./api/products/:id', getProduct);

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});

