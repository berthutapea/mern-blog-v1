const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const blogController = require('../controllers/blog');

// [POST] : /v1/blog/post
router.post('/post', [
    body('title').isLength({ min: 5 }).withMessage('Input Title Minimum 5 Characters'),
    body('body').isLength({ min: 5 }).withMessage('Input Body Minimum 5 Characters')],
    blogController.createBlogPost);

module.exports = router;