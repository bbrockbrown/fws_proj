const pool = require('../config/config');

const getAllPosts = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM posts');
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res, next) => {
  const { user_id, caption, image_url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO posts (user_id, caption, image_url) VALUES ($1, $2, $3)',
      [user_id, caption, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;

  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ message: 'Invalid post ID' });
  }

  try {
    const result = await pool.query(
      'DELETE FROM posts WHERE id = $1', 
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const getPostByID = async (req, res, next) => {
  const { id } = req.params;

  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ message: 'Invalid post ID' });
  }

  try {
    const result = await pool.query(
      'SELECT FROM posts WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  getPostByID
};