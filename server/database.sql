CREATE DATABASE feedii;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    secret varchar(100) NOT NULL,
    UNIQUE (email)
);

CREATE TABLE posts (
    post_id BIGSERIAL PRIMARY KEY,
    content TEXT,
    cover TEXT,
    date Date,
    owner_id INTEGER REFERENCES users (id)
);

CREATE TABLE likes (
    like_id BIGSERIAL PRIMARY KEY,
    owner INTEGER REFERENCES users (id),
    post INTEGER REFERENCES posts (post_id)
);

CREATE TABLE comments (
    comments_id BIGSERIAL PRIMARY KEY,
    comment TEXT NOT NULL,
    owner INTEGER REFERENCES users (id),
    post INTEGER REFERENCES posts (post_id)
);

CREATE TABLE bookmarks (
    id BIGSERIAL PRIMARY KEY,
    post_id INT REFERENCES posts (post_id),
    owner_id INT REFERENCES users (id),
    UNIQUE(post_id, owner_id)
);