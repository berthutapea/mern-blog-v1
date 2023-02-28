const { validationResult } = require('express-validator');

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    // const image= req.body.image;
    const body = req.body.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Input Value Tidak Sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const result = {
        message: 'Create Blog Post Success',
        data: {
            post_id: 1,
            title: "Title Blog",
            image: "imagefile.png",
            body: "Lorem Ipsum is simply dummy text of the printing",
            created_at: "27/02/2023",
            author: {
                uid: 1,
                name: "Testing"
            }
        }
    }
    res.status(201).json(result);
}