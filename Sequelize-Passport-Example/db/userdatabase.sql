### Schema

CREATE DATABASE funactiv_db;
USE funactiv_db;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
	
    
    
    
    sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
