const pool = require('../config/config');

const getAllUsers = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('DB query error', err.message);
    next(err);
  }
};

const createUser = async (req, res, next) => {
  const { first_name, last_name, email, date_of_birth, profile_picture_url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (first_name, last_name, email, date_of_birth, profile_picture_url) VALUES ($1, $2, $3, $4, $5)',
      [first_name, last_name, email, date_of_birth, profile_picture_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { first_name, last_name, email, date_of_birth, profile_picture_url } = req.body;
  try {
    const result = await pool.query(
      'UPDATE users SET first_name = $1, last_name = $2, email = $3, date_of_birth = $4, profile_picture_url = $5 WHERE id = $6',
      [first_name, last_name, email, date_of_birth, profile_picture_url, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser
};