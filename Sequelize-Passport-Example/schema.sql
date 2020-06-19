DROP DATABASE IF EXISTS fitnessDB;

CREATE DATABASE fitnessDB;

USE fitnessDB;

-- Create the table plans.
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  pass varchar(255) NOT NULL,
  female BOOLEAN, NOT NULL
  weight int,
  height int,
  -- https://stackoverflow.com/questions/6591613/saving-users-height-and-weight
  calories int,
  fat int,
  protein int,
  carbs int,
  PRIMARY KEY (id)
);
INSERT INTO users (movie) VALUES ('Rush Hour 2');




-- formatting height into feet'inches" format

CREATE TABLE height (
    id          SERIAL PRIMARY KEY,
    english     VARCHAR,
    inches      INT,
    cm          INT,
    hands       INT  // As in, the height of a horse
);
INSERT INTO height VALUES
    (1,'4 feet',           48, 122, 12),
    (2,'4 feet, 1 inch',   49, 124, 12),
    (3,'4 feet, 2 inches', 50, 127, 12),
    (3,'4 feet, 3 inches', 51, 130, 12),

    CREATE TABLE users (
    uid         SERIAL PRIMARY KEY,
    height      INT REFERENCES height(id),
    weight      INT references weight(id),
    sign        INT references sign(id),
    ...
);

SELECT *
FROM users
JOIN height ON users.height = height.id
WHERE height.inches >= 48 AND height.inches <= 60;