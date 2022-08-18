DROP DATABASE IF EXISTS lovebug;
CREATE DATABASE lovebug;

\c lovebug;

DROP TABLE IF EXISTS goodies;
CREATE TABLE goodies (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT,
    price INT,
    image TEXT NOT NULL,
    category TEXT NOT NULL
);

DROP TABLE IF EXISTS categories;
CREATE TABLE categories (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL
);

