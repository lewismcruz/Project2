### Schema

CREATE DATABASE funactiv_db;
USE funactiv_db;

-- I used 'amember' for 'user' - not married  to it.  If team wants we can change to 'user'.

-- Missing datatypes for a few metrics.  Need to confirm are these 'time' values and how many decimal places do we want to hold.

CREATE TABLE amember
(
    id INT(11) AUTO_INCREMENT NOT NULL,
	amember_id INT(11),
	first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    weight FLOAT(5,2) NOT NULL,
    height FLOAT(2,1) NOT NULL,
    gender CHAR,
    active_mins INT(2),
    lifetime_total 
    carb_intake
    protien_intake
    fat_intake    
	PRIMARY KEY (amember_id)
    
);

CREATE TABLE friends_list
(
    friend_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    gender VARCHAR(1) NOT NULL,
    amember_refer_id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (friend_id),
    FOREIGN KEY (amember_id) REFERENCES amember(id)
);

CREATE TABLE blog 
(
   entry_id INT NOT NULL AUTO_INCREMENT,
   blogpost_title VARCHAR(50) NOT NULL
);

CREATE TABLE goals
(
   goal_id INT NOT NULL AUTO_INCREMENT,                                                                               
   category VARCHAR(50) NOT NULL,
   carbs_goal INT NOT NULL,
   protein_goal INT NOT NULL,
   fat_goal INT NOT NULL,
   calories INT NOT NULL,
   active_mins INT NOT NULL,
   activity_date DATE,
   time_stamp TIMESTAMP(6) 
);

CREATE TABLE challenge
(
   id INT(11) AUTO_INCREMENT NOT NULL,
   title VARCHAR(30) NOT NULL,
   challenge_type VARCHAR(10) NOT NULL,
   challenge_extend BOOLEAN,
   challenge_status VARCHAR(10),
   amember_id INT(11),
   PRIMARY KEY (id),
   FOREIGN KEY (friend_id) REFERENCES friend(id)

);