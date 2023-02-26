const express = require('express');

const app = express();
const productRoutes = require('./src/routes/products');

app.use('/v1/customer', productRoutes);

app.listen(4000)