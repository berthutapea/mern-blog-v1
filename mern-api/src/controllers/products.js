exports.createProduct = (req, res, next) => {
    res.json(
        {
            message: 'Create Product Success',
            data: {
                id: 1,
                name: 'Sari Gandum',
                price: 8000
            }
        }
    );
    next();
}

exports.getAllProducts = (req, res, next) => {
    res.json({ name: "Gilbert Hutapea", email: "hutapeabert2002@gmail.com" });
    next();
}