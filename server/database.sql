CREATE DATABASE pillu;

CREATE TABLE users (
    id bigserial primary key,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    secret varchar(100) NOT NULL,
    UNIQUE (email)
);