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

INSERT INTO Months (name) VALUES ("January");
INSERT INTO Months (name) VALUES ("February");
INSERT INTO Months (name) VALUES ("March");
INSERT INTO Months (name) VALUES ("April");
INSERT INTO Months (name) VALUES ("May");
INSERT INTO Months (name) VALUES ("June");
INSERT INTO Months (name) VALUES ("July");
INSERT INTO Months (name) VALUES ("August");
INSERT INTO Months (name) VALUES ("September");
INSERT INTO Months (name) VALUES ("October");
INSERT INTO Months (name) VALUES ("November");
INSERT INTO Months (name) VALUES ("December");
INSERT INTO Months (name) VALUES ("Situational");

INSERT INTO Months (moon) VALUES ("Wolf");
INSERT INTO Months (moon) VALUES ("Storm");
INSERT INTO Months (moon) VALUES ("Seed");
INSERT INTO Months (moon) VALUES ("Pink");
INSERT INTO Months (moon) VALUES ("Flower");
INSERT INTO Months (moon) VALUES ("Honey");
INSERT INTO Months (moon) VALUES ("Thunder");
INSERT INTO Months (moon) VALUES ("Corn");
INSERT INTO Months (moon) VALUES ("Harvest");
INSERT INTO Months (moon) VALUES ("Hunters");
INSERT INTO Months (moon) VALUES ("Snow");
INSERT INTO Months (moon) VALUES ("Oak");
INSERT INTO Months (moon) VALUES ("Blue");

INSERT INTO Months (activities) VALUES ("animal stich witchery");
INSERT INTO Months (activities) VALUES ("candle craft");
INSERT INTO Months (activities) VALUES ("scrying with air");
INSERT INTO Months (activities) VALUES ("witches garden");
INSERT INTO Months (activities) VALUES ("faerie magic and friendships");
INSERT INTO Months (activities) VALUES ("scrying with fire");
INSERT INTO Months (activities) VALUES ("sea witchery");
INSERT INTO Months (activities) VALUES ("spellcasting icepops");
INSERT INTO Months (activities) VALUES ("scrying with water");
INSERT INTO Months (activities) VALUES ("keys to crossroads");
INSERT INTO Months (activities) VALUES ("words of power");
INSERT INTO Months (activities) VALUES ("scrying with earth");
INSERT INTO Months (activities) VALUES ("misc");

INSERT INTO Months (slug) VALUES ("jan");
INSERT INTO Months (slug) VALUES ("feb");
INSERT INTO Months (slug) VALUES ("march");
INSERT INTO Months (slug) VALUES ("april");
INSERT INTO Months (slug) VALUES ("may");
INSERT INTO Months (slug) VALUES ("june");
INSERT INTO Months (slug) VALUES ("july");
INSERT INTO Months (slug) VALUES ("aug");
INSERT INTO Months (slug) VALUES ("sept");
INSERT INTO Months (slug) VALUES ("oct");
INSERT INTO Months (slug) VALUES ("nov");
INSERT INTO Months (slug) VALUES ("dec");
INSERT INTO Months (slug) VALUES ("two");