### Schema
DROP DATABASE IF EXISTS funactiv_db;
CREATE DATABASE funactiv_db;
USE funactiv_db;

CREATE TABLE userData
(
    id INT AUTO_INCREMENT NOT NULL
	, user_id INT NULL
	, password VARCHAR(255) NOT NULL
	, first_name VARCHAR(20) NOT NULL
    , last_name VARCHAR(20) NOT NULL
    , email VARCHAR(100) NOT NULL
    , weight FLOAT(5,2) NOT NULL
    , height FLOAT(2,1) NOT NULL
    , gender CHAR
    , active_mins INT NULL
    , lifetime_total INT NULL
    , carb_intake INT NULL
    , protein_intake INT NULL 
    , fat_intake INT NULL
	, PRIMARY KEY (id)
    
);

CREATE TABLE friends_list
(
    friend_id INT NOT NULL AUTO_INCREMENT
    , first_name VARCHAR(20) NOT NULL
    , last_name VARCHAR(20) NOT NULL
    , email VARCHAR(100) NOT NULL
    , gender VARCHAR(1) NOT NULL
    , user_refer_id int NULL
    , PRIMARY KEY (friend_id)
);

CREATE TABLE blog 
(
   blog_id INT NOT NULL AUTO_INCREMENT
   , entry_id INT NOT NULL
   , blogpost_title VARCHAR(50) NOT NULL
   , PRIMARY KEY (blog_id)
);

CREATE TABLE goals
(
   id INT NOT NULL AUTO_INCREMENT
   , category VARCHAR(50) NOT NULL
   , carbs_goal INT NOT NULL
   , protein_goal INT NOT NULL
   , fat_goal INT NOT NULL
   , calories INT NOT NULL
   , active_mins INT NOT NULL
   , activity_date DATE
   , time_stamp TIMESTAMP(6) 
   , PRIMARY KEY (id)
);

CREATE TABLE challenge
(
   id INT AUTO_INCREMENT NOT NULL
   , title VARCHAR(30) NOT NULL
   , challenge_type VARCHAR(10) NOT NULL
   , challenge_extend BOOLEAN
   , challenge_status VARCHAR(10)
   , PRIMARY KEY (id)

);