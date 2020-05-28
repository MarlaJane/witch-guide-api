CREATE DATABASE witches;

CREATE USER 'witches'@'localhost' IDENTIFIED WITH mysql_native_password BY 'w!tChp1e@$3';

GRANT ALL ON witches.* TO 'months'@'localhost';

USE witches;
CREATE TABLE Months (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL;
  moon VARCHAR(255) NOT NULL;
  activities VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

INSERT INTO Months (name, slug) VALUES ("January", "jan");
INSERT INTO Months (name, slug) VALUES ("February", "feb");
INSERT INTO Months (name, slug) VALUES ("March" , "march");
INSERT INTO Months (name, slug) VALUES ("April", "april");
INSERT INTO Months (name, slug) VALUES ("May", "may");
INSERT INTO Months (name, slug) VALUES ("June", "june" );
INSERT INTO Months (name, slug) VALUES ("July", "july"  );
INSERT INTO Months (name, slug) VALUES ("August", "august" );
INSERT INTO Months (name, slug) VALUES ("September","sept" );
INSERT INTO Months (name, slug) VALUES ("October", "oct");
INSERT INTO Months (name, slug) VALUES ("November", "nov");
INSERT INTO Months (name, slug) VALUES ("December", "dec" );
INSERT INTO Months (name, slug) VALUES ("Situational", "two" );

USE witches;
CREATE TABLE Moons (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL;
  monthName VARCHAR(255) NOT NULL;
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

INSERT INTO Moons (name, monthName) VALUES ("Wolf", "January");
INSERT INTO Moons (name, monthName) VALUES ("Storm", "February");
INSERT INTO Moons (name, monthName) VALUES ("Seed", "March");
INSERT INTO Moons (name, monthName) VALUES ("Pink", "April");
INSERT INTO Moons (name, monthName) VALUES ("Flower", "May");
INSERT INTO Moons (name, monthName) VALUES ("Honey", "June");
INSERT INTO Moons (name, monthName) VALUES ("Thunder", "July");
INSERT INTO Moons (name, monthName) VALUES ("Corn", "August");
INSERT INTO Moons (name, monthName) VALUES ("Harvest", "September");
INSERT INTO Moons (name, monthName) VALUES ("Hunters", "October");
INSERT INTO Moons (name, monthName) VALUES ("Snow", "November");
INSERT INTO Moons (name, monthName) VALUES ("Oak", "December");
INSERT INTO Moons (name, monthName) VALUES ("Blue", "Situational");

USE witches;
CREATE TABLE Activities (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL;
  monthName VARCHAR(255) NOT NULL;
  moonName VARCHAR(255) NOT NULL;
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)

INSERT INTO Activities (name, monthName, moonName) VALUES ("animal stich witchery", "January", "Wolf");
INSERT INTO Activities (name, monthName, moonName) VALUES ("candle craft", "February", "Storm");
INSERT INTO Activities (name, monthName, moonName) VALUES ("scrying with air", "March", "Seed");
INSERT INTO Activities (name, monthName, moonName) VALUES ("witches garden", "April", "Pink");
INSERT INTO Activities (name, monthName, moonName) VALUES ("faerie magic and friendships", "May", "Flower");
INSERT INTO Activities (name, monthName, moonName) VALUES ("scrying with fire", "June", "Honey");
INSERT INTO Activities (name, monthName, moonName) VALUES ("sea witchery", "July", "Thunder");
INSERT INTO Activities (name, monthName, moonName) VALUES ("spellcasting icepops", "August", "Corn");
INSERT INTO Activities (name, monthName, moonName) VALUES ("scrying with water", "September", "Harvest");
INSERT INTO Activities (name, monthName, moonName) VALUES ("keys to crossroads", "October", "Hunters");
INSERT INTO Activities (name, monthName, moonName) VALUES ("words of power", "November", "Snow");
INSERT INTO Activities (name, monthName, moonName) VALUES ("scrying with earth", "December", "Oak");
INSERT INTO Activities (name, monthName, moonName) VALUES ("misc", "Situational", "Blue");
