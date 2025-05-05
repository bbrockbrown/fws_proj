const express = require('express');
const router = express.Router();
const { 
  getAllPosts,
  createPost,
  deletePost,
  getPostByID
} = require('../controllers/posts');

router.get('/', getAllPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.get('/:id', getPostByID);

module.exports = router;