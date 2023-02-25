const express = require('express');

const app = express();
const router = express.Router();

router.use('/products', (req, res, next) => {
    res.json({ name: "Gilbert Hutapea", email: "hutapeabert2002@gmail.com" })
    next();
})

router.use('/price', (req, res, next) => {
    res.json({ price: 3000000 });
    next();
})

router.get('/customers', (req, res, next) => {
    res.json({ title: "Costomers" });
    next();
})

app.use('/', router);


// GET '/users'

app.listen(4000)