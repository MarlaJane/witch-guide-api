CREATE DATABASE witches;

CREATE USER 'witches'@'localhost' IDENTIFIED WITH mysql_native_password BY 'w!tChp1e@$3';
GRANT ALL ON witches.* TO 'witches'@'localhost';
USE witches;

CREATE TABLE Months (
  id INT auto_increment,
  name VARCHAR(255), 
  affirmation VARCHAR(1000),
  slug VARCHAR(255) ,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id));
  
select * from Months;
INSERT INTO Months (name, affirmation, slug) VALUES ("January","My emotions are my guide. I will follow my own light through any darkness.", "jan");
INSERT INTO Months (name, affirmation, slug) VALUES ("February","I am excited to bring new energy into my life.", "feb");
INSERT INTO Months (name, affirmation, slug) VALUES ("March", "I am powerful, energized, and aligned with my spirit.", "march");
INSERT INTO Months (name, affirmation, slug) VALUES ("April", "I love and forgive myself (and others).", "april");
INSERT INTO Months (name, affirmation, slug) VALUES ("May", "I know who I am and I am strong in my own power.", "may");
INSERT INTO Months (name, affirmation, slug) VALUES ("June", "I am creatling my life and fufilling my purpose.", "june" );
INSERT INTO Months (name, affirmation, slug) VALUES ("July", "I am ready to see new wisdom and insights.", "july"  );
INSERT INTO Months (name, affirmation, slug) VALUES ("August", "I am ready to let go, to release, and make space for what is next.", "august" );
INSERT INTO Months (name, affirmation, slug) VALUES ("September", "I am aware and connected to the wisdom of the universe.", "sept" );
INSERT INTO Months (name, affirmation, slug) VALUES ("October", "I am a cosmic being.", "oct");
INSERT INTO Months (name, affirmation, slug) VALUES ("November", "I rest, relax, and sit in peace with the unknown.", "nov");
INSERT INTO Months (name, affirmation, slug) VALUES ("December", "I am safe and secure. I know and trust myself.", "dec" );
INSERT INTO Months (name, affirmation, slug) VALUES ("Situational", "I am full of magic. Wonderous things await me.", "two" );

CREATE TABLE Moons (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  newAndWaxing VARCHAR (100),
  full VARCHAR (100),
  wainingAndDark VARCHAR (1000),
  monthId VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id));

INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Wolf","Grounding, healing, and gaining knowledge about ones self", 
  "Self-acceptence, belonging, and belief in yourself and your power.",
  "Letting go of insecurties. Banishing ill health and bad luck.", 1);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Storm", "Increasing awareness of your shadow self and subconcious.",
  "Divining messages from dreams and emotions. Reawakening visions.",
  "Purification, clearing, and cleansing of emotions and space.", 2);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Seed", "Growing things, starting new projects and planning for success.",
  "Setting intentions and visualizing the outcome, taking action, making change.",
  "Banishing anxiety or cynicism about change and starting new things.", 3);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Pink", "Starting new projects, taking action, and following your curiosity.",
  "Energy, strength, growth, happieness, and resurrection of your true self.",
  "Reflecting on self-doubt and inaction, then banishing any issues.", 4);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Flower", "Attracting love, passion, abundance, and increasing vitality.",
  "Ignighting your power, bringing your dreams to life, and cultivating your spirituality.",
  "Banishing fears and releasing resentment towards those you love.", 5);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Honey", "Increasing confidence, abundance, and making new friends.",
  "Protection, celebrating your success, and divination for your higher self.",
  "Releasing self doubt, perfectionism, and negative emotions.", 6);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Thunder", "Increasing confidence in your voice, vision, and creative expression.",
  "Divination for your highest self and discovering your souls purpose.",
  "Releasing emotional patterns that are holding back your true self.", 7);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Corn", "Increasing abundance, success, playfullness, and fufillment.",
  "Connecting to your guiding light and intuition. Gratitude and protection.",
  "Releasing feelings of scarcity, unworthiness, or boredom.", 8);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES
  ("Harvest", "Accepting loss. Recovering from grief. Preparing for change.",
  "Assessment and balance. Finding the courage to make change, transfrom, and or let go.",
  "Releasing bitterness, attatchment, and things that no longer serve you.",  9);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Hunters", "Learning and healthing from the past. Increasing psychic awareness.",
  "Transformation and divining messages from ancestors and spirit guides.",
  "Realease from old emotional patterns, beliefs, and attatchments.", 10);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES
  ("Snow", "Increasing coziness, comfort at home, and the simple joys of life.",
  "Interconnectedness and spiritual transcendence. Connection with others.",
  "Inward reflection. Releasing sorrow and feelings of isolation.", 11);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Oak", "Increasing rest and relaxation. Enhancing a jolly mood and spirit.",
  "Rebirth and transformation. Recognizing your brilliance and light.",
  "Releasing to the universe. Respite and surrender to the unknown.", 12);
INSERT INTO Moons (name, newAndWaxing, full, wainingAndDark, monthId) VALUES 
  ("Blue", "Growing your power and strength. Making things happen.",
  "Calling in that which is delightfully unexpected. Massive transformations.",
  "Deep silence and connection to intuitive guidance.", 13);

USE witches;

CREATE TABLE Activities (
  id INT auto_increment,
  name VARCHAR(255) NOT NULL, 
  description VARCHAR(1000),
  monthId INT NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id));

  
INSERT INTO Activities (name, description, monthId) VALUES ("animal stich witchery", "Crafting to connect your inner power.", 1);
INSERT INTO Activities (name, description, monthId) VALUES ("knot magic", "Creating and releasing energy.", 1);
INSERT INTO Activities (name, description, monthId) VALUES ("candle craft","Bright magic for the dark of winter.", 2);
INSERT INTO Activities (name, description, monthId) VALUES ("power in the darkness","Magic to prepare for spring.", 2);
INSERT INTO Activities (name, description, monthId) VALUES ("scrying with air", "Listening to the wisdom on the wind.", 3);
INSERT INTO Activities (name, description, monthId) VALUES ("the broom ride", "Visualize your most magical self.", 3);
INSERT INTO Activities (name, description, monthId) VALUES ("awen", "Inherit creative power.", 3);
INSERT INTO Activities (name, description, monthId) VALUES ("witches garden", "Growing your magic on earth and in spirit.", 4);
INSERT INTO Activities (name, description, monthId) VALUES ("faerie magic and friendships", "Inviting faeries to spells and rituals.", 5);
INSERT INTO Activities (name, description, monthId) VALUES ("scrying with fire", "Divining the wisdom of the flames.", 6);
INSERT INTO Activities (name, description, monthId) VALUES ("wandcraft", "Empower your magic and your wand.", 6);
INSERT INTO Activities (name, description, monthId) VALUES ("burning sprigs of gorse", "Calling forth prosperity and protection.", 6);
INSERT INTO Activities (name, description, monthId) VALUES ("sea witchery", "Rituals with the life-giving energy of water.", 7);
INSERT INTO Activities (name, description, monthId) VALUES ("moon baths", "Purify and prepare for new beginnings.", 7);
INSERT INTO Activities (name, description, monthId) VALUES ("celtic knots", "Brining protection and power.", 8);
INSERT INTO Activities (name, description, monthId) VALUES ("spellcraft", "Making magic for the first harvest.", 8);
INSERT INTO Activities (name, description, monthId) VALUES ("ritual bread", "Giving thanks for the earths abundance.", 8),
INSERT INTO Activities (name, description, monthId) VALUES ("spellcasting icepops", "Looking towards a fufilling future.", 8);
INSERT INTO Activities (name, description, monthId) VALUES ("scrying with water", "Elemental wisdom from the depths of emotion.", 9);
INSERT INTO Activities (name, description, monthId) VALUES ("reciprocity ritual", "Give and take for the autumnal equinox.", 9);
INSERT INTO Activities (name, description, monthId) VALUES ("fate cake", "The ability to influence your fate if consumed.", 9);
INSERT INTO Activities (name, monthId, moonId) VALUES ("keys to crossroads", "Finding wisdom in the dark.", 10);
INSERT INTO Activities (name, description, monthId) VALUES ("samhain seance", "A ritual call to loved ones in the spirit world.", 10)
INSERT INTO Activities (name, description, monthId) VALUES ("ritual of the unknown", "A spell that unfolds before you.", 11);
INSERT INTO Activities (name, description, monthId) VALUES ("words of power", "Ancient words to use in a spell with given intention.", 11);
INSERT INTO Activities (name, monthId, moonId) VALUES ("scrying with earth", "The grounding wisdom of stones and bones.", 12);
INSERT INTO Activities (name, description, monthId) VALUES ("cookie spells", "Kitchen witchery to attract what you desire.", 12);
INSERT INTO Activities (name, description, monthId) VALUES ("spellcasting soaps", "Protection of the body and spirit for the upcoming year.", 12);
INSERT INTO Activities (name, monthId, moonId) VALUES ("self care and beauty rituals", "Grounding yourself inside and out.", 13);