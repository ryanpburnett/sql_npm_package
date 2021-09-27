DROP DATABASE IF EXISTS animals_db2;

CREATE DATABASE animals_db2;

USE animals_db2;

CREATE TABLE animal_table (
    animalName VARCHAR(100) NOT NULL,
    species VARCHAR(30),
    age INT(10)
);

INSERT INTO animal_table(animalName, species, age)
VALUES 
('Lola Copabannannas Foster and Pulaski Daylight Savings Time to Party', 'dog', 6),
('Abbalicious Sodelicious', 'dog', 9),
('Pancakes', 'cat', 412);




