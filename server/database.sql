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