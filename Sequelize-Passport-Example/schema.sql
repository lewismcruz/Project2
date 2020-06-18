DROP DATABASE IF EXISTS fitnessDB;

CREATE DATABASE fitnessDB;

USE fitnessDB;

-- Create the table plans.
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  pass varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
