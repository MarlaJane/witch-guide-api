CREATE DATABASE witches;

CREATE USER 'witches'@'localhost' IDENTIFIED WITH mysql_native_password BY 'w!tChp1e@$3';
GRANT ALL ON witches.* TO 'witches'@'localhost';
USE witches;

CREATE TABLE Months (
  id INT auto_increment,
  name VARCHAR(255), 
  slug VARCHAR(255) ,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id));
  
select * from Months;
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

CREATE TABLE Moons (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  monthId VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id));

INSERT INTO Moons (name, monthId) VALUES ("Wolf", 1);
INSERT INTO Moons (name, monthId) VALUES ("Storm", 2);
INSERT INTO Moons (name, monthId) VALUES ("Seed", 3);
INSERT INTO Moons (name, monthId) VALUES ("Pink", 4);
INSERT INTO Moons (name, monthId) VALUES ("Flower", 5);
INSERT INTO Moons (name, monthId) VALUES ("Honey", 6);
INSERT INTO Moons (name, monthId) VALUES ("Thunder", 7);
INSERT INTO Moons (name, monthId) VALUES ("Corn", 8);
INSERT INTO Moons (name, monthId) VALUES ("Harvest", 9);
INSERT INTO Moons (name, monthId) VALUES ("Hunters", 10);
INSERT INTO Moons (name, monthId) VALUES ("Snow", 11);
INSERT INTO Moons (name, monthId) VALUES ("Oak", 12);
INSERT INTO Moons (name, monthId) VALUES ("Blue", 13);

USE witches;

CREATE TABLE Activities (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  monthId INT NOT NULL,
  moonId INT NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id));

  
INSERT INTO Activities (name, monthId, moonId) VALUES ("animal stich witchery", 1, 1);
INSERT INTO Activities (name, monthId, moonId) VALUES ("candle craft", 2, 2);
INSERT INTO Activities (name, monthId, moonId) VALUES ("scrying with air", 3, 3);
INSERT INTO Activities (name, monthId, moonId) VALUES ("witches garden", 4, 4);
INSERT INTO Activities (name, monthId, moonId) VALUES ("faerie magic and friendships", 5, 5);
INSERT INTO Activities (name, monthId, moonId) VALUES ("scrying with fire", 6, 6);
INSERT INTO Activities (name, monthId, moonId) VALUES ("sea witchery", 7, 7);
INSERT INTO Activities (name, monthId, moonId) VALUES ("spellcasting icepops", 8, 8);
INSERT INTO Activities (name, monthId, moonId) VALUES ("scrying with water", 9, 9);
INSERT INTO Activities (name, monthId, moonId) VALUES ("keys to crossroads", 10, 10);
INSERT INTO Activities (name, monthId, moonId) VALUES ("words of power", 11, 11);
INSERT INTO Activities (name, monthId, moonId) VALUES ("scrying with earth", 12, 12);
INSERT INTO Activities (name, monthId, moonId) VALUES ("misc", 13, 13);