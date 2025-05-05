DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  date_of_birth DATE,
  profile_picture_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  caption TEXT NOT NULL,
  image_url TEXT,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert test users
INSERT INTO users (first_name, last_name, email, date_of_birth, profile_picture_url) 
VALUES 
  ('John', 'Doe', 'john@example.com', '1990-01-15', 'https://randomuser.me/api/portraits/men/1.jpg'),
  ('Jane', 'Smith', 'jane@example.com', '1992-03-20', 'https://randomuser.me/api/portraits/women/1.jpg'),
  ('Mike', 'Johnson', 'mike@example.com', '1988-07-10', 'https://randomuser.me/api/portraits/men/2.jpg'),
  ('Sarah', 'Williams', 'sarah@example.com', '1995-11-30', 'https://randomuser.me/api/portraits/women/2.jpg');

-- Insert test posts
INSERT INTO posts (user_id, caption, image_url, likes) 
VALUES 
  (1, 'Beautiful sunset at the beach! 🌅', 'https://source.unsplash.com/random/800x600/?sunset', 42),
  (2, 'Just finished my first marathon! 🏃‍♀️', 'https://source.unsplash.com/random/800x600/?running', 78),
  (3, 'Delicious homemade pasta 🍝', 'https://source.unsplash.com/random/800x600/?pasta', 25),
  (4, 'Adventure time in the mountains ⛰️', 'https://source.unsplash.com/random/800x600/?mountain', 91),
  (1, 'Coffee and code ☕💻', 'https://source.unsplash.com/random/800x600/?coffee', 33),
  (2, 'Weekend vibes 🎉', 'https://source.unsplash.com/random/800x600/?party', 55);