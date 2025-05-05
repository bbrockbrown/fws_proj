const express = require('express');
const router = express.Router();
const { 
  getAllPosts,
  createPost,
  deletePost,
  getPostByID
} = require('../controllers/posts');

