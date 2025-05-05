CREATE DATABASE users_db;

\c users_db;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  date_of_birth DATE,
  profile_picture_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some dummy data
INSERT INTO users (first_name, last_name, email, date_of_birth, profile_picture_url)
VALUES 
  ('Brock', 'Brown', 'brockexample@gmail.com', '2000-04-20', 'https://i.imgur.com/rOBuI4d.jpg'),
  ('John', 'Doe', 'bademail@hotspot.com', '1990-01-01', 'https://www.exitlag.com/blog/wp-content/uploads/2024/12/How-to-Update-Roblox.webp');